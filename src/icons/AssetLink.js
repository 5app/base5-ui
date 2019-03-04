import React from 'react';

import Svg from './BaseSvg';

const AssetLinkIcon = React.forwardRef((props, ref) => {
	const {
		size,
		color,
		...otherProps
	} = props;

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
			<path d="M10.856,10.918l1.664,3.73c0.166,0.409 -0.051,0.866 -0.486,1.023l-0.786,0.283c-0.434,0.156 -0.921,-0.048 -1.088,-0.456l-1.485,-3.645l-2.675,1.147l0,-10l7,7l-2.144,0.918Z" />
		</Svg>
	);
});

AssetLinkIcon.displayName = 'AssetLinkIcon';

AssetLinkIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default AssetLinkIcon;
