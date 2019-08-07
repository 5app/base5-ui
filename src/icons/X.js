import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const XIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	return (
		<Svg
			{...otherProps}
			ref={ref}
			viewBox="0 0 18 19"
			width={size}
			height={size}
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
		>
			<path d="M10.352,9.034l2.886,2.834c0,0 0.724,0.69 0,1.414c-0.724,0.724 -1.414,0 -1.414,0l-2.823,-2.897l-2.834,2.897c0,0 -0.717,0.697 -1.414,0c-0.697,-0.696 0,-1.414 0,-1.414l2.897,-2.834l-2.897,-2.823c0,0 -0.688,-0.726 0,-1.414c0.688,-0.688 1.414,0 1.414,0l2.834,2.886l2.823,-2.886c0,0 0.708,-0.706 1.414,0c0.707,0.707 0,1.414 0,1.414l-2.886,2.823Z" />
		</Svg>
	);
});

XIcon.displayName = 'XIcon';

XIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default XIcon;
