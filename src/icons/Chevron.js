import React from 'react';

import Svg from './BaseSvg';

const ChevronIcon = ({
	size,
	color,
	...props
}) => (
	<Svg
		{...props}
		viewBox="0 0 18 18"
		width={size}
		height={size}
		fill={color}
		fillRule="evenodd"
		clipRule="evenodd"
	>
		<path d="M5,7l8,0l-4,5l-4,-5Z" />
	</Svg>
);

ChevronIcon.displayName = 'ChevronIcon';

ChevronIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default ChevronIcon;
