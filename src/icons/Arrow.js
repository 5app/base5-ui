import React from 'react';

import Svg from './BaseSvg';

const ArrowIcon = React.forwardRef((props, ref) => {
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
			<path d="M6,8l9,0c0.003,0 1,0.005 1,1c0,0.995 -0.997,1 -1,1l-9,0l0,3l-4,-4l4,-4l0,3Z" />
		</Svg>
	);
});

ArrowIcon.displayName = 'ArrowIcon';

ArrowIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ArrowIcon;
