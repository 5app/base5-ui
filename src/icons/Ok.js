import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const OkIcon = forwardRef((props, ref) => {
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
			<path d="M8.467,12.071l5.254,-9.1c0.337,-0.584 1.085,-0.784 1.668,-0.447c0.584,0.337 0.784,1.085 0.447,1.669l-6.045,10.471c-0.241,0.416 -0.69,0.638 -1.14,0.608c-0.369,0.024 -0.744,-0.118 -1.004,-0.419l-4.349,-5.016c-0.441,-0.51 -0.386,-1.282 0.123,-1.723c0.51,-0.442 1.282,-0.387 1.723,0.123l3.323,3.834Z" />
		</Svg>
	);
});

OkIcon.displayName = 'OkIcon';

OkIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default OkIcon;
