import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const DislikeIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M10.409,11.322c-0.157,0.29 1.079,5.061 -1.315,5.359c-1.252,0.156 -0.26,-3.323 -1.767,-4.734c-1.021,-0.956 -1.432,-2.593 -1.304,-3.505l-0.021,-2.371c0.154,-1.096 3.777,-2.433 6.998,-1.981c1.181,0.166 2.851,5.666 1.652,7.232c-0.724,0.947 -4.086,-0.291 -4.243,0Z M5,6c0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1l0,5.103c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-5.103Z" />
		</Svg>
	);
});

DislikeIcon.displayName = 'DislikeIcon';

DislikeIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default DislikeIcon;
