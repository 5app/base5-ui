import React from 'react';

import {getSpacing} from '../utils/spacing';

import iconMap from './iconMap';

const sizeMap = {
	unscaled: 0,
	default: 1,
	medium: 1.5,
	big: 3,
	huge: 6,
};

const Icon = React.forwardRef((props, ref) => {
	const {
		name,
		scale,
		size,
		spacingLeft,
		spacingRight,
		...otherProps
	} = props;

	const Glyph = iconMap[name] || iconMap.x;

	return (
		<Glyph
			ref={ref}
			scale={scale || sizeMap[size]}
			spacingLeft={getSpacing(spacingLeft)}
			spacingRight={getSpacing(spacingRight)}
			{...otherProps}
		/>
	);
});

Icon.displayName = 'Icon';


export default Icon;
