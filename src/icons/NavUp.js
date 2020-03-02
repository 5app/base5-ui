import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const NavUpIcon = forwardRef((props, ref) => {
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
			<path d="M4,13l5,-9l5,9l-10,0Z" />
		</Svg>
	);
});

NavUpIcon.displayName = 'NavUpIcon';

NavUpIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default NavUpIcon;
