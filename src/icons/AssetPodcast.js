import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const AssetPodcastIcon = forwardRef((props, ref) => {
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
			<path d="M7,15l1.143,0l0.716,-5.01c-0.486,-0.069 -0.859,-0.486 -0.859,-0.99c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1c0,0.504 -0.373,0.921 -0.859,0.99l0.716,5.01l1.143,0l0,1l-4,0l0,-1Zm-1.17,-0.906c-1.699,-1.06 -2.83,-2.946 -2.83,-5.094c0,-3.311 2.689,-6 6,-6c3.311,0 6,2.689 6,6c0,2.148 -1.131,4.034 -2.83,5.094l-0.288,-1.009c1.281,-0.905 2.118,-2.398 2.118,-4.085c0,-2.76 -2.24,-5 -5,-5c-2.76,0 -5,2.24 -5,5c0,1.687 0.837,3.18 2.118,4.085l-0.288,1.009Zm0.584,-2.043c-0.865,-0.734 -1.414,-1.829 -1.414,-3.051c0,-2.208 1.792,-4 4,-4c2.208,0 4,1.792 4,4c0,1.222 -0.549,2.317 -1.414,3.051l-0.313,-1.094c0.453,-0.526 0.727,-1.21 0.727,-1.957c0,-1.656 -1.344,-3 -3,-3c-1.656,0 -3,1.344 -3,3c0,0.747 0.274,1.431 0.727,1.957l-0.313,1.094Z" />
		</Svg>
	);
});

AssetPodcastIcon.displayName = 'AssetPodcastIcon';

AssetPodcastIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetPodcastIcon;
