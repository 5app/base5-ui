import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const DropboxIcon = forwardRef((props, ref) => {
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
			<path d="M6.163,2.65l-4.163,2.588l2.852,2.387l4.148,-2.688l-2.837,-2.287ZM11.517,13.634c-0.074,0 -0.148,-0.024 -0.208,-0.074l-2.309,-1.913l-2.309,1.914c-0.06,0.049 -0.135,0.074 -0.208,0.074c-0.062,0 -0.124,-0.017 -0.178,-0.052l-1.711,-1.117l0,0.659l4.406,2.77l4.405,-2.771l0,-0.658l-1.71,1.116c-0.054,0.035 -0.116,0.052 -0.178,0.052ZM16,5.238l-4.163,-2.588l-2.837,2.287l4.148,2.688l2.852,-2.387ZM9,10.212l2.573,2.132l4.113,-2.685l-2.538,-2.034l-4.148,2.587ZM6.427,12.344l2.573,-2.132l-4.148,-2.587l-2.538,2.034l4.113,2.685Z" />
		</Svg>
	);
});

DropboxIcon.displayName = 'DropboxIcon';

DropboxIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default DropboxIcon;
