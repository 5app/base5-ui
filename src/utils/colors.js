import {
	mix as color2kMix,
	darken,
	lighten,
	transparentize,
	parseToRgba,
	getLuminance,
	getScale,
} from 'color2k';

const isValidColor = color => {
	try {
		parseToRgba(color);
	} catch {
		return false;
	}
	return true;
};

const alpha = (color, amount) => transparentize(color, 1 - amount);

const mix = color => (baseColor, amount) =>
	color2kMix(baseColor, color, amount);

const isDark = color => getLuminance(color) < 0.43;
const isLight = color => !isDark(color);

// Return a contrasting text color for a given background colour

const contrast = (
	color,
	darkColor = 'rgba(0, 0, 0, 0.8)',
	lightColor = 'white'
) => (isDark(color) ? lightColor : darkColor);

// Make a color a bit lighter or darker,
// depending on whether it is a dark or light color

const highlight = (color, factor = 0.1) =>
	isDark(color) ? lighten(color, factor) : darken(color, factor);

function getColorBlock(color, theme) {
	if (typeof color === 'function') {
		return color(theme);
	}
	return theme[color] || theme.globals?.colorBlocks?.[color] || color;
}

function getBackgroundShade(theme) {
	return alpha(theme.shade, theme.shadeStrength);
}

function getSolidBackgroundShade(theme) {
	return color2kMix(theme.background, theme.shade, theme.shadeStrength);
}

function getBorderColor(theme) {
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
	getColorBlock,
	getBackgroundShade,
	getSolidBackgroundShade,
	getBorderColor,
	getScale,
};
