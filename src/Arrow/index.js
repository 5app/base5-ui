import React, {forwardRef, useMemo} from 'react';
import PropTypes from 'prop-types';

import getArrowPosition, {getPlacements} from './getArrowPosition';

const transformMap = {
	top: 'translateY(-50%) rotate(135deg)',
	right: 'translateX(50%) rotate(225deg)',
	bottom: 'translateY(50%) rotate(-45deg)',
	left: 'translateX(-50%) rotate(45deg)',
};

function useArrowStyles(primaryPlacement, arrowSize) {
	const arrowStyles = useMemo(
		() => ({
			position: 'absolute',

			display: 'inline-block',
			width: arrowSize + 'px',
			height: arrowSize + 'px',

			backgroundColor: 'inherit',
			border: 'inherit',
			borderLeftColor: 'transparent',
			borderBottomColor: 'transparent',

			transform: transformMap[primaryPlacement],
			transformOrigin: '50%',
			clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
		}),
		[arrowSize, primaryPlacement]
	);

	return arrowStyles;
}

const Arrow = forwardRef((props, ref) => {
	const {placement, size, distanceFromEdge, style} = props;

	const [primaryPlacement] = getPlacements(placement);
	const baseArrowStyles = useArrowStyles(primaryPlacement, size);
	const defaultArrowPosition = useMemo(
		() =>
			getArrowPosition(placement, {
				centerOffset: `-${size / 2}px`,
				defaultSecondaryValue: distanceFromEdge,
			}),
		[distanceFromEdge, placement, size]
	);
	// Don't let an empty primary position attribute reset the default
	if (style && style[primaryPlacement] === '') {
		delete style[primaryPlacement];
	}
	const arrowStyle = {
		...baseArrowStyles,
		...defaultArrowPosition,
		...style,
	};

	return <span ref={ref} style={arrowStyle} />;
});

Arrow.displayName = 'Arrow';

Arrow.defaultProps = {
	placement: 'top',
	size: 8,
	distanceFromEdge: 8,
};

Arrow.propTypes = {
	/** Controls how far the arrow is placed from the container's edge when the placement contains a '-start' or '-end' suffix. */
	distanceFromEdge: PropTypes.number,
	/** The arrow will be placed on the opposing side of the defined direction: 'top', 'bottom', 'left', or 'right'. Add an optional suffix '-start' or '-end' to align the arrow to the start or end of the chosen direction. */
	placement: PropTypes.string,
	/** Control the arrow size (length of side) */
	size: PropTypes.number,
};

export default Arrow;
