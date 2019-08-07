import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const HomeIcon = forwardRef((props, ref) => {
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
			<path d="M12,5l0,-1.506c0,-0.274 0.223,-0.498 0.499,-0.498l1.002,0c0.276,0 0.499,0.224 0.499,0.498l0,3.506l2,2c0,0 0.033,0.999 -1,1l-1,0l0,4c0,0.368 -0.333,0.999 -1,1l-2.006,0c-0.264,0 -0.517,-0.105 -0.703,-0.291c-0.186,-0.186 -0.291,-0.439 -0.291,-0.703c0,-0.615 0,-1.403 0,-2.017c0,-0.262 -0.104,-0.514 -0.29,-0.699c-0.185,-0.186 -0.437,-0.29 -0.699,-0.29c-0.005,0 -0.01,0 -0.016,0c-0.549,0 -0.995,0.446 -0.995,0.995c0,0.617 0,1.407 0,2.022c0,0.543 -0.44,0.983 -0.983,0.983c-0.875,0 -2.017,0 -2.017,0c-0.666,0 -1,-0.632 -1,-1l0,-4l-0.922,0c-1.088,-0.066 -1.078,-1 -1.078,-1l7,-7l3,3Z" />
		</Svg>
	);
});

HomeIcon.displayName = 'HomeIcon';

HomeIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default HomeIcon;
