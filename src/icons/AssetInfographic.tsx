import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const AssetInfographicIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M15,12l0,2l-12,0l0,-2l12,0Zm-10,-7l0,6l-2,0l0,-6l2,0Zm7,0c1.656,0 3,1.344 3,3c0,1.656 -1.344,3 -3,3c-1.656,0 -3,-1.344 -3,-3c0,-1.656 1.344,-3 3,-3Zm-4,2l0,4l-2,0l0,-4l2,0Z" />
		</Svg>
	);
});

AssetInfographicIcon.displayName = 'AssetInfographicIcon';

AssetInfographicIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetInfographicIcon;
