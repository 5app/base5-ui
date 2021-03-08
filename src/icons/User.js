import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const UserIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden = !(otherProps['aria-label'] || otherProps['aria-labelledby']) || undefined;

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
			<path d="M7.18,2.481c-0.813,0.57 -1.031,1.472 -0.991,1.952c0.051,0.587 0.177,1.352 0.177,1.352c0,0 -0.25,0.128 -0.25,0.643c0.087,1.294 0.546,0.736 0.641,1.303c0.227,1.368 0.746,1.124 0.746,1.87c0,1.243 -0.544,1.824 -2.242,2.513c-1.704,0.692 -2.261,1.563 -2.261,3.07l0,0.754l12,0l0,-0.754c0,-1.507 -0.558,-2.378 -2.262,-3.069c-1.699,-0.689 -2.241,-1.269 -2.241,-2.513c0,-0.746 0.517,-0.503 0.745,-1.87c0.096,-0.567 0.554,-0.009 0.643,-1.303c0,-0.516 -0.251,-0.644 -0.251,-0.644c0,0 0.126,-0.764 0.176,-1.351c-0.627,-3.372 -3.611,-2.627 -4.63,-1.953Z" />
		</Svg>
	);
});

UserIcon.displayName = 'UserIcon';

UserIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default UserIcon;
