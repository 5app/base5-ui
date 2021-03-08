import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const UploadIcon = forwardRef((props, ref) => {
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
			<path d="M8,12l-3,0c-1.399,0 -3.005,-1.14 -3.005,-2.485c0,-1.345 1.134,-2.434 2.533,-2.434c0.101,0 0.201,0.007 0.3,0.019c-0.026,-0.171 -0.04,-0.345 -0.04,-0.521c0,-1.976 1.666,-3.579 3.724,-3.579c1.685,0 3.107,1.076 3.566,2.553c0.185,-0.031 0.374,-0.048 0.566,-0.048c1.851,0 3.351,1.443 3.351,3.223c0,1.779 -2.144,3.272 -3.995,3.272l-2,0l0,-3l2,0l-3,-3l-3,3l2,0l0,3Z" />
		</Svg>
	);
});

UploadIcon.displayName = 'UploadIcon';

UploadIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default UploadIcon;
