import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const ExitFullscreenIcon = forwardRef((props, ref) => {
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
			<path d="M14,3c1.656,0 3,1.344 3,3l0,6c0,1.656 -1.344,3 -3,3l-10,0c-1.656,0 -3,-1.344 -3,-3l0,-6c0,-1.656 1.344,-3 3,-3l10,0Zm-0.376,2l-9.248,0c-0.76,0 -1.376,0.617 -1.376,1.376l0,5.248c0,0.76 0.616,1.376 1.376,1.376l9.248,0c0.76,0 1.376,-0.616 1.376,-1.376l0,-5.248c0,-0.759 -0.616,-1.376 -1.376,-1.376Z M10,8.5c0,0 0,-2 0,-2c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,1.5l2.5,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-3,0c-0.138,0 -0.263,-0.056 -0.353,-0.146l0,-0.001c0,0 -0.001,0 -0.001,0c-0.09,-0.09 -0.146,-0.215 -0.146,-0.353l0,0Z M8,9.5c0,0 0,2 0,2c0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-1.5l-2.5,0c-0.276,0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l3,0c0.138,0 0.263,0.056 0.353,0.146l0,0.001c0,0 0.001,0 0.001,0c0.09,0.09 0.146,0.215 0.146,0.353l0,0Z" />
		</Svg>
	);
});

ExitFullscreenIcon.displayName = 'ExitFullscreenIcon';

ExitFullscreenIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ExitFullscreenIcon;
