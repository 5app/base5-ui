import React from 'react';

import Svg from './BaseSvg';

const AssetImageIcon = React.forwardRef((props, ref) => {
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
			<path d="M16,15l-14,0l0,-11l14,0l0,11Zm-1,-10l-12,0l0,9l12,0l0,-9Zm-11,8l10,0c0,0 -0.013,-2.744 0,-3c-0.266,-0.682 -0.776,-1.17 -2,-1c-3.37,0.468 -2.662,3.041 -6,2c-1.066,-0.332 -2.006,0.357 -2,2Zm2.483,-6c0.818,0 1.483,0.664 1.483,1.483c0,0.818 -0.665,1.483 -1.483,1.483c-0.819,0 -1.483,-0.665 -1.483,-1.483c0,-0.819 0.664,-1.483 1.483,-1.483Z" />
		</Svg>
	);
});

AssetImageIcon.displayName = 'AssetImageIcon';

AssetImageIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetImageIcon;
