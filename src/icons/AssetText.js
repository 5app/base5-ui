import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const AssetTextIcon = forwardRef((props, ref) => {
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
			<path d="M3,12l0,-2l9,0l0,2l-9,0Zm0,-5l12,0l0,2l-12,0l0,-2Zm0,-4l11,0l0,3l-11,0l0,-3Zm11,12l-11,0l0,-2l11,0l0,2Z" />
		</Svg>
	);
});

AssetTextIcon.displayName = 'AssetTextIcon';

AssetTextIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetTextIcon;
