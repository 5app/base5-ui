import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const AssetQuizIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M15,15.019l0,0.981c-0.729,-0.556 -1.485,-0.901 -2.276,-0.981l-0.724,0c0.244,-0.025 0.485,-0.025 0.724,0l2.276,0Zm0,-10.249c0,-0.735 -0.292,-1.439 -0.811,-1.959c-0.52,-0.519 -1.224,-0.811 -1.959,-0.811c-1.939,0 -4.521,0 -6.46,0c-0.735,0 -1.439,0.292 -1.959,0.811c-0.519,0.52 -0.811,1.224 -0.811,1.959c0,2.164 0,5.161 0,7.352c0,0.763 0.303,1.495 0.843,2.035c0.54,0.54 1.272,0.843 2.035,0.843c3.55,0 9.122,0 9.122,0c0,0 0,-6.413 0,-10.23Zm-3.28,-1.77l-5.44,0c-1.26,0.001 -2.28,1.022 -2.28,2.28c0,1.629 0,3.811 0,5.44c0,1.259 1.021,2.28 2.28,2.28c2.952,0 7.72,0 7.72,0c0,0 0,-4.768 0,-7.72c0,-1.258 -1.02,-2.279 -2.28,-2.28Zm-2.72,6.884c0.616,0 1.116,0.5 1.116,1.116c0,0.616 -0.5,1.116 -1.116,1.116c-0.616,0 -1.116,-0.5 -1.116,-1.116c0,-0.616 0.5,-1.116 1.116,-1.116Zm-0.671,-3.313l-1.99,0c0,-0.34 0.068,-0.652 0.205,-0.935c0.137,-0.284 0.327,-0.53 0.57,-0.74c0.243,-0.21 0.53,-0.374 0.86,-0.49c0.33,-0.117 0.688,-0.175 1.075,-0.175c0.393,0 0.752,0.065 1.075,0.195c0.323,0.13 0.602,0.305 0.835,0.525c0.233,0.22 0.413,0.473 0.54,0.76c0.127,0.286 0.19,0.583 0.19,0.89c0,1 -0.603,1.71 -1.81,2.13l0,0.72l-1.84,0l0,-1.95c0.08,0.013 0.153,0.025 0.22,0.035c0.067,0.01 0.13,0.015 0.19,0.015c0.18,0 0.35,-0.025 0.51,-0.075c0.16,-0.05 0.298,-0.119 0.415,-0.205c0.117,-0.087 0.208,-0.192 0.275,-0.315c0.067,-0.124 0.1,-0.259 0.1,-0.405c0,-0.2 -0.067,-0.374 -0.2,-0.52c-0.133,-0.147 -0.313,-0.22 -0.54,-0.22c-0.207,0 -0.372,0.07 -0.495,0.21c-0.123,0.139 -0.185,0.322 -0.185,0.55Z" />
		</Svg>
	);
});

AssetQuizIcon.displayName = 'AssetQuizIcon';

AssetQuizIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetQuizIcon;
