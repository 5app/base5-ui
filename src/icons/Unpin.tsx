import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const UnpinIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M5.298,12.745l-1.491,2.302l0.159,0.753l0.75,-0.161l1.491,-2.301c-0.159,-0.085 -0.316,-0.175 -0.468,-0.276c-0.155,-0.1 -0.302,-0.207 -0.441,-0.317Zm0.64,-6.403l5.646,5.646l-0.138,0.251c-0.979,1.511 -3.402,1.677 -5.413,0.368c-2.009,-1.309 -2.845,-3.596 -1.865,-5.107c0.061,-0.096 0.131,-0.187 0.206,-0.272c0.013,-0.018 0.033,-0.033 0.047,-0.05c0.06,-0.067 0.123,-0.133 0.192,-0.193c0.01,-0.01 0.024,-0.019 0.036,-0.029c0.075,-0.063 0.154,-0.124 0.235,-0.18c0.003,-0.002 0.008,-0.004 0.012,-0.005c0.307,-0.204 0.659,-0.348 1.042,-0.429Zm-2.02,-3.435l0.707,-0.707l3.375,3.376l0.307,-0.473c-0.475,-0.783 -0.586,-1.593 -0.208,-2.176c0.653,-1.007 2.506,-0.962 4.14,0.102c1.633,1.063 2.428,2.741 1.774,3.749c-0.376,0.583 -1.16,0.811 -2.066,0.695l-0.786,1.214c0.029,0.045 0.058,0.09 0.085,0.135l3.703,3.703l-0.707,0.707l-10.324,-10.325Z" />
		</Svg>
	);
});

UnpinIcon.displayName = 'UnpinIcon';

UnpinIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default UnpinIcon;
