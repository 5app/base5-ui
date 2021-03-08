module.exports = ({
	name,
	viewBox,
	pathData,
}) => `import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const ${name}Icon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden =
		!(otherProps['aria-label'] || otherProps['aria-labelledby']) ||
		undefined;

	return (
		<Svg
			{...otherProps}
			ref={ref}
			viewBox="${viewBox}"
			width={size}
			height={size}
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
			focusable="false"
			aria-hidden={ariaHidden}
		>
			<path d="${pathData}" />
		</Svg>
	);
});

${name}Icon.displayName = '${name}Icon';

${name}Icon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ${name}Icon;
`;
