import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const MinusIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

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
			aria-hidden={true}
		>
			<path d="M14,10.007l-10,0c0,0 -1,-0.015 -1,-1c0,-0.985 1,-1 1,-1l10,0c0,0 1,0.001 1,1c0,0.999 -1,1 -1,1Z" />
		</Svg>
	);
});

MinusIcon.displayName = 'MinusIcon';

MinusIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default MinusIcon;
