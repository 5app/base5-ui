import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const EditIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M13.27,4.703c-0.817,-0.819 -1.431,-0.696 -1.431,-0.696l-3.429,3.435l-3.838,3.844l-0.572,2.704l2.699,-0.574l3.837,-3.843l3.429,-3.436c0,0 0.123,-0.615 -0.695,-1.434ZM6.538,13.091l-0.92,0.199c-0.088,-0.166 -0.196,-0.332 -0.391,-0.528c-0.196,-0.197 -0.362,-0.303 -0.528,-0.393l0.198,-0.921l0.267,-0.266c0,0 0.5,0.01 1.065,0.576c0.565,0.566 0.576,1.068 0.576,1.068l-0.267,0.265Z" />
		</Svg>
	);
});

EditIcon.displayName = 'EditIcon';

EditIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default EditIcon;
