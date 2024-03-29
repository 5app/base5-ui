import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const LinkIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M7.395,12.513l-0.608,0.603c-0.526,0.52 -1.383,0.52 -1.909,0c-0.252,-0.25 -0.391,-0.584 -0.391,-0.939c0,-0.354 0.14,-0.686 0.391,-0.938l2.235,-2.215c0.462,-0.459 1.334,-1.135 1.969,-0.506c0.293,0.29 0.762,0.288 1.053,-0.003c0.289,-0.292 0.287,-0.762 -0.004,-1.051c-1.08,-1.071 -2.676,-0.873 -4.065,0.506l-2.235,2.215c-0.536,0.532 -0.831,1.24 -0.831,1.992c0,0.755 0.296,1.461 0.831,1.992c0.552,0.547 1.277,0.822 2.002,0.822c0.725,0 1.45,-0.274 2.001,-0.822l0.609,-0.603c0.291,-0.288 0.293,-0.759 0.003,-1.049c-0.289,-0.291 -0.76,-0.292 -1.051,-0.004ZM14.169,3.905c-1.161,-1.149 -2.783,-1.212 -3.855,-0.147l-0.757,0.751c-0.291,0.289 -0.294,0.759 -0.004,1.05c0.29,0.291 0.759,0.293 1.052,0.004l0.756,-0.751c0.556,-0.551 1.284,-0.323 1.76,0.148c0.252,0.251 0.392,0.584 0.392,0.938c0,0.355 -0.14,0.687 -0.392,0.938l-2.384,2.364c-1.092,1.08 -1.602,0.574 -1.821,0.357c-0.291,-0.289 -0.762,-0.287 -1.051,0.004c-0.29,0.292 -0.288,0.762 0.004,1.05c0.501,0.496 1.073,0.742 1.671,0.742c0.733,0 1.508,-0.369 2.245,-1.1l2.384,-2.363c0.534,-0.531 0.831,-1.239 0.831,-1.992c0,-0.753 -0.297,-1.461 -0.831,-1.993Z" />
		</Svg>
	);
});

LinkIcon.displayName = 'LinkIcon';

LinkIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default LinkIcon;
