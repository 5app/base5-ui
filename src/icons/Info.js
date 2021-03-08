import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const InfoIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden = !(otherProps['aria-label'] || otherProps['aria-labelledby']) || undefined;

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
			aria-hidden={ariaHidden}
		>
			<path d="M9,17c-4.387,-0.005 -7.995,-3.613 -8,-8c0.005,-4.387 3.613,-7.995 8,-8c4.387,0.005 7.995,3.613 8,8c-0.005,4.387 -3.613,7.995 -8,8ZM8.036,8.782l0.062,0.026c0.048,0.068 0.014,0.266 -0.061,0.585l-0.593,2.74c-0.194,0.836 -0.189,1.377 0.01,1.662c0.129,0.167 0.325,0.254 0.524,0.235c1.188,-0.237 2.27,-0.905 3.072,-1.899l-0.293,-0.437c-0.332,0.319 -0.732,0.543 -1.162,0.649c-0.146,-0.133 -0.128,-0.359 -0.052,-0.683l0.679,-2.88c0.19,-0.76 0.19,-1.301 0.006,-1.566c-0.084,-0.119 -0.215,-0.185 -0.351,-0.177c-1.241,0.272 -2.389,0.918 -3.317,1.866l0.259,0.474c0.371,-0.273 0.782,-0.475 1.216,-0.596l0.001,0.001ZM9.069,3.863c-0.72,-0.022 -1.33,0.551 -1.356,1.27c-0.022,0.272 0.069,0.54 0.251,0.743c0.205,0.193 0.481,0.293 0.762,0.278c0.726,0.013 1.339,-0.562 1.373,-1.288c0,-0.014 0.001,-0.028 0.001,-0.043c0,-0.528 -0.435,-0.963 -0.963,-0.963c-0.023,0 -0.045,0.001 -0.068,0.003l0,0Z" />
		</Svg>
	);
});

InfoIcon.displayName = 'InfoIcon';

InfoIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default InfoIcon;
