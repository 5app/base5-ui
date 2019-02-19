module.exports = ({
	name,
	viewBox,
	pathData
}) => `import React from 'react';

import Svg from './BaseSvg';

const ${name}Icon = ({
	size,
	color,
	...props
}) => (
	<Svg
		{...props}
		viewBox="${viewBox}"
		width={size}
		height={size}
		fill={color}
		fillRule="evenodd"
		clipRule="evenodd"
	>
		<path d="${pathData}" />
	</Svg>
);

${name}Icon.displayName = '${name}Icon';

${name}Icon.defaultProps = {
	size: 18,
	color: 'currentcolor'
};

export default ${name}Icon;
`;
