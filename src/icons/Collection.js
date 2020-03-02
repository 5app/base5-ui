import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const CollectionIcon = forwardRef((props, ref) => {
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
			<path d="M12,2l-6,0c0,0 -1,0.204 -1,1l8,0c0,-0.796 -1,-1 -1,-1Zm2,3.204c0,-0.796 -1,-1.204 -1,-1.204l-8,0c0,0 -1,0.408 -1,1.204l0,0.796l10,0l0,-0.796Zm1,0.796l0,1l-12,0l0,-1c0,0 -1.025,0.396 -1,1.408c0.028,1.124 0.865,5.857 1,6.592c0.148,0.807 1,1 1,1l10,0c0,0 0.851,-0.193 1,-1c0.135,-0.735 1.055,-5.519 1,-6.592c-0.047,-0.917 -1,-1.408 -1,-1.408Zm-3,4c0,0.441 -0.559,1 -1,1l-4,0c-0.441,0 -1,-0.559 -1,-1l0,-1l1,0l0,1l4,0l0,-1l1,0l0,1Z" />
		</Svg>
	);
});

CollectionIcon.displayName = 'CollectionIcon';

CollectionIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default CollectionIcon;
