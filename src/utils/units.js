const rootFontSize = 16;

function remToPx(rem) {
	const rems = rem.substring(0, rem.length - 3);
	return +rems * rootFontSize;
}

function pxToRelative(px, baseFontSize, unitName) {
	return px ? px / baseFontSize + unitName : undefined;
}

const pxToRem = px => pxToRelative(px, rootFontSize, 'rem');

const pxToEm = (px, base = rootFontSize) => pxToRelative(px, base, 'em');

/**
 * Turns a percentage string, e.g. '57%', into a fraction (0.57)
 *
 * @param {string} percentage - Percentage value ending with '%'
 *
 * @returns {number} Percentage as fraction (0..1)
 */

function percentageToFraction(percentage) {
	if (!percentage || typeof percentage !== 'string') return null;

	return Number(percentage.slice(0, -1)) / 100;
}

export {rootFontSize, remToPx, pxToRem, pxToEm, percentageToFraction};
