import React, {useRef, forwardRef} from 'react';
import PropTypes from 'prop-types';

import useOnClickOutside from '../useOnClickOutside';
import usePopoverState from '../usePopoverState';
import useMergedRefs from '../useMergedRefs';
import Popover from '../Popover';

/**
 * If content is a function, call it with parameters,
 * e.g. the function to close the tooltip.
 */

function getContent(content, parameters) {
	if (typeof content === 'function') {
		return content(parameters);
	}
	return content;
}

const Tooltip = forwardRef((props, ref) => {
	const {allowTooltipClicks, children, content, delay, ...otherProps} = props;

	const {isOpen, open, close, toggle} = usePopoverState({
		openDelay: delay,
	});

	const popOverRef = useRef();
	const mergedRefs = useMergedRefs([ref, popOverRef]);

	useOnClickOutside(allowTooltipClicks ? popOverRef : null, close, isOpen);

	return (
		<Popover
			{...otherProps}
			isOpen={isOpen}
			ref={mergedRefs}
			content={getContent(content, {close})}
		>
			{popover =>
				children({
					...popover,
					isOpen,
					open,
					close,
					toggle,
				})
			}
		</Popover>
	);
});

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
	allowTooltipClicks: false,
	theme: 'dark',
	spacing: 'xs',
	fontSize: 's',
};

Tooltip.propTypes = {
	allowTooltipClicks: PropTypes.bool,
	delay: PropTypes.number,
	placement: PropTypes.oneOf([
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

export {default as Arrow} from '../Arrow';

export default Tooltip;
