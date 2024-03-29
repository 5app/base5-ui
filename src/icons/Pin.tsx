import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const PinIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M5.298,12.745l-1.491,2.302l0.159,0.753l0.75,-0.161l1.491,-2.301c-0.159,-0.085 -0.316,-0.175 -0.468,-0.276c-0.155,-0.1 -0.302,-0.207 -0.441,-0.317Zm6.313,-0.804c0.01,-0.021 0.016,-0.043 0.025,-0.065c0.038,-0.083 0.071,-0.166 0.098,-0.253c0.004,-0.016 0.006,-0.031 0.011,-0.046c0.028,-0.096 0.051,-0.191 0.07,-0.289c0,-0.004 0,-0.008 0,-0.014c0.138,-0.828 -0.103,-1.752 -0.654,-2.587l0.786,-1.214c0.906,0.116 1.69,-0.112 2.066,-0.695c0.654,-1.008 -0.141,-2.686 -1.774,-3.749c-1.634,-1.064 -3.487,-1.109 -4.14,-0.102c-0.378,0.583 -0.267,1.393 0.208,2.176l-0.788,1.214c-0.984,-0.165 -1.923,-0.011 -2.623,0.454c-0.004,0.001 -0.009,0.003 -0.012,0.005c-0.081,0.056 -0.16,0.117 -0.235,0.18c-0.012,0.01 -0.026,0.019 -0.036,0.029c-0.069,0.06 -0.132,0.126 -0.192,0.193c-0.014,0.017 -0.034,0.032 -0.047,0.05c-0.075,0.085 -0.145,0.176 -0.206,0.272c-0.98,1.511 -0.144,3.798 1.865,5.107c2.011,1.309 4.434,1.143 5.413,-0.368c0.061,-0.096 0.118,-0.195 0.165,-0.298Z" />
		</Svg>
	);
});

PinIcon.displayName = 'PinIcon';

PinIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default PinIcon;
