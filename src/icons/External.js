import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const ExternalIcon = forwardRef((props, ref) => {
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
			<path d="M11,6c-6.156,0.039 -8,8 -8,8c1.599,-2.156 3.641,-3.972 8,-4l0,3l5,-5l-5,-5l0,3Z" />
		</Svg>
	);
});

ExternalIcon.displayName = 'ExternalIcon';

ExternalIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ExternalIcon;
