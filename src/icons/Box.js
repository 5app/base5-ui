import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const BoxIcon = forwardRef((props, ref) => {
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
			<path d="M15,6l0,6.473c0,1.395 -1.132,2.527 -2.527,2.527c-2.043,0 -4.903,0 -6.946,0c-1.395,0 -2.527,-1.132 -2.527,-2.527l0,-6.473l12,0ZM10,7.938l-2,0l0,1.124l2,0l0,-1.124Z M 2 3 H 16 V 5 H 2 z" />
		</Svg>
	);
});

BoxIcon.displayName = 'BoxIcon';

BoxIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default BoxIcon;
