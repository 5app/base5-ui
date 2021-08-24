import {
	mix as color2kMix,
	darken,
	lighten,
	transparentize,
	parseToRgba,
	getLuminance,
	getScale,
} from 'color2k';

import {LocalThemeSection} from '../theme/types';

const isValidColor = (color: string): boolean => {
	try {
		parseToRgba(color);
	} catch {
		return false;
	}
	return true;
};

const alpha = (color: string, amount: number): string =>
	transparentize(color, 1 - amount);

const mix =
	(color: string) =>
	(baseColor: string, amount: number): string =>
		color2kMix(baseColor, color, amount);

const isDark = (color: string): boolean => getLuminance(color) < 0.43;
const isLight = (color: string): boolean => !isDark(color);

// Return a contrasting text color for a given background colour

const contrast = (
	color: string,
	darkColor = 'rgba(0, 0, 0, 0.8)',
	lightColor = 'white'
): string => (isDark(color) ? lightColor : darkColor);

// Make a color a bit lighter or darker,
// depending on whether it is a dark or light color

const highlight = (color: string, factor = 0.1): string =>
	isDark(color) ? lighten(color, factor) : darken(color, factor);

function getPalette(
	startColor: string,
	endColor: string,
	length: number
): string[] {
	const scale = getScale(startColor, endColor);

	return Array.from({length}, (x, i) => {
		if (i === 0) return scale(0);
		return scale(i + 1 / (length - 1));
	});
}

function getColorBlock(
	color: string | ((theme: LocalThemeSection) => string),
	theme: LocalThemeSection
): string {
	if (typeof color === 'function') {
		return color(theme);
	}
	return theme[color] || theme.globals?.colorBlocks?.[color] || color;
}

function getDimmedTextColor(theme: LocalThemeSection): string {
	return alpha(theme.text, theme.textDimStrength);
}

function getBackgroundShade(theme: LocalThemeSection): string {
	return alpha(theme.shade, theme.shadeStrength);
}

function getSolidBackgroundShade(theme: LocalThemeSection): string {
	return color2kMix(theme.background, theme.shade, theme.shadeStrength);
}

function getBorderColor(theme: LocalThemeSection): string {
	return alpha(theme.shade, theme.lineStrength);
}

export {
	isValidColor,
	alpha,
	mix,
	darken,
	lighten,
	contrast,
	highlight,
	isDark,
	isLight,
	getPalette,
	getColorBlock,
	getDimmedTextColor,
	getBackgroundShade,
	getSolidBackgroundShade,
	getBorderColor,
	getScale,
};
