import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const ShareIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M12.614,11.488c-0.457,0 -0.87,0.178 -1.183,0.464l-4.292,-2.503c0.033,-0.136 0.054,-0.278 0.054,-0.422c0,-0.145 -0.021,-0.286 -0.054,-0.422l4.247,-2.478c0.322,0.301 0.753,0.487 1.228,0.487c0.997,0 1.808,-0.81 1.808,-1.807c0,-0.997 -0.811,-1.807 -1.808,-1.807c-0.996,0 -1.807,0.81 -1.807,1.807c0,0.145 0.021,0.286 0.054,0.422l-4.247,2.478c-0.322,-0.3 -0.753,-0.487 -1.228,-0.487c-0.997,0 -1.808,0.81 -1.808,1.807c0,0.997 0.811,1.807 1.808,1.807c0.475,0 0.906,-0.187 1.228,-0.488l4.293,2.503c-0.03,0.127 -0.048,0.259 -0.048,0.395c0,0.97 0.785,1.756 1.755,1.756c0.971,0 1.756,-0.787 1.756,-1.756c0,-0.969 -0.785,-1.756 -1.756,-1.756Z" />
		</Svg>
	);
});

ShareIcon.displayName = 'ShareIcon';

ShareIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default ShareIcon;
