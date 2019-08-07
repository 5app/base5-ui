import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const UndoIcon = forwardRef((props, ref) => {
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
			<path d="M5.76,4.136c0.838,-0.46 1.799,-0.72 2.824,-0.72c3.314,0 6,2.686 6,6c0,3.314 -2.686,6 -6,6c-2.215,0 -4.128,-1.214 -5.168,-3l2.548,0c0.703,0.615 1.612,1 2.62,1c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4c-0.661,0 -1.279,0.166 -1.822,0.455M4.527,2l4,6.928l-6.33,-0.964l2.33,-5.964Z" />
		</Svg>
	);
});

UndoIcon.displayName = 'UndoIcon';

UndoIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default UndoIcon;
