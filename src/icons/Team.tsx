import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const TeamIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M12.992,15.305c0,-1.693 -1.64,-2.554 -3.238,-3.246c-1.592,-0.689 -2.101,-1.27 -2.101,-2.513c0,-0.746 0.486,-0.503 0.699,-1.871c0.09,-0.566 0.519,-0.009 0.602,-1.303c0,-0.516 0.046,-0.41 0.046,-0.41c0,0 -0.162,-0.997 -0.115,-1.585c0.048,-0.616 -0.468,-1.844 -1.726,-2.333c-1.12,-0.379 -1.842,-0.118 -2.615,0.381c-0.762,0.57 -0.967,1.472 -0.93,1.952c0.049,0.588 0.167,1.352 0.167,1.352c0,0 -0.236,0.128 -0.236,0.644c0.083,1.295 0.513,0.736 0.603,1.303c0.213,1.368 0.7,1.125 0.7,1.87c0,1.244 -0.16,1.666 -1.752,2.355c-1.599,0.691 -2.096,1.8 -2.088,3.404c0.002,0.481 -0.008,0.657 -0.008,0.657l12,0c0,0 -0.008,-0.176 -0.008,-0.657ZM15.896,10.96c-0.851,-0.344 -1.204,-0.755 -1.204,-1.557c0,-0.483 0.314,-0.326 0.452,-1.208c0.057,-0.365 0.335,-0.006 0.388,-0.841c0,-0.332 -0.151,-0.415 -0.151,-0.415c0,0 0.077,-0.495 0.107,-0.874c0.038,-0.472 -0.273,-1.694 -1.701,-1.694c-1.427,0 -1.738,1.222 -1.702,1.694c0.032,0.379 0.108,0.874 0.108,0.874c0,0 -0.151,0.082 -0.151,0.415c0.053,0.835 0.331,0.476 0.388,0.841c0.138,0.883 0.529,0.732 0.452,1.208c-0.196,1.213 -1.167,0.964 -1.882,1.559c1.23,0.537 2.808,0.938 3.016,2.944l2.984,0c0,0 0,-0.888 0,-1.199c0,-0.754 -0.205,-1.382 -1.104,-1.747Z" />
		</Svg>
	);
});

TeamIcon.displayName = 'TeamIcon';

TeamIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default TeamIcon;
