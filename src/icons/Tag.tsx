import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const TagIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M13.325,4.492c0.314,-0.402 0.505,-0.89 0.607,-1.39c0.047,-0.234 0.076,-0.472 0.09,-0.71c0.005,-0.072 0.009,-0.357 0.016,-0.427c0.004,-0.027 0.048,-0.167 0.072,-0.206c0.081,-0.128 0.212,-0.207 0.36,-0.23c0.028,-0.003 0.054,-0.004 0.082,-0.004c0.056,0.003 0.109,0.013 0.162,0.033c0.129,0.05 0.234,0.153 0.285,0.282c0.021,0.052 0.03,0.106 0.035,0.161c0.001,0.095 -0.002,0.19 -0.005,0.285c-0.015,0.34 -0.049,0.68 -0.117,1.014c-0.124,0.612 -0.356,1.206 -0.726,1.712c-0.088,0.121 -0.184,0.237 -0.287,0.345c0.066,0.197 0.101,0.406 0.101,0.624c0,1.013 0,2.236 0,3.222c0,0.477 -0.189,0.934 -0.526,1.271c-0.085,0.084 -0.176,0.159 -0.274,0.224l-5.431,5.43c-0.378,0.379 -0.992,0.379 -1.37,0c-1.119,-1.118 -3.325,-3.324 -4.443,-4.443c-0.379,-0.378 -0.379,-0.992 0,-1.37l5.17,-5.17c0.263,-0.671 0.916,-1.145 1.68,-1.145c0.984,0 2.203,0 3.213,0c0.501,0 0.958,0.186 1.306,0.492ZM10.563,6.363c0.652,0 1.181,0.53 1.181,1.182c0,0.652 -0.529,1.182 -1.181,1.182c-0.653,0 -1.182,-0.53 -1.182,-1.182c0,-0.652 0.529,-1.182 1.182,-1.182Z" />
		</Svg>
	);
});

TagIcon.displayName = 'TagIcon';

TagIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default TagIcon;
