import React, {forwardRef} from 'react';
import {withTheme} from 'styled-components';

import {getSpacing} from '../utils/spacing';

import iconMap from './iconMap';

const sizeMap = {
	unscaled: 0,
	default: 1,
	medium: 1.5,
	big: 3,
	huge: 6,
};

function Icon(props, ref) {
	const {
		name,
		scale,
		size,
		spacingLeft,
		spacingRight,
		theme,
		...otherProps
	} = props;

	const Glyph = iconMap[name] || iconMap.x;

	return (
		<Glyph
			ref={ref}
			scale={scale || sizeMap[size]}
			spacingLeft={getSpacing(spacingLeft, theme)}
			spacingRight={getSpacing(spacingRight, theme)}
			{...otherProps}
		/>
	);
}

export default withTheme(forwardRef(Icon));;
