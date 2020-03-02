import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const DotIcon = forwardRef((props, ref) => {
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
			<path d="M 9 4 A 5 5 0 0 1 9 14 A 5 5 0 0 1 9 4" />
		</Svg>
	);
});

DotIcon.displayName = 'DotIcon';

DotIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default DotIcon;
