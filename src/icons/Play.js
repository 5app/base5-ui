import React from 'react';

import Svg from './BaseSvg';

const PlayIcon = ({
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
		<path d="M5,4l9,5l-9,5l0,-10Z" />
	</Svg>
);

PlayIcon.displayName = 'PlayIcon';

PlayIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default PlayIcon;
