import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const DownloadIcon = forwardRef((props, ref) => {
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
			<path d="M15,13.972c0,-0.537 -0.435,-0.972 -0.972,-0.972c-2.252,0 -7.804,0 -10.056,0c-0.537,0 -0.972,0.435 -0.972,0.972c0,0.019 0,0.037 0,0.056c0,0.537 0.435,0.972 0.972,0.972c2.252,0 7.804,0 10.056,0c0.537,0 0.972,-0.435 0.972,-0.972c0,-0.019 0,-0.037 0,-0.056Z M8,8l0,-4.017c0,-0.261 0.104,-0.511 0.288,-0.695c0.184,-0.184 0.434,-0.288 0.695,-0.288c0.011,0 0.023,0 0.034,0c0.261,0 0.511,0.104 0.695,0.288c0.184,0.184 0.288,0.434 0.288,0.695l0,4.017l3.243,0l-4.243,4.243l-4.243,-4.243l3.243,0Z" />
		</Svg>
	);
});

DownloadIcon.displayName = 'DownloadIcon';

DownloadIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default DownloadIcon;
