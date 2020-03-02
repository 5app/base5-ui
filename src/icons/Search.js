import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const SearchIcon = forwardRef((props, ref) => {
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
			<path d="M10.759,12.168c-0.791,0.526 -1.739,0.832 -2.759,0.832c-2.76,0 -5,-2.24 -5,-5c0,-2.76 2.24,-5 5,-5c2.76,0 5,2.24 5,5c0,1.02 -0.306,1.968 -0.832,2.759l0.051,0.046l2.488,2.488c0.39,0.39 0.39,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-2.488,-2.488l-0.046,-0.051ZM8,4.488c1.938,0 3.512,1.574 3.512,3.512c0,1.938 -1.574,3.512 -3.512,3.512c-1.938,0 -3.512,-1.574 -3.512,-3.512c0,-1.938 1.574,-3.512 3.512,-3.512ZM8,5c0,0 -0.038,-0.009 1,1c0.879,0.854 1.805,2 1.805,2c0,0 -0.21,-1.187 -1,-2c-0.789,-0.813 -1.805,-1 -1.805,-1Z" />
		</Svg>
	);
});

SearchIcon.displayName = 'SearchIcon';

SearchIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default SearchIcon;
