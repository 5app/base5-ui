import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const AssetWebinarIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M16,6.015c-0,-0.534 -0.212,-1.047 -0.59,-1.425c-0.378,-0.378 -0.891,-0.59 -1.425,-0.59c-2.659,-0 -7.311,-0 -9.97,-0c-0.534,-0 -1.047,0.212 -1.425,0.59c-0.378,0.378 -0.59,0.891 -0.59,1.425c0,1.981 0,4.989 0,6.97c0,0.534 0.212,1.047 0.59,1.425c0.378,0.378 0.891,0.59 1.425,0.59c2.659,0 7.311,-0 9.97,0c0.534,0 1.047,-0.212 1.425,-0.59c0.378,-0.378 0.59,-0.891 0.59,-1.425c0,-1.981 0,-4.989 0,-6.97Zm-4,6.985l2,-0c0.266,0 0.52,-0.105 0.707,-0.293c0.188,-0.187 0.293,-0.441 0.293,-0.707c0,-1.537 0,-4.463 -0,-6c0,-0.266 -0.105,-0.52 -0.293,-0.707c-0.187,-0.188 -0.441,-0.293 -0.707,-0.293c-2.259,0 -7.741,0 -10,0c-0.266,-0 -0.52,0.105 -0.707,0.293c-0.188,0.187 -0.293,0.441 -0.293,0.707c0,1.537 -0,4.463 -0,6c-0,0.266 0.105,0.52 0.293,0.707c0.187,0.188 0.441,0.293 0.707,0.293l2,-0l-0,-0.008c0,-0.793 0.315,-1.554 0.876,-2.116c0.562,-0.561 1.323,-0.876 2.116,-0.876c0.005,-0 0.011,0 0.016,0c0.793,-0 1.554,0.315 2.116,0.876c0.561,0.562 0.876,1.323 0.876,2.116l-0,0.008Zm-3,-7c0.828,0 1.5,0.672 1.5,1.5c0,0.828 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5Z" />
		</Svg>
	);
});

AssetWebinarIcon.displayName = 'AssetWebinarIcon';

AssetWebinarIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetWebinarIcon;
