import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const LogoutIcon = forwardRef((props, ref) => {
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
			<path d="M9,15c-3.314,0 -6,-2.686 -6,-6c0,-2.215 1.214,-4.128 3,-5.168l0,2.548c-0.615,0.703 -1,1.612 -1,2.62c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-1.008 -0.385,-1.917 -1,-2.62l0,-2.548c1.786,1.04 3,2.953 3,5.168c0,3.314 -2.686,6 -6,6ZM9,9c-0.552,0 -1,-0.448 -1,-1l0,-5c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1l0,5c0,0.552 -0.448,1 -1,1Z" />
		</Svg>
	);
});

LogoutIcon.displayName = 'LogoutIcon';

LogoutIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default LogoutIcon;
