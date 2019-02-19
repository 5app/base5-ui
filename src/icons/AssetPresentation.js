import React from 'react';

import Svg from './BaseSvg';

const AssetPresentationIcon = ({
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
		<path d="M8,10l5.976,0c-0.252,2.802 -2.609,5 -5.476,5c-3.036,0 -5.5,-2.464 -5.5,-5.5c0,-2.867 2.198,-5.224 5,-5.476l0,5.976Z M10,3c2.637,0.238 4.739,2.34 4.976,4.976l-4.976,0l0,-4.976Z" />
	</Svg>
);

AssetPresentationIcon.displayName = 'AssetPresentationIcon';

AssetPresentationIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default AssetPresentationIcon;
