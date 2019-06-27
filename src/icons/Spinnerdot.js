import React from 'react';

import Svg from './BaseSvg';

const SpinnerdotIcon = React.forwardRef((props, ref) => {
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
