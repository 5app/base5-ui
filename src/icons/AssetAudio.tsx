import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const AssetAudioIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M6.016,12.205l0,-7.205l7,-1l0,8.499l0,0l0,0.001l-0.001,0.004l-0.001,0.046l0,0.01c-0.042,0.8 -0.928,1.44 -2.014,1.44c-1.112,0 -2.016,-0.672 -2.016,-1.5c0,-0.828 0.904,-1.5 2.016,-1.5c0.37,0 0.717,0.074 1.016,0.205l0,-4.062l-5,0.714l0,5.687c0,0.2 -0.059,0.386 -0.16,0.542c-0.307,0.537 -1.023,0.914 -1.856,0.914c-1.112,0 -2.016,-0.672 -2.016,-1.5c0,-0.828 0.904,-1.5 2.016,-1.5c0.37,0 0.717,0.074 1.016,0.205Z" />
		</Svg>
	);
});

AssetAudioIcon.displayName = 'AssetAudioIcon';

AssetAudioIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetAudioIcon;
