import React, {forwardRef} from 'react';
import {withTheme} from 'styled-components';

import {getSpacing} from '../utils';
import {LocalThemeSection} from '../theme/types';

import iconMap from './iconMap';

const sizeMap = {
	unscaled: 0,
	default: 1,
	medium: 1.5,
	big: 3,
	huge: 6,
};

interface CustomIconProps {
	color: string,
	dimmed: boolean,
	flip: string,
	rotate: number,
	vAlign: boolean,

	name: string,
	scale: number,
	size: string,
	spacingLeft: any, // seems this can take a string or a number, not good!
	spacingRight: any,
	theme: LocalThemeSection
}

const Icon = forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => {
	const {name, scale, size, spacingLeft, spacingRight, theme, ...otherProps} =
		props;

	const Glyph = iconMap[name] || iconMap.x;
	const hasScale = scale !== null && scale !== undefined;

	return (
		<Glyph
			ref={ref}
			scale={hasScale ? scale : sizeMap[size]}
			spacingLeft={getSpacing(spacingLeft, theme)}
			spacingRight={getSpacing(spacingRight, theme)}
			{...otherProps}
		/>
	);
});

Icon.displayName = 'Icon';

export default withTheme(Icon);
