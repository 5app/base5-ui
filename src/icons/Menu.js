import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const MenuIcon = forwardRef((props, ref) => {
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
			<path d="M15,12c0.002,0 1,0.021 1,1c0,0.98 -1,1 -1,1l-12,0c0,0 -1,-0.014 -1,-1c0,-0.985 0.998,-1 1,-1l12,0Zm0,-4c0.002,0 1,0.021 1,1c0,0.979 -0.998,1 -1,1l-12,0c0,0 -1,-0.014 -1,-1c0,-0.985 0.998,-1 1,-1l12,0Zm0,-4c0.002,0 1,0.021 1,1c0,0.979 -0.998,1 -1,1l-12,0c0,0 -1,-0.014 -1,-1c0,-0.985 0.998,-1 1,-1l12,0Z" />
		</Svg>
	);
});

MenuIcon.displayName = 'MenuIcon';

MenuIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default MenuIcon;
