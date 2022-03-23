import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const FavouriteIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M9 13L13 17L13 5C13 5 13 3 9 3C5 3 5 5 5 5V17L9 13Z" />
		</Svg>
	);
});

FavouriteIcon.displayName = 'FavouriteIcon';

FavouriteIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default FavouriteIcon;
