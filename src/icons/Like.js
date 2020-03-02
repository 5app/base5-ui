import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const LikeIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

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
			aria-hidden={true}
		>
			<path d="M10.409,6.871c-0.157,-0.29 1.079,-5.06 -1.315,-5.359c-1.252,-0.156 -0.26,3.323 -1.767,4.734c-1.021,0.956 -1.432,2.593 -1.304,3.505l-0.021,3.371c0.154,1.096 3.612,1.173 6.832,0.72c1.181,-0.165 3.017,-5.405 1.818,-6.971c-0.724,-0.947 -4.086,0.291 -4.243,0Z M5,9c0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1l0,5.103c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-5.103Z" />
		</Svg>
	);
});

LikeIcon.displayName = 'LikeIcon';

LikeIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default LikeIcon;
