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

const Icon = ({name, scale, size, spacingLeft, spacingRight, ...otherProps}) => {
	const Glyph = iconMap[name] || iconMap.x;

	return (
		<Glyph
			scale={scale || sizeMap[size]}
			spacingLeft={getSpacing(spacingLeft)}
			spacingRight={getSpacing(spacingRight)}
			{...otherProps}
		/>
	);
};

export default Icon;
