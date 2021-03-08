import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const NavLeftIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden =
		!(otherProps['aria-label'] || otherProps['aria-labelledby']) ||
		undefined;

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
			aria-hidden={ariaHidden}
		>
			<path d="M13,14l-9,-5l9,-5l0,10Z" />
		</Svg>
	);
});

NavLeftIcon.displayName = 'NavLeftIcon';

NavLeftIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default NavLeftIcon;
