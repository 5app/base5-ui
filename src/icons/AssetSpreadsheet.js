import React from 'react';

import Svg from './BaseSvg';

const AssetSpreadsheetIcon = React.forwardRef((props, ref) => {
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
			<path d="M11.947,15l0,-2l3,0l0,2l-3,0Zm0,-5l3,0l0,2l-3,0l0,-2Zm0,-7l3,0l0,2l-3,0l0,-2Zm-8,10l3,0l0,2l-3,0l0,-2Zm0,-3l3,0l0,2l-3,0l0,-2Zm0,-7l3,0l0,2l-3,0l0,-2Zm-1,3l11,0l0,3l-11,0l0,-3Zm8,-1l-3,0l0,-2l3,0l0,2Zm0,7l-3,0l0,-2l3,0l0,2Zm0,3l-3,0l0,-2l3,0l0,2Z" />
		</Svg>
	);
});

AssetSpreadsheetIcon.displayName = 'AssetSpreadsheetIcon';

AssetSpreadsheetIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default AssetSpreadsheetIcon;
