import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const OfflineIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden = !(otherProps['aria-label'] || otherProps['aria-labelledby']) || undefined;

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
			<path d="M12.907,12.884l-0.014,0.004l1.939,1.939c0.195,0.195 0.195,0.511 0,0.705c0,0.001 -0.001,0.001 -0.001,0.002c-0.195,0.195 -0.511,0.195 -0.706,0l-2.534,-2.534l-6.591,0c-1.399,0 -3.005,-1.14 -3.005,-2.485c0,-1.345 1.134,-2.434 2.533,-2.434c0.101,0 0.201,0.007 0.3,0.019c-0.026,-0.171 -0.04,-0.345 -0.04,-0.521c0,-0.411 0.072,-0.806 0.209,-1.173l-1.987,-1.987c-0.094,-0.094 -0.147,-0.221 -0.147,-0.354c0,-0.132 0.053,-0.259 0.147,-0.353c0,0 0,-0.001 0.001,-0.001c0.194,-0.195 0.51,-0.195 0.705,0l1.777,1.777l0.008,-0.009l7.406,7.405Zm-6.697,-8.111c0.628,-0.485 1.43,-0.773 2.302,-0.773c1.685,0 3.107,1.076 3.566,2.553c0.185,-0.031 0.374,-0.048 0.566,-0.048c1.851,0 3.351,1.443 3.351,3.223c0,1.159 -0.909,2.196 -2.056,2.774l-7.729,-7.729Z" />
		</Svg>
	);
});

OfflineIcon.displayName = 'OfflineIcon';

OfflineIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default OfflineIcon;
