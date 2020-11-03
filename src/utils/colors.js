import chroma from 'chroma-js';

const isValidColor = color => chroma.valid(color);

const alpha = (color, amount) => chroma(color).alpha(amount).css();

const mix = (color, colorSpace = 'hsl') => (baseColor, amount) =>
	chroma.mix(baseColor, color, amount, colorSpace);

const darken = mix('black', 'rgb');

const lighten = mix('white', 'rgb');

const isDark = color => chroma(color).luminance() < 0.43;
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
	return mix(theme.shade, 'rgb')(theme.background, theme.shadeStrength);
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
};
