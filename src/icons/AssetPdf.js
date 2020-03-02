import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const AssetPdfIcon = forwardRef((props, ref) => {
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
			<path d="M15,13l0,2l-12,0l0,-2l12,0Zm-7,-3l0,2l-5,0l0,-2l5,0Zm7,-3l0,5l-6,0l0,-5l6,0Zm-7,0l0,2l-5,0l0,-2l5,0Zm7,-4l0,3l-12,0l0,-3l12,0Z" />
		</Svg>
	);
});

AssetPdfIcon.displayName = 'AssetPdfIcon';

AssetPdfIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetPdfIcon;
