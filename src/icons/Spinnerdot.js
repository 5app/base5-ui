import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const SpinnerdotIcon = forwardRef((props, ref) => {
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
			<path d="M 14 12 A 2 2 0 0 1 14 16 A 2 2 0 0 1 14 12" />
		</Svg>
	);
});

SpinnerdotIcon.displayName = 'SpinnerdotIcon';

SpinnerdotIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default SpinnerdotIcon;
