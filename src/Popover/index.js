import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import Box from '../Box';
import usePopover from '../usePopover';

const PopoverCard = forwardRef(({isOpen, children, ...otherProps}, ref) => {
	if (!isOpen) return null;

	return (
		<Portal>
			<Box
				ref={ref}
				background="black"
				color="white"
				borderRadius="small"
				px="s"
				py="xs"
				maxWidth="100%"
				{...otherProps}
			>
				{children}
			</Box>
		</Portal>
	);
});

PopoverCard.displayName = 'PopoverCard';

const Popover = forwardRef((props, ref) => {
	const {
		children,
		content,

		placement,
		offset,
		distance,
		arrowSize,
		positionFixed,
		adaptivePositioning,
		matchReferenceWidth,
		...otherProps
	} = props;

	const popover = usePopover({
		ref,
		placement,
		offset,
		distance,
		arrowSize,
		positionFixed,
		adaptivePositioning,
		matchReferenceWidth,
	});

	return (
		<>
			{children({
				ref: popover.setReferenceRef,
				update: popover.update,
			})}
			<PopoverCard
				{...otherProps}
				{...popover.props}
				ref={popover.setRef}
			>
				{content}
				{popover.arrow}
			</PopoverCard>
		</>
	);
});

Popover.displayName = 'Popover';

Popover.propTypes = {
	content: PropTypes.node,
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
	offset: PropTypes.number,
	distance: PropTypes.number,
	arrowSize: PropTypes.number,
	positionFixed: PropTypes.bool,
	adaptivePositioning: PropTypes.bool,
	matchReferenceWidth: PropTypes.bool,
};

// @component
export default Popover;
