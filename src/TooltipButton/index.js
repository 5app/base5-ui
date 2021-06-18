import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import {POPPER_PLACEMENTS} from '../constants';
import {mergeCallbacks} from '../utils';

import Button from '../Button';
import Tooltip from '../Tooltip';
import useUniqueId from '../useUniqueId';

const TooltipButton = forwardRef((props, outerRef) => {
	const {
		children,
		title,
		id,
		tooltipPlacement,
		'aria-label': ariaLabel,
		...otherProps
	} = props;

	const tooltipId = useUniqueId(id && `${id}-tooltip`);
	const useTitleAsDescription = Boolean(children) || ariaLabel;
	const descriptionId = useTitleAsDescription ? tooltipId : undefined;

	if (!title) {
		return (
			<Button {...otherProps} id={id} aria-label={ariaLabel}>
				{children}
			</Button>
		);
	}

	return (
		<Tooltip
			delay={250}
			content={title}
			placement={tooltipPlacement}
			renderWhenClosed={useTitleAsDescription}
			id={descriptionId}
			referenceRef={outerRef}
		>
			{({ref, open, close}) => (
				<Button
					{...otherProps}
					id={id}
					ref={ref}
					onMouseEnter={mergeCallbacks(open, props.onMouseEnter)}
					onMouseLeave={mergeCallbacks(close, props.onMouseLeave)}
					onMouseDown={mergeCallbacks(close, props.onMouseDown)}
					onTouchStart={mergeCallbacks(open, props.onTouchStart)}
					onTouchEnd={mergeCallbacks(close, props.onTouchEnd)}
					onFocus={mergeCallbacks(open, props.onFocus)}
					onBlur={mergeCallbacks(close, props.onBlur)}
					aria-label={useTitleAsDescription ? ariaLabel : title}
					aria-describedby={descriptionId}
				>
					{children}
				</Button>
			)}
		</Tooltip>
	);
});

TooltipButton.displayName = 'TooltipButton';

TooltipButton.propTypes = {
	/**
	 * The button tooltip's content.
	 */
	title: PropTypes.string,
	/**
	 * The button tooltip's position relative to the button.
	 */
	tooltipPlacement: PropTypes.oneOf(POPPER_PLACEMENTS),
};

export default TooltipButton;
