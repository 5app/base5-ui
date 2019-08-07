import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const EyeClosedIcon = forwardRef((props, ref) => {
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
			<path d="M15.805,2.694c-0.311,-0.312 -0.818,-0.312 -1.13,0l-12.485,12.487c-0.312,0.312 -0.312,0.819 0,1.13c0.312,0.312 0.817,0.312 1.13,0l12.485,-12.487c0.312,-0.312 0.312,-0.818 0,-1.13ZM3.492,12.296l2.044,-2.044c-0.055,-0.242 -0.09,-0.491 -0.09,-0.75c0,-1.9 1.59,-3.442 3.551,-3.442c0.229,0 0.451,0.026 0.668,0.066l0.96,-0.96c-0.514,-0.084 -1.053,-0.137 -1.628,-0.137c-5.241,0 -7.988,3.86 -7.988,4.473c0,0.339 0.844,1.671 2.483,2.794ZM14.506,6.71l-2.047,2.046c0.055,0.241 0.089,0.49 0.089,0.746c0,1.901 -1.589,3.441 -3.551,3.441c-0.226,0 -0.447,-0.025 -0.662,-0.065l-0.962,0.962c0.513,0.083 1.051,0.136 1.624,0.136c5.241,0 7.989,-3.862 7.989,-4.474c0,-0.339 -0.844,-1.669 -2.48,-2.792Z" />
		</Svg>
	);
});

EyeClosedIcon.displayName = 'EyeClosedIcon';

EyeClosedIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default EyeClosedIcon;
