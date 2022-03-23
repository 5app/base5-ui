import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const ArrowIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M2.297,8.289l4.289,-4.289c0.39,-0.39 1.024,-0.39 1.414,0c0.39,0.39 0.39,1.024 0,1.414l-2.586,2.586l9.586,0c0.555,0.003 1,0.45 1,1c0,0.55 -0.445,0.997 -1,1l-9.586,0l2.606,2.606c0.391,0.39 0.391,1.024 0,1.414c-0.39,0.391 -1.024,0.391 -1.414,0l-4.309,-4.309l-0.004,-0.004c-0.067,-0.066 -0.122,-0.14 -0.166,-0.221l-0.006,-0.01l-0.001,-0.001l-0.006,-0.01l-0.026,-0.057l-0.009,-0.019l-0.002,-0.003l-0.004,-0.009l-0.018,-0.053l-0.01,-0.027l-0.001,-0.005l-0.003,-0.007l-0.012,-0.05l-0.009,-0.034l0,-0.004l-0.002,-0.006l-0.001,-0.008l-0.012,-0.081l-0.005,-0.102l0,0l0,0l0,0l0,0l0,0l0,0l0.005,-0.102l0.012,-0.081l0.001,-0.008l0.002,-0.006l0,-0.004l0.009,-0.034l0.012,-0.05l0.003,-0.007l0.001,-0.005l0.01,-0.027l0.018,-0.053l0.004,-0.009l0.002,-0.003l0.009,-0.019l0.026,-0.057l0.006,-0.01l0.001,-0.001l0.006,-0.01c0.044,-0.081 0.099,-0.155 0.166,-0.221l0.004,-0.004Z" />
		</Svg>
	);
});

ArrowIcon.displayName = 'ArrowIcon';

ArrowIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ArrowIcon;
