import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const PlaylistIcon = forwardRef((props, ref) => {
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
			<path d="M4,12c0.002,0 1,0.021 1,1c0,0.98 -1,1 -1,1l-1,0c0,0 -1,-0.014 -1,-1c0,-0.985 0.998,-1 1,-1l1,0Zm0,-4c0.002,0 1,0.021 1,1c0,0.979 -0.998,1 -1,1l-1,0c0,0 -1,-0.014 -1,-1c0,-0.985 0.998,-1 1,-1l1,0Zm0,-4c0.002,0 1,0.021 1,1c0,0.979 -0.998,1 -1,1l-1,0c0,0 -1,-0.014 -1,-1c0,-0.985 0.998,-1 1,-1l1,0Z M15,12c0.002,0 1,0.021 1,1c0,0.98 -1,1 -1,1l-8,0c0,0 -1,-0.014 -1,-1c0,-0.985 0.998,-1 1,-1l8,0Zm-2,-4c0.002,0 1,0.021 1,1c0,0.979 -0.998,1 -1,1l-6,0c0,0 -1,-0.014 -1,-1c0,-0.985 0.998,-1 1,-1l6,0Zm2,-4c0.002,0 1,0.021 1,1c0,0.979 -0.998,1 -1,1l-8,0c0,0 -1,-0.014 -1,-1c0,-0.985 0.998,-1 1,-1l8,0Z" />
		</Svg>
	);
});

PlaylistIcon.displayName = 'PlaylistIcon';

PlaylistIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default PlaylistIcon;
