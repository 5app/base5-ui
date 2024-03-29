import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const AssetSpreadsheetIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M11.947,15l0,-2l3,0l0,2l-3,0Zm0,-5l3,0l0,2l-3,0l0,-2Zm0,-7l3,0l0,2l-3,0l0,-2Zm-8,10l3,0l0,2l-3,0l0,-2Zm0,-3l3,0l0,2l-3,0l0,-2Zm0,-7l3,0l0,2l-3,0l0,-2Zm-1,3l11,0l0,3l-11,0l0,-3Zm8,-1l-3,0l0,-2l3,0l0,2Zm0,7l-3,0l0,-2l3,0l0,2Zm0,3l-3,0l0,-2l3,0l0,2Z" />
		</Svg>
	);
});

AssetSpreadsheetIcon.displayName = 'AssetSpreadsheetIcon';

AssetSpreadsheetIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetSpreadsheetIcon;
