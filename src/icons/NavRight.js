import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const NavRightIcon = forwardRef((props, ref) => {
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
			<path d="M5,4l9,5l-9,5l0,-10Z" />
		</Svg>
	);
});

NavRightIcon.displayName = 'NavRightIcon';

NavRightIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default NavRightIcon;
