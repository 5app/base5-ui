import React from 'react';

import Svg from './BaseSvg';

const AssetImageIcon = ({
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
		<path d="M2,14.001l4,-5l3,2l3,-4.001l4,7.001l-14,0ZM8.034,4.973c-0.874,0.151 -0.903,0.996 -1.534,0.997c-0.691,0.001 -0.769,-0.82 -1.534,-0.997c-0.762,-0.176 -1.966,0.028 -1.966,0.028c0,0 0.885,-1.055 2,-1c0.632,0.031 1.023,0.577 1.249,1.046c0.075,-0.045 0.158,-0.077 0.251,-0.077c0.093,0 0.176,0.032 0.251,0.077c0.226,-0.469 0.617,-1.015 1.249,-1.046c1.115,-0.055 2,1 2,1c0,0 -1.195,-0.161 -1.966,-0.028Z" />
	</Svg>
);

AssetImageIcon.displayName = 'AssetImageIcon';

AssetImageIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default AssetImageIcon;
