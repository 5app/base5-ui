import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const PlaylistLinkIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden =
		!(otherProps['aria-label'] || otherProps['aria-labelledby']) ||
		undefined;

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
			aria-hidden={ariaHidden}
		>
			<path d="M4,12c0.002,0 1,0.021 1,1c-0,0.98 -1,1 -1,1l-1,0c0,0 -1,-0.014 -1,-1c-0,-0.985 0.998,-1 1,-1l1,0Zm-0,-4c0.002,0 1,0.021 1,1c-0,0.979 -0.998,1 -1,1l-1,0c0,0 -1,-0.014 -1,-1c-0,-0.985 0.998,-1 1,-1l1,0Zm-0,-4c0.002,0 1,0.021 1,1c-0,0.979 -0.998,1 -1,1l-1,0c0,0 -1,-0.014 -1,-1c-0,-0.985 0.998,-1 1,-1l1,0Z M11.374,8c-1.212,0.435 -2.232,1.153 -3.081,2l-1.293,0c0,0 -1,-0.014 -1,-1c-0,-0.985 0.998,-1 1,-1l4.374,0Zm2.578,0.663c0.031,0.097 0.048,0.209 0.048,0.337c-0,0.128 -0.017,0.24 -0.048,0.337l0,-0.674Zm1.048,-4.663c0.002,0 1,0.021 1,1c-0,0.979 -0.998,1 -1,1l-8,0c0,0 -1,-0.014 -1,-1c-0,-0.985 0.998,-1 1,-1l8,0Z M13.154,9.308c-4.736,0.029 -6.154,6.154 -6.154,6.154c1.23,-1.659 2.801,-3.056 6.154,-3.077l-0,2.307l3.846,-3.846l-3.846,-3.846l-0,2.308Z" />
		</Svg>
	);
});

PlaylistLinkIcon.displayName = 'PlaylistLinkIcon';

PlaylistLinkIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default PlaylistLinkIcon;
