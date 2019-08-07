import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const AppleIcon = forwardRef((props, ref) => {
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
			<path d="M14.323,11.755c-0.287,0.634 -0.426,0.918 -0.796,1.478c-0.517,0.782 -1.245,1.757 -2.147,1.765c-0.801,0.007 -1.007,-0.519 -2.095,-0.513c-1.088,0.006 -1.315,0.523 -2.117,0.515c-0.902,-0.009 -1.592,-0.889 -2.109,-1.671c-1.444,-2.187 -1.595,-4.755 -0.704,-6.121c0.633,-0.969 1.632,-1.538 2.57,-1.538c0.957,0 1.558,0.522 2.349,0.522c0.767,0 1.235,-0.522 2.34,-0.522c0.835,0 1.721,0.453 2.351,1.235c-2.067,1.127 -1.731,4.065 0.358,4.85ZM8.888,5.749c-0.131,-0.709 0.204,-1.437 0.611,-1.929c0.448,-0.542 1.216,-0.957 1.872,-1.002c0.111,0.74 -0.195,1.465 -0.596,1.978c-0.43,0.549 -1.171,0.975 -1.887,0.953Z" />
		</Svg>
	);
});

AppleIcon.displayName = 'AppleIcon';

AppleIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AppleIcon;
