import React from 'react';

import Svg from './BaseSvg';

const AssetTextIcon = ({
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
		<path d="M3,12l0,-2l12,0l0,2l-12,0ZM3,7l12,0l0,2l-12,0l0,-2ZM3,4l12,0l0,2l-12,0l0,-2ZM11,15l-8,0l0,-2l8,0l0,2Z" />
	</Svg>
);

AssetTextIcon.displayName = 'AssetTextIcon';

AssetTextIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default AssetTextIcon;
