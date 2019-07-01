import React from 'react';

import Svg from './BaseSvg';

const AssetDiagramIcon = React.forwardRef((props, ref) => {
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
			<path d="M 5 13 H 7 V 15 H 5 z M 2 9 H 4 V 15 H 2 z M 8 5 H 10 V 15 H 8 z M 11 3 H 13 V 15 H 11 z M 14 7 H 16 V 15 H 14 z" />
		</Svg>
	);
});

AssetDiagramIcon.displayName = 'AssetDiagramIcon';

AssetDiagramIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetDiagramIcon;
