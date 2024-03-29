import React, {forwardRef} from 'react';

import Svg from './BaseSvg';
import { SVGRProps } from './util';

const TimeIcon = forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
			<path d="M7.17,7.009c-0.326,0.2 0.871,3.087 1.163,3.557c0.254,0.414 0.795,0.54 1.206,0.287c0.413,-0.257 0.542,-0.797 0.287,-1.208c-0.288,-0.472 -2.332,-2.837 -2.656,-2.636Zm-0.244,-3.16c0.675,-0.235 1.399,-0.365 2.153,-0.365c0.755,0 1.478,0.13 2.153,0.365c0.24,0.083 0.557,-0.084 0.416,-0.445c-0.102,-0.262 -0.201,-0.518 -0.241,-0.622c-0.095,-0.247 -0.437,-0.45 -0.585,-0.484c-0.562,-0.126 -1.144,-0.197 -1.743,-0.197c-0.599,0 -1.181,0.071 -1.743,0.197c-0.149,0.034 -0.489,0.237 -0.585,0.484c-0.04,0.104 -0.139,0.36 -0.241,0.622c-0.141,0.361 0.177,0.529 0.416,0.445Zm8.773,0.57c-0.139,-0.167 -0.288,-0.331 -0.446,-0.489c-0.157,-0.158 -0.321,-0.305 -0.487,-0.446c-0.112,-0.094 -0.439,-0.17 -0.646,0.037c-0.207,0.208 -1.2,1.199 -1.2,1.199c0.293,0.209 0.577,0.44 0.841,0.703c0.263,0.262 0.492,0.547 0.703,0.84c0,0 0.992,-0.991 1.198,-1.198c0.208,-0.208 0.132,-0.535 0.037,-0.646Zm-6.62,-0.208c-3.256,0 -5.895,2.639 -5.895,5.894c0,3.257 2.639,5.895 5.895,5.895c3.255,0 5.894,-2.638 5.894,-5.895c0,-3.255 -2.639,-5.894 -5.894,-5.894Zm0,10.334c-2.451,0 -4.439,-1.988 -4.439,-4.439c0,-2.452 1.988,-4.439 4.439,-4.439c2.452,0 4.44,1.987 4.44,4.439c0,2.451 -1.988,4.439 -4.44,4.439Z" />
		</Svg>
	);
});

TimeIcon.displayName = 'TimeIcon';

TimeIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default TimeIcon;
