import React from 'react';

import Svg from './BaseSvg';

const AndroidIcon = React.forwardRef((props, ref) => {
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
			<path d="M7.501,5.013c0.141,0 0.262,-0.05 0.363,-0.149c0.102,-0.099 0.152,-0.218 0.152,-0.356c0,-0.138 -0.05,-0.257 -0.152,-0.356c-0.101,-0.1 -0.222,-0.149 -0.363,-0.149c-0.141,0 -0.259,0.049 -0.356,0.149c-0.097,0.099 -0.145,0.218 -0.145,0.356c0,0.138 0.048,0.257 0.145,0.356c0.097,0.099 0.215,0.149 0.356,0.149ZM10.502,5.013c0.141,0 0.26,-0.05 0.356,-0.149c0.097,-0.099 0.146,-0.218 0.146,-0.356c0,-0.138 -0.049,-0.257 -0.146,-0.356c-0.096,-0.1 -0.215,-0.149 -0.356,-0.149c-0.141,0 -0.262,0.049 -0.363,0.149c-0.101,0.099 -0.152,0.218 -0.152,0.356c0,0.138 0.051,0.257 0.152,0.356c0.101,0.099 0.222,0.149 0.363,0.149ZM3.499,7c0.137,0 0.254,0.079 0.351,0.237c0.098,0.158 0.146,0.347 0.146,0.568l0,3.392c0,0.226 -0.048,0.418 -0.143,0.576c-0.096,0.158 -0.214,0.236 -0.354,0.236c-0.14,0 -0.258,-0.078 -0.356,-0.236c-0.097,-0.158 -0.146,-0.35 -0.146,-0.576l0,-3.392c0,-0.221 0.049,-0.41 0.146,-0.568c0.098,-0.158 0.216,-0.237 0.356,-0.237ZM12.999,7l0,5c0,0.626 -0.587,1 -1,1l-1,0l0.002,2.065c0,0.261 -0.049,0.482 -0.146,0.664c-0.098,0.182 -0.216,0.273 -0.356,0.273c-0.14,0 -0.258,-0.091 -0.356,-0.273c-0.097,-0.182 -0.146,-0.403 -0.146,-0.664l0.002,-2.065l-2,0l0.004,2.065c0,0.261 -0.049,0.482 -0.146,0.664c-0.098,0.182 -0.216,0.273 -0.356,0.273c-0.137,0 -0.254,-0.091 -0.351,-0.273c-0.098,-0.182 -0.146,-0.403 -0.146,-0.664l-0.005,-2.065l-1,0c-0.396,0 -1,-0.477 -1,-1l0,-5l8,0ZM10.968,3.173c0.618,0.282 1.112,0.676 1.481,1.18c0.37,0.505 0.555,1.058 0.555,1.657l-8.015,0c0,-0.599 0.185,-1.152 0.554,-1.657c0.37,-0.504 0.867,-0.898 1.491,-1.18l-0.615,-1.007c-0.041,-0.067 -0.026,-0.118 0.043,-0.154c0.075,-0.03 0.133,-0.015 0.173,0.046l0.624,1.015c0.549,-0.215 1.129,-0.323 1.742,-0.323c0.612,0 1.193,0.108 1.741,0.323l0.624,-1.015c0.041,-0.061 0.098,-0.076 0.174,-0.046c0.069,0.036 0.083,0.087 0.043,0.154l-0.615,1.007ZM15.003,7.805l0,3.392c0,0.226 -0.049,0.418 -0.146,0.576c-0.098,0.158 -0.217,0.236 -0.356,0.236c-0.137,0 -0.254,-0.078 -0.351,-0.236c-0.098,-0.158 -0.146,-0.35 -0.146,-0.576l0,-3.392c0,-0.226 0.048,-0.417 0.146,-0.572c0.097,-0.155 0.214,-0.233 0.351,-0.233c0.139,0 0.258,0.078 0.356,0.233c0.097,0.155 0.146,0.346 0.146,0.572Z" />
		</Svg>
	);
});

AndroidIcon.displayName = 'AndroidIcon';

AndroidIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default AndroidIcon;
