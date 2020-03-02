import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const XIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	return (
		<Svg
			{...otherProps}
			ref={ref}
			viewBox="0 0 18 19"
			width={size}
			height={size}
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
			focusable="false"
			aria-hidden={true}
		>
			<path d="M9,7.622l3.536,-3.535c0.39,-0.39 1.023,-0.39 1.414,0c0.39,0.39 0.39,1.024 0,1.414l-3.536,3.536l3.536,3.535c0.39,0.39 0.39,1.024 0,1.414c-0.391,0.391 -1.024,0.391 -1.414,0l-3.536,-3.535l-3.536,3.535c-0.39,0.391 -1.023,0.391 -1.414,0c-0.39,-0.39 -0.39,-1.024 0,-1.414l3.536,-3.535l-3.536,-3.536c-0.39,-0.39 -0.39,-1.024 0,-1.414c0.391,-0.39 1.024,-0.39 1.414,0l3.536,3.535Z" />
		</Svg>
	);
});

XIcon.displayName = 'XIcon';

XIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default XIcon;
