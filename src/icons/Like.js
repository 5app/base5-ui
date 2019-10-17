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
		>
			<path d="M10.347,7.155c-0.158,-0.29 1.078,-5.06 -1.315,-5.359c-1.253,-0.156 -0.261,3.323 -1.767,4.734c-1.021,0.956 -1.433,2.593 -1.305,3.505l-0.021,3.371c0.154,1.097 3.612,1.173 6.833,0.721c1.18,-0.166 3.016,-5.406 1.818,-6.972c-0.724,-0.947 -4.087,0.291 -4.243,0Z M5,9c0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1l0,5.103c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-5.103Z" />
		</Svg>
	);
});

LikeIcon.displayName = 'LikeIcon';

LikeIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default LikeIcon;
