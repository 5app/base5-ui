import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const FullscreenIcon = forwardRef((props, ref) => {
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
			<path d="M14,2c1.656,0 3,1.344 3,3l0,8c0,1.656 -1.344,3 -3,3l-10,0c-1.656,0 -3,-1.344 -3,-3l0,-8c0,-1.656 1.344,-3 3,-3l10,0Zm-0.376,2l-9.248,0c-0.76,0 -1.376,0.617 -1.376,1.376l0,7.248c0,0.76 0.616,1.376 1.376,1.376l9.248,0c0.76,0 1.376,-0.616 1.376,-1.376l0,-7.248c0,-0.759 -0.616,-1.376 -1.376,-1.376Z M4,9c1.104,0 2,0.896 2,2l1,0c1.103,0 1.999,0.895 2,2l-4.5,0c-0.276,-0.001 -0.499,-0.224 -0.5,-0.5l0,-3.5Z M11,7c-1.103,0 -1.999,-0.895 -2,-2l4.5,0c0.277,0.001 0.5,0.225 0.5,0.5l0,3.5c-1.104,0 -2,-0.896 -2,-2l-1,0Z" />
		</Svg>
	);
});

FullscreenIcon.displayName = 'FullscreenIcon';

FullscreenIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default FullscreenIcon;
