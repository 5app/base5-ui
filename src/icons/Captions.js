import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const CaptionsIcon = forwardRef((props, ref) => {
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
			<path d="M13.419,4c1.425,0 2.581,1.157 2.581,2.581l0,4.838c0,1.425 -1.156,2.581 -2.581,2.581l-8.838,0c-1.425,0 -2.581,-1.156 -2.581,-2.581l0,-4.838c0,-1.424 1.156,-2.581 2.581,-2.581l8.838,0Zm-0.419,7l-8,0l0,1l8,0l0,-1Zm-6,-2l-2,0l0,1l2,0l0,-1Zm6,0l-4,0l0,1l4,0l0,-1Z" />
		</Svg>
	);
});

CaptionsIcon.displayName = 'CaptionsIcon';

CaptionsIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default CaptionsIcon;
