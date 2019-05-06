import React from 'react';

import getPrimaryPlacement from './getPrimaryPlacement';

const transformMap = {
	top: 'translateY(-50%) rotate(135deg)',
	right: 'translateX(50%) rotate(225deg)',
	bottom: 'translateY(50%) rotate(-45deg)',
	left: 'translateX(-50%) rotate(45deg)',
};

const getArrowStyles = (placement, arrowSize) => {
	const primaryPlacement = getPrimaryPlacement(placement);

	return {
		position: 'absolute',
		[primaryPlacement]: '100%',

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
	const {
		placement,
		size,
		style
	} = props;

	const magicStyle = getArrowStyles(placement, size);
	const arrowStyle = {
		...style,
		...magicStyle,
	};

	return <span ref={ref} style={arrowStyle} />;
});

Arrow.displayName = 'Arrow';

Arrow.defaultProps = {
	placement: 'top',
	size: 8,
};

export default Arrow;
