import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const MegaphoneIcon = forwardRef((props, ref) => {
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
			<path d="M4.707,11.121c-0.768,-0.043 -1.468,-0.073 -1.964,-0.093c-0.415,-0.018 -0.743,-0.36 -0.743,-0.775c0,-0.939 0,-2.538 0,-3.471c0,-0.412 0.321,-0.751 0.732,-0.775c1.481,-0.082 4.82,-0.286 6.296,-0.544c1.561,-0.272 3.313,-1.174 4.532,-1.436c0.352,-0.076 0.718,0.012 0.998,0.238c0.28,0.227 0.442,0.568 0.442,0.929l0,1.806c0.552,0 1,0.448 1,1c0,0.322 0,0.678 0,1c0,0.552 -0.448,1 -1,1c0,0 0,1.851 0,1.851c0,0.361 -0.162,0.702 -0.442,0.929c-0.28,0.227 -0.646,0.314 -0.998,0.239c0,0 -2.99,-1.243 -4.571,-1.519c-0.326,-0.057 -0.742,-0.109 -1.207,-0.155l1.218,3.655l-3,0l-1.293,-3.879Z" />
		</Svg>
	);
});

MegaphoneIcon.displayName = 'MegaphoneIcon';

MegaphoneIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default MegaphoneIcon;
