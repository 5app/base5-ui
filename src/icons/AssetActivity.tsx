import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const AssetActivityIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M14,11l0,5c0,0 -4.168,0 -7.122,-0c-0.763,0 -1.495,-0.303 -2.035,-0.843c-0.54,-0.54 -0.843,-1.272 -0.843,-2.035c0,-2.447 0,-5.937 -0,-8.352c0,-1.53 1.24,-2.77 2.77,-2.77c1.39,0 3.07,0 4.46,0c0.98,0 1.842,0.509 2.334,1.277l-0.868,0.868c-0.098,-0.173 -0.221,-0.334 -0.364,-0.477c-0.428,-0.428 -1.008,-0.668 -1.612,-0.668c-1.078,0 -2.362,0 -3.44,0c-0.604,0 -1.184,0.24 -1.612,0.668c-0.428,0.428 -0.668,1.008 -0.668,1.612c-0,1.887 -0,4.553 -0,6.44c-0,0.604 0.24,1.184 0.668,1.612c0.428,0.428 1.008,0.668 1.612,0.668c2.365,0 5.72,-0 5.72,-0l-0,-2l1,-1Zm2.368,-6.367c-0.737,-0.738 -1.289,-0.627 -1.289,-0.627l-3.089,3.095l-3.459,3.463l-0.515,2.436l2.432,-0.517l3.457,-3.462l3.089,-3.096c0,0 0.111,-0.554 -0.626,-1.292Zm-6.065,7.558l-0.829,0.179c-0.08,-0.15 -0.176,-0.3 -0.352,-0.477c-0.177,-0.177 -0.327,-0.273 -0.476,-0.354l0.179,-0.829l0.239,-0.24c0,-0 0.451,0.009 0.961,0.52c0.508,0.509 0.519,0.961 0.519,0.961l-0.241,0.24Zm-1.303,-5.191l-2,-0l-0,1l2,0l-0,-1Zm2,-2l-4,0l0,1l4,0l0,-1Z" />
		</Svg>
	);
});

AssetActivityIcon.displayName = 'AssetActivityIcon';

AssetActivityIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetActivityIcon;
