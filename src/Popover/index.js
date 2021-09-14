import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import {POPPER_PLACEMENTS} from '../constants';
import usePopover from '../usePopover';
import PopoverCard from '../PopoverCard';

const Popover = forwardRef((props, ref) => {
	const {
		children,
		content,
		referenceRef,
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
		referenceRef,
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
				arrow={popover.arrow}
			>
				{content}
			</PopoverCard>
		</>
	);
});

Popover.displayName = 'Popover';

Popover.propTypes = {
	/*
	 * Content to be rendered into the popover
	 */
	content: PropTypes.node,
	/*
	 * Control the positioning of the popover relative to its reference.
	 * Takes a Popper.js placement string
	 */
	placement: PropTypes.oneOf(POPPER_PLACEMENTS),
	/*
	 * Shifts the popover along the side perpendicular
	 * to the direction the popover is attached to.
	 * E.g. if the popover is placed at the top or bottom,
	 * a negative offset will move it left, a positive right.
	 */
	offset: PropTypes.number,
	/*
	 * Control the popover's distance from its reference
	 */
	distance: PropTypes.number,
	/*
	 * Control the size of the popover's arrow
	 */
	arrowSize: PropTypes.number,
	/*
	 * See the Popper.js docs about strategy: 'fixed' for details about this property
	 */
	positionFixed: PropTypes.bool,
	/*
	 * See the Popper.js docs for details about this property
	 */
	adaptivePositioning: PropTypes.bool,
	/*
	 * Locks the width of the popup that of the reference
	 */
	matchReferenceWidth: PropTypes.bool,
};

export default Popover;
