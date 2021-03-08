import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const ChatIcon = forwardRef((props, ref) => {
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
			<path d="M13,13l-5,0c2.502,0.023 5,3.333 5,3.333l0,-3.333Zm3,-6.75c-0,-1.242 -1.008,-2.25 -2.25,-2.25l-9.5,0c-1.242,0 -2.25,1.008 -2.25,2.25l0,4.5c0,1.242 1.008,2.25 2.25,2.25l9.5,0c1.242,0 2.25,-1.008 2.25,-2.25l-0,-4.5Zm-5,-1.25c0,-0 2.006,0.749 2.673,1.415c0.667,0.667 1.327,2.585 1.327,2.585c0,-0 0.285,-2.206 -0.737,-3.228c-1,-1 -3.263,-0.772 -3.263,-0.772Z" />
		</Svg>
	);
});

ChatIcon.displayName = 'ChatIcon';

ChatIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ChatIcon;
