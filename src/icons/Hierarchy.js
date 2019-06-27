import React from 'react';

import Svg from './BaseSvg';

const HierarchyIcon = React.forwardRef((props, ref) => {
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
			<path d="M16.143,12c0.002,0 0.857,0.021 0.857,1c0,0.98 -0.857,1 -0.857,1l-10.286,0c0,0 -0.857,-0.014 -0.857,-1c0,-0.985 0.855,-1 0.857,-1l10.286,0Z M14.143,8c0.002,0 0.857,0.021 0.857,1c0,0.979 -0.855,1 -0.857,1l-10.286,0c0,0 -0.857,-0.014 -0.857,-1c0,-0.985 0.855,-1 0.857,-1l10.286,0Z M12.143,4c0.002,0 0.857,0.021 0.857,1c0,0.979 -0.855,1 -0.857,1l-10.286,0c0,0 -0.857,-0.014 -0.857,-1c0,-0.985 0.855,-1 0.857,-1l10.286,0Z" />
		</Svg>
	);
});

HierarchyIcon.displayName = 'HierarchyIcon';

HierarchyIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default HierarchyIcon;
