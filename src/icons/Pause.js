import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const PauseIcon = forwardRef((props, ref) => {
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
			<path d="M5,4l3,0l0,10l-3,0l0,-10ZM10,4l3,0l0,10l-3,0l0,-10Z" />
		</Svg>
	);
});

PauseIcon.displayName = 'PauseIcon';

PauseIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default PauseIcon;
