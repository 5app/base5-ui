import React from 'react';

import Svg from './BaseSvg';

const ChatIcon = React.forwardRef((props, ref) => {
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
			<path d="M7,12l-2,0c-1.104,0 -2,-0.896 -2,-2l0,-4c0,-1.103 0.895,-1.999 2,-2l8,0c1.105,0.001 2,0.897 2,2l0,4c0,1.103 -0.895,1.999 -2,2l-2,0l0,2.667c0,0 -1.997,-2.647 -4,-2.667ZM11,5c0,0 0.891,0.121 1.931,1.126c0.881,0.852 1.116,1.464 1.116,1.464c0,0 0.073,-1.231 -0.835,-1.967c-0.889,-0.72 -2.212,-0.623 -2.212,-0.623Z" />
		</Svg>
	);
});

ChatIcon.displayName = 'ChatIcon';

ChatIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ChatIcon;
