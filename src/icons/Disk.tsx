import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const DiskIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M12.88,3l-8.38,0c-0.826,0 -1.5,0.675 -1.5,1.5l0,9c0,0.825 0.674,1.5 1.5,1.5l9,0c0.826,0 1.5,-0.675 1.5,-1.5l0,-8.155l-2.12,-2.345Zm-0.88,4.25c0,0.412 -0.337,0.75 -0.75,0.75l-4.5,0c-0.412,0 -0.75,-0.338 -0.75,-0.75l0,-3.25l6,0l0,3.25Zm-1,-2.25l-1,0l0,2l1,0l0,-2Z" />
		</Svg>
	);
});

DiskIcon.displayName = 'DiskIcon';

DiskIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default DiskIcon;
