import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const FavouriteIcon = forwardRef((props, ref) => {
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
			<path d="M11.036,2c0.521,0 1.021,0.207 1.389,0.575c0.368,0.368 0.575,0.868 0.575,1.389c0,4.067 0,13.036 0,13.036l-4,-4l-4,4c0,0 0,-8.975 0,-13.041c0,-0.519 0.206,-1.018 0.574,-1.385c0.367,-0.368 0.866,-0.574 1.385,-0.574c1.24,0 2.837,0 4.077,0Z" />
		</Svg>
	);
});

FavouriteIcon.displayName = 'FavouriteIcon';

FavouriteIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default FavouriteIcon;
