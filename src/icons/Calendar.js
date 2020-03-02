import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const CalendarIcon = forwardRef((props, ref) => {
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
			<path d="M12,4l0,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1l0,1.105c1.154,0.327 2,1.388 2,2.646l0,5.498c0,1.518 -1.232,2.75 -2.751,2.751l-8.498,0c-1.518,0 -2.751,-1.233 -2.751,-2.751l0,-5.498c0,-1.258 0.846,-2.319 2,-2.646l0,-1.105c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1l0,1l6,0Zm-2,3l-1,0l0,0.031c0,0.257 -0.102,0.504 -0.284,0.685c-0.181,0.182 -0.428,0.284 -0.685,0.284l-0.031,0l0,1l1,0l0,3l1,0l0,-5Z" />
		</Svg>
	);
});

CalendarIcon.displayName = 'CalendarIcon';

CalendarIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default CalendarIcon;
