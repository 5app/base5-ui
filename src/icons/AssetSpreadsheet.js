import React from 'react';

import Svg from './BaseSvg';

const AssetSpreadsheetIcon = ({
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
		<path d="M12,15l0,-2l3,0l0,2l-3,0ZM12,10l3,0l0,2l-3,0l0,-2ZM12,7l3,0l0,2l-3,0l0,-2ZM12,4l3,0l0,2l-3,0l0,-2ZM8,6l0,-2l3,0l0,2l-3,0ZM3,13l4,0l0,2l-4,0l0,-2ZM3,10l4,0l0,2l-4,0l0,-2ZM3,7l4,0l0,2l-4,0l0,-2ZM3,4l4,0l0,2l-4,0l0,-2ZM11,9l-3,0l0,-2l3,0l0,2ZM11,12l-3,0l0,-2l3,0l0,2ZM11,15l-3,0l0,-2l3,0l0,2Z" />
	</Svg>
);

AssetSpreadsheetIcon.displayName = 'AssetSpreadsheetIcon';

AssetSpreadsheetIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default AssetSpreadsheetIcon;
