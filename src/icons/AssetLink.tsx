import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const AssetLinkIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M10.48,10.305l1.535,3.442c0.154,0.377 -0.047,0.799 -0.448,0.944l-0.725,0.261c-0.4,0.144 -0.85,-0.045 -1.004,-0.421l-1.37,-3.363l-2.468,1.058l0,-9.226l6.458,6.458l-1.978,0.847Z" />
		</Svg>
	);
});

AssetLinkIcon.displayName = 'AssetLinkIcon';

AssetLinkIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetLinkIcon;
