import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const SectionIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden =
		!(otherProps['aria-label'] || otherProps['aria-labelledby']) ||
		undefined;

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
			<path d="M4 6.5C4 5.67157 4.67157 5 5.5 5H13.5C14.3284 5 15 5.67157 15 6.5C15 7.32843 14.3284 8 13.5 8H5.5C4.67157 8 4 7.32843 4 6.5Z M4 10C4 9.44772 4.44772 9 5 9H11C11.5523 9 12 9.44772 12 10C12 10.5523 11.5523 11 11 11H5C4.44772 11 4 10.5523 4 10Z M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13Z" />
		</Svg>
	);
});

SectionIcon.displayName = 'SectionIcon';

SectionIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default SectionIcon;
