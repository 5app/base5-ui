import React from 'react';

import Svg from './BaseSvg';

const NavLeftIcon = ({
	size,
	color,
	...props
}) => (
	<Svg
		{...props}
		viewBox="0 0 18 18"
		width={size}
		height={size}
		fill={color}
		fillRule="evenodd"
		clipRule="evenodd"
	>
		<path d="M13,14l-9,-5l9,-5l0,10Z" />
	</Svg>
);

NavLeftIcon.displayName = 'NavLeftIcon';

NavLeftIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default NavLeftIcon;
