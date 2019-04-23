import React from 'react';

import Svg from './BaseSvg';

const NavRightIcon = React.forwardRef((props, ref) => {
	const {
		size,
		color,
		...otherProps
	} = props;

	return (
		<Svg
			{...otherProps}
			ref={ref}
			viewBox="0 0 18 18"
			width={size}
			height={size}
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
		>
			<path d="M5,4l9,5l-9,5l0,-10Z" />
		</Svg>
	);
});

NavRightIcon.displayName = 'NavRightIcon';

NavRightIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default NavRightIcon;