import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const TrendingIcon = forwardRef((props, ref) => {
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
			<path d="M17,9l-1.793,-1.793l-4.5,4.5c-0.088,0.082 -0.181,0.152 -0.292,0.203c-0.284,0.129 -0.62,0.117 -0.894,-0.032c-0.085,-0.047 -0.158,-0.105 -0.228,-0.171l-2.293,-2.293l-4.293,4.293l-0.052,0.049c-0.132,0.106 -0.276,0.185 -0.442,0.221c-0.117,0.025 -0.237,0.03 -0.355,0.013c-0.409,-0.059 -0.747,-0.374 -0.835,-0.777c-0.02,-0.093 -0.027,-0.189 -0.02,-0.284c0.011,-0.167 0.066,-0.329 0.156,-0.47c0.039,-0.061 0.085,-0.113 0.134,-0.166l5,-5c0.088,-0.082 0.181,-0.152 0.292,-0.203c0.284,-0.129 0.62,-0.117 0.894,0.032c0.085,0.047 0.158,0.105 0.228,0.171l2.293,2.293l3.793,-3.793l-1.793,-1.793l5,0l0,5Z" />
		</Svg>
	);
});

TrendingIcon.displayName = 'TrendingIcon';

TrendingIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default TrendingIcon;
