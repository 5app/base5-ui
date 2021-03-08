import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const SidebarOpenIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden = !(otherProps['aria-label'] || otherProps['aria-labelledby']) || undefined;

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
			<path d="M14,2c1.656,0 3,1.344 3,3l0,8c0,1.656 -1.344,3 -3,3l-10,0c-1.656,0 -3,-1.344 -3,-3l0,-8c0,-1.656 1.344,-3 3,-3l10,0Zm-0.376,2l-9.248,0c-0.76,0 -1.376,0.617 -1.376,1.376l0,7.248c0,0.76 0.616,1.376 1.376,1.376l9.248,0c0.76,0 1.376,-0.616 1.376,-1.376l0,-7.248c0,-0.759 -0.616,-1.376 -1.376,-1.376Z M14,5.997c0,-0.55 -0.447,-0.997 -0.997,-0.997l-1.003,0l0,8l1,0c0.552,0 1,-0.448 1,-1l0,-6.003Z M8,8l0,-2l-4,3l4,3l0,-2l2,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-2,0Z" />
		</Svg>
	);
});

SidebarOpenIcon.displayName = 'SidebarOpenIcon';

SidebarOpenIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default SidebarOpenIcon;
