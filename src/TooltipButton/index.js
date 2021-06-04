import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import {mergeCallbacks} from '../utils';

import Button from '../Button';
import Tooltip from '../Tooltip';
import useUniqueId from '../useUniqueId';

const TooltipButton = forwardRef((props, outerRef) => {
	const {
		children,
		title,
		description,
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
	title: PropTypes.string,
	description: PropTypes.string,
	tooltipPlacement: PropTypes.oneOf([
		'auto',
		'top',
		'bottom',
		'left',
		'right',
		'auto-start',
		'top-start',
		'bottom-start',
		'left-start',
		'right-start',
		'auto-end',
		'top-end',
		'bottom-end',
		'left-end',
		'right-end',
	]),
};

export default TooltipButton;
