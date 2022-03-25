import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const AssetDefaultIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden =
		!(otherProps['aria-label'] || otherProps['aria-labelledby']) ||
		undefined;

	return (
		<Svg
			{...otherProps}
			ref={ref}
			viewBox="0 0 18 19"
			width={size}
			height={size}
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
			focusable="false"
			aria-hidden={ariaHidden}
		>
			<path d="M14,6.633c0,-2.539 -2.058,-4.596 -4.596,-4.596c-1.666,0 -3.391,0 -4.432,0c-0.537,0 -0.972,0.435 -0.972,0.972c0,2.565 0,9.49 0,12.055c0,0.537 0.435,0.973 0.972,0.973c1.913,0 6.143,0 8.056,0c0.537,0 0.972,-0.436 0.972,-0.973c0,-1.723 0,-5.416 0,-8.431Zm-1,0.402c0,-2.209 -1.79,-3.998 -3.998,-3.998c-0.001,0 -0.002,0 -0.002,0l0,4l4,0c0,0 0,-0.001 0,-0.002Z" />
		</Svg>
	);
});

AssetDefaultIcon.displayName = 'AssetDefaultIcon';

AssetDefaultIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetDefaultIcon;
