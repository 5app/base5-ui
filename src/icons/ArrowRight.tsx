import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const ArrowRightIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M15.703 9.71098L11.414 14C11.024 14.39 10.39 14.39 10 14C9.61001 13.61 9.61001 12.976 10 12.586L12.586 9.99998L3.00001 9.99998C2.44501 9.99698 2.00001 9.54998 2.00001 8.99998C2.00001 8.44998 2.44501 8.00298 3.00001 7.99998L12.586 7.99998L9.98001 5.39398C9.58901 5.00398 9.58901 4.36998 9.98001 3.97998C10.37 3.58898 11.004 3.58898 11.394 3.97998L15.703 8.28898L15.707 8.29298C15.774 8.35898 15.829 8.43298 15.873 8.51398L15.879 8.52398L15.88 8.52498L15.886 8.53498L15.912 8.59198L15.921 8.61098L15.923 8.61398L15.927 8.62298L15.945 8.67598L15.955 8.70298L15.956 8.70798L15.959 8.71498L15.971 8.76498L15.98 8.79898V8.80298L15.982 8.80898L15.983 8.81698L15.995 8.89798L16 8.99998L15.995 9.10198L15.983 9.18298L15.982 9.19098L15.98 9.19698V9.20098L15.971 9.23498L15.959 9.28498L15.956 9.29198L15.955 9.29698L15.945 9.32398L15.927 9.37698L15.923 9.38598L15.921 9.38898L15.912 9.40798L15.886 9.46498L15.88 9.47498L15.879 9.47598L15.873 9.48598C15.829 9.56698 15.774 9.64098 15.707 9.70698L15.703 9.71098V9.71098Z" />
		</Svg>
	);
});

ArrowRightIcon.displayName = 'ArrowRightIcon';

ArrowRightIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ArrowRightIcon;
