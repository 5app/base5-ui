import React from 'react';

import getArrowPosition, {getPlacements} from './getArrowPosition';

const transformMap = {
	top: 'translateY(-50%) rotate(135deg)',
	right: 'translateX(50%) rotate(225deg)',
	bottom: 'translateY(50%) rotate(-45deg)',
	left: 'translateX(-50%) rotate(45deg)',
};

const getArrowStyles = (primaryPlacement, arrowSize) => {
	return {
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
	};
};

const Arrow = React.forwardRef((props, ref) => {
	const {placement, size, style} = props;

	const [primaryPlacement] = getPlacements(placement);
	const baseArrowStyles = getArrowStyles(primaryPlacement, size);
	const defaultArrowPosition = getArrowPosition(placement, {
		centerOffset: `-${size / 2}px`,
	});
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
};

export default Arrow;
