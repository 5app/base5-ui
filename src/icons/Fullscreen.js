import React from 'react';

import Svg from './BaseSvg';

const FullscreenIcon = React.forwardRef((props, ref) => {
	const {
		size,
		color,
		...otherProps
	} = props;

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
			<path d="M14,12l-6,0c-0.96,0 -2,-1.04 -2,-2l0,-6c0,-0.96 1.04,-2 2,-2l6,0c0.96,0 2,1.04 2,2l0,6c0,0.96 -1.04,2 -2,2ZM14,5c0,-0.48 -0.52,-1 -1,-1l-4,0c-0.48,0 -1,0.52 -1,1l0,4c0,0.48 0.52,1 1,1l4,0c0.48,0 1,-0.52 1,-1l0,-4ZM9,16l-5,0c-0.96,0 -2,-1.04 -2,-2l0,-5l2,0l0,4c0,0.48 0.52,1 1,1l4,0l0,2Z" />
		</Svg>
	);
});

FullscreenIcon.displayName = 'FullscreenIcon';

FullscreenIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default FullscreenIcon;
