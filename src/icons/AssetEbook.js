import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const AssetEbookIcon = forwardRef((props, ref) => {
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
			<path d="M2,15l0,-11c0,0 3.151,0 5.379,0c0.573,0 1.122,0.228 1.527,0.633c0.033,0.032 0.064,0.066 0.094,0.101c0.03,-0.035 0.061,-0.069 0.094,-0.101c0.405,-0.405 0.954,-0.633 1.527,-0.633c2.228,0 5.379,0 5.379,0l0,11l-5.386,0c-0.571,0 -1.119,0.227 -1.522,0.63c-0.032,0.032 -0.063,0.065 -0.092,0.099c-0.029,-0.034 -0.06,-0.067 -0.092,-0.099c-0.403,-0.403 -0.951,-0.63 -1.522,-0.63l-5.386,0Zm6,-8.214c0,-0.474 -0.188,-0.928 -0.523,-1.263c-0.335,-0.335 -0.789,-0.523 -1.263,-0.523c-1.485,0 -3.357,0 -3.357,0c0,0 0,4.585 0,7.21c0,0.475 0.189,0.93 0.524,1.266c0.336,0.335 0.792,0.524 1.266,0.524c1.485,0 3.353,0 3.353,0c0,0 0,-4.59 0,-7.214Zm7.143,-1.786l-3.364,0c-0.473,0.001 -0.925,0.188 -1.258,0.521c-0.334,0.334 -0.521,0.786 -0.521,1.258c0,2.623 0,7.221 0,7.221c0,0 1.902,0 3.393,0c0.464,0 0.909,-0.184 1.237,-0.513c0.328,-0.328 0.513,-0.773 0.513,-1.237l0,-7.25Z" />
		</Svg>
	);
});

AssetEbookIcon.displayName = 'AssetEbookIcon';

AssetEbookIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AssetEbookIcon;
