const rootFontSize = 16;

function remToPx(rem) {
	const rems = rem.substring(0, rem.length - 3);
	return +rems * rootFontSize;
}

function pxToRelative(px, baseFontSize, unitName) {
	if (px === 0) return '0';
	if (!px) return undefined;
	return px / baseFontSize + unitName;
}

function pxToRem(px) {
	return pxToRelative(px, rootFontSize, 'rem');
}

function pxToEm(px, base = rootFontSize) {
	return pxToRelative(px, base, 'em');
}

function limitDecimals(n) {
	return Math.round(n * 10000) / 10000;
}

function fractionToPercent(fraction) {
	if (fraction === 0) {
		return '0';
	}
	if (!fraction) {
		return undefined;
	}
	return `${limitDecimals(fraction * 100)}%`;
}

export {rootFontSize, remToPx, pxToRem, pxToEm, fractionToPercent};
