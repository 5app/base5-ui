import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const AssetFluidbookIcon = forwardRef((props, ref) => {
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
			focusable="false"
			aria-hidden={true}
		>
			<path d="M15,4l1,0l0,11l-14,0c0,0 0,-6.472 0,-9.488c0,-0.401 0.159,-0.785 0.443,-1.069c0.284,-0.284 0.668,-0.443 1.069,-0.443c2.354,0 6.627,0 6.627,0c2.91,-0.018 3.862,-1.167 3.861,-2l1,0l0,2Zm-1,-0.563c-0.225,1.062 -1.371,1.522 -4,1.563l0,8c3.027,-0.003 4.01,-0.984 4,-3l0,-6.563Zm-6,1.563l-4.179,0c-0.221,0.001 -0.428,0.087 -0.581,0.24c-0.154,0.154 -0.24,0.363 -0.24,0.581c0,2.04 0,7.179 0,7.179l5,0l0,-8Z" />
		</Svg>
	);
});

AssetFluidbookIcon.displayName = 'AssetFluidbookIcon';

AssetFluidbookIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetFluidbookIcon;
