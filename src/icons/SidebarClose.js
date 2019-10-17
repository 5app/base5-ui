import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const SidebarCloseIcon = forwardRef((props, ref) => {
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
			<path d="M14,3c1.656,0 3,1.344 3,3l0,6c0,1.656 -1.344,3 -3,3l-10,0c-1.656,0 -3,-1.344 -3,-3l0,-6c0,-1.656 1.344,-3 3,-3l10,0Zm-0.376,2l-9.248,0c-0.76,0 -1.376,0.617 -1.376,1.376l0,5.248c0,0.76 0.616,1.376 1.376,1.376l9.248,0c0.76,0 1.376,-0.616 1.376,-1.376l0,-5.248c0,-0.759 -0.616,-1.376 -1.376,-1.376Z M10,9c0,-0.276 -0.224,-0.5 -0.5,-0.5l-4,0c-0.276,0 -0.5,0.224 -0.5,0.5c0,0.276 0.224,0.5 0.5,0.5l4,0c0.276,0 0.5,-0.224 0.5,-0.5Z M11,9l-2,-2l0,4l2,-2Z M14,6.997c0,-0.55 -0.447,-0.997 -0.997,-0.997l-1.003,0l0,6l1,0c0.552,0 1,-0.448 1,-1l0,-4.003Z" />
		</Svg>
	);
});

SidebarCloseIcon.displayName = 'SidebarCloseIcon';

SidebarCloseIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default SidebarCloseIcon;
