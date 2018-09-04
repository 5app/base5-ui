
const rootFontSize = 16;

function remToPx(rem) {
	const rems = rem.substring(0, rem.length - 3);
	return +rems * rootFontSize;
}

function pxToRelative(px, baseFontSize, unitName) {
	return px ? px / baseFontSize + unitName : undefined;
}

const pxToRem = (px) => pxToRelative(px, rootFontSize, 'rem');

const pxToEm = (px, base = rootFontSize) => pxToRelative(px, base, 'em');

export {
	rootFontSize,
	remToPx,
	pxToRem,
	pxToEm,
};
