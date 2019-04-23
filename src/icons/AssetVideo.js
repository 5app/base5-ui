import React from 'react';

import Svg from './BaseSvg';

const AssetVideoIcon = React.forwardRef((props, ref) => {
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
			<path d="M11,9l-2,0l-2,0c-0.552,0 -1,0.448 -1,1l0,2c0,0.552 0.448,1 1,1l2,0l0,1l-2,0c-0.552,0 -1,0.448 -1,1l-3,0l0,-12l12,0l0,8l-3.231,-1.616c-0.183,-0.228 -0.453,-0.384 -0.769,-0.384ZM5,4l-1,0l0,2l1,0l0,-2ZM5,8l-1,0l0,2l1,0l0,-2ZM5,12l-1,0l0,2l1,0l0,-2ZM13,9l1,0l0,-1l-1,0l0,1ZM13,6l1,0l0,-2l-1,0l0,2ZM12,5c0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,0 -1,0.448 -1,1l0,2c0,0.552 0.448,1 1,1l4,0c0.552,0 1,-0.448 1,-1l0,-2ZM15,14.5l0,0.5l-1,0l-4,2l0,-7l7,3.5l-2,1Z" />
		</Svg>
	);
});

AssetVideoIcon.displayName = 'AssetVideoIcon';

AssetVideoIcon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default AssetVideoIcon;