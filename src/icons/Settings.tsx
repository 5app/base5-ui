import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const SettingsIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M14.167,9c0,-0.8 0.493,-1.429 1.232,-1.862c-0.134,-0.445 -0.31,-0.872 -0.527,-1.274c-0.83,0.217 -1.501,-0.107 -2.065,-0.673c-0.565,-0.563 -0.738,-1.235 -0.521,-2.065c-0.401,-0.217 -0.829,-0.395 -1.274,-0.527c-0.433,0.739 -1.215,1.231 -2.013,1.231c-0.798,0 -1.58,-0.492 -2.014,-1.231c-0.445,0.132 -0.871,0.31 -1.273,0.527c0.217,0.83 0.045,1.502 -0.521,2.065c-0.564,0.566 -1.235,0.89 -2.066,0.673c-0.217,0.402 -0.393,0.829 -0.526,1.274c0.739,0.433 1.231,1.062 1.231,1.862c0,0.797 -0.492,1.58 -1.231,2.013c0.133,0.445 0.309,0.872 0.526,1.274c0.831,-0.217 1.502,-0.045 2.066,0.52c0.565,0.565 0.738,1.237 0.521,2.066c0.402,0.217 0.828,0.394 1.274,0.528c0.433,-0.742 1.215,-1.232 2.014,-1.232c0.798,0 1.58,0.491 2.014,1.232c0.445,-0.134 0.871,-0.311 1.274,-0.528c-0.217,-0.829 -0.045,-1.501 0.52,-2.066c0.565,-0.564 1.236,-0.888 2.066,-0.673c0.217,-0.401 0.394,-0.827 0.527,-1.274c-0.741,-0.433 -1.234,-1.063 -1.234,-1.86Zm-5.168,2.782c-1.537,0 -2.783,-1.246 -2.783,-2.782c0,-1.538 1.246,-2.784 2.783,-2.784c1.538,0 2.783,1.247 2.783,2.784c0,1.537 -1.245,2.782 -2.783,2.782Z" />
		</Svg>
	);
});

SettingsIcon.displayName = 'SettingsIcon';

SettingsIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default SettingsIcon;
