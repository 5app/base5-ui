import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const SendIcon = forwardRef((props, ref) => {
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
			<path d="M15.614,3.026c-0.261,0.092 -13.178,4.644 -13.432,4.734c-0.216,0.076 -0.264,0.263 -0.008,0.365c0.305,0.122 2.888,1.157 2.888,1.157l1.712,0.685c0,0 8.246,-6.054 8.357,-6.137c0.112,-0.082 0.242,0.073 0.16,0.161c-0.081,0.089 -5.988,6.477 -5.988,6.477l0,0.001l-0.344,0.383l0.456,0.245c0,0 3.537,1.905 3.79,2.041c0.221,0.118 0.508,0.02 0.572,-0.255c0.075,-0.324 2.165,-9.328 2.211,-9.529c0.06,-0.261 -0.113,-0.42 -0.374,-0.328ZM6.759,14.079c0,0.188 0.105,0.24 0.251,0.108c0.191,-0.175 2.169,-1.949 2.169,-1.949l-2.42,-1.251l0,3.092Z" />
		</Svg>
	);
});

SendIcon.displayName = 'SendIcon';

SendIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default SendIcon;
