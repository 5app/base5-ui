import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const CycleIcon = forwardRef((props, ref) => {
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
			<path d="M5.536,14.5l-1.786,0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75l4.25,0l-0,-4.25c-0,-0.414 -0.336,-0.75 -0.75,-0.75c-0.414,0 -0.75,0.336 -0.75,0.75l0,1.58c-1.494,-0.865 -2.5,-2.481 -2.5,-4.33c0,-2.048 1.234,-3.811 3,-4.582l0,-1.603c-2.61,0.844 -4.5,3.295 -4.5,6.185c0,2.315 1.213,4.348 3.036,5.5Zm4.464,-8.25c0,0.414 0.336,0.75 0.75,0.75c0.414,0 0.75,-0.336 0.75,-0.75l-0,-1.58c1.494,0.865 2.5,2.481 2.5,4.33c-0,2.417 -1.719,4.436 -4,4.9l0,1.523c3.113,-0.481 5.5,-3.176 5.5,-6.423c0,-2.315 -1.213,-4.348 -3.036,-5.5l1.786,-0c0.414,-0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-4.25,0l0,4.25Z" />
		</Svg>
	);
});

CycleIcon.displayName = 'CycleIcon';

CycleIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default CycleIcon;
