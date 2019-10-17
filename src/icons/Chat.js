import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const ChatIcon = forwardRef((props, ref) => {
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
			<path d="M13,12l0,3.333c0,0 -2.496,-3.308 -5,-3.333l5,0Zm0.75,0l-9.5,0c-1.242,0 -2.25,-1.008 -2.25,-2.25l0,-4.5c0,-1.241 1.007,-2.248 2.25,-2.25l9.5,0c1.243,0.002 2.25,1.009 2.25,2.25l0,4.5c0,1.241 -1.007,2.248 -2.25,2.25Zm-2.75,-8c0,0 2.006,0.749 2.673,1.415c0.667,0.667 1.327,2.585 1.327,2.585c0,0 0.285,-2.206 -0.737,-3.228c-1,-1 -3.263,-0.772 -3.263,-0.772Z" />
		</Svg>
	);
});

ChatIcon.displayName = 'ChatIcon';

ChatIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ChatIcon;
