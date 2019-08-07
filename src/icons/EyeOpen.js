import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const EyeOpenIcon = forwardRef((props, ref) => {
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
			<path d="M9,5c-5.249,0 -8,3.866 -8,4.48c0,0.613 2.751,4.48 8,4.48c5.248,0 8,-3.867 8,-4.48c0,-0.614 -2.752,-4.48 -8,-4.48ZM9,12.926c-1.964,0 -3.556,-1.543 -3.556,-3.446c0,-1.903 1.592,-3.447 3.556,-3.447c1.964,0 3.555,1.544 3.555,3.447c0,1.903 -1.591,3.446 -3.555,3.446ZM9,9.48c-0.326,-0.358 0.53,-1.723 0,-1.723c-0.982,0 -1.778,0.772 -1.778,1.723c0,0.951 0.796,1.723 1.778,1.723c0.982,0 1.778,-0.772 1.778,-1.723c0,-0.438 -1.501,0.303 -1.778,0Z" />
		</Svg>
	);
});

EyeOpenIcon.displayName = 'EyeOpenIcon';

EyeOpenIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default EyeOpenIcon;
