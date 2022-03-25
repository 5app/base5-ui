import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const StarIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M8.539,3.32c0.065,-0.191 0.247,-0.32 0.451,-0.32c0.203,0 0.385,0.129 0.45,0.32l1.281,3.743l3.994,0.048c0.204,0.003 0.383,0.134 0.446,0.325c0.063,0.192 -0.004,0.403 -0.168,0.523l-3.202,2.362l1.188,3.773c0.06,0.193 -0.01,0.402 -0.175,0.521c-0.165,0.118 -0.388,0.12 -0.554,0.003l-3.26,-2.283l-3.26,2.283c-0.167,0.117 -0.39,0.115 -0.555,-0.003c-0.165,-0.119 -0.235,-0.328 -0.174,-0.521l1.187,-3.773l-3.202,-2.362c-0.164,-0.12 -0.231,-0.331 -0.168,-0.523c0.063,-0.191 0.242,-0.322 0.446,-0.325l3.994,-0.048l1.281,-3.743Z" />
		</Svg>
	);
});

StarIcon.displayName = 'StarIcon';

StarIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default StarIcon;
