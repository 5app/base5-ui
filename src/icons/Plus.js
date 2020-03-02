import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const PlusIcon = forwardRef((props, ref) => {
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
			<path d="M9.963,9.962l0.037,4.045c0,0 0.024,1 -1,1c-1.024,0 -1,-1 -1,-1l0.052,-4.045l-4.052,0.045c0,0 -1,-0.015 -1,-1c0,-0.985 1,-1 1,-1l4.052,0.045l-0.052,-4.045c0,0 0.027,-1 1,-1c0.973,0 1,1 1,1l-0.037,4.045l4.037,-0.045c0,0 1,0.001 1,1c0,0.999 -1,1 -1,1l-4.037,-0.045Z" />
		</Svg>
	);
});

PlusIcon.displayName = 'PlusIcon';

PlusIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default PlusIcon;
