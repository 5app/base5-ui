import React from 'react';

import Svg from './BaseSvg';

const OkIcon = React.forwardRef((props, ref) => {
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
			<path d="M8.476,11.651l4.302,-7.45c0.276,-0.478 0.888,-0.642 1.366,-0.366c0.478,0.276 0.642,0.888 0.366,1.366l-4.95,8.574c-0.197,0.341 -0.565,0.522 -0.933,0.497c-0.302,0.02 -0.609,-0.096 -0.823,-0.342l-3.56,-4.108c-0.361,-0.417 -0.316,-1.049 0.101,-1.41c0.417,-0.362 1.049,-0.317 1.41,0.1l2.721,3.139Z" />
		</Svg>
	);
});

OkIcon.displayName = 'OkIcon';

OkIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default OkIcon;
