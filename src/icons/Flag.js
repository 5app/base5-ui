import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const FlagIcon = forwardRef((props, ref) => {
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
			<path d="M14.95,5.538c-6.221,9.569 -4.091,-0.183 -9.35,4.483l1.195,4.979l-1.344,0l-2.441,-10.163l1.232,-0.469c5.895,-4.563 2.816,4.106 10.416,0.885c0.242,-0.103 0.436,0.064 0.292,0.285Z" />
		</Svg>
	);
});

FlagIcon.displayName = 'FlagIcon';

FlagIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default FlagIcon;
