import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const AssetFolderIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

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
			<path d="M2,5l0,-2c0,0 3.384,0 6.002,0c0.795,0 1.558,0.316 2.12,0.878c0.319,0.32 0.559,0.704 0.707,1.122l2.67,0c1.382,0.001 2.501,1.121 2.501,2.501l0,4.998c0,1.38 -1.119,2.5 -2.501,2.501l-11.499,0l0,-10ZM13.412,7l-9.412,0c0,0.124 0.017,6 0,6c0.673,-0.018 2,-5 2,-5l8,-0.412c0,-0.323 -0.261,-0.585 -0.588,-0.588Z" />
		</Svg>
	);
});

AssetFolderIcon.displayName = 'AssetFolderIcon';

AssetFolderIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetFolderIcon;
