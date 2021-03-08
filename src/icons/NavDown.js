import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const NavDownIcon = forwardRef((props, ref) => {
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
			<path d="M14,5l-5,9l-5,-9l10,0Z" />
		</Svg>
	);
});

NavDownIcon.displayName = 'NavDownIcon';

NavDownIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default NavDownIcon;
