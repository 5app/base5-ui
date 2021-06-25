const rootFontSize = 16;

function remToPx(rem: string): number {
	const rems = rem.substring(0, rem.length - 3);
	return +rems * rootFontSize;
}

function pxToRelative(px: number, baseFontSize: number, unitName: string): string | undefined {
	if (px === 0) return '0';
	if (!px) return undefined;
	return px / baseFontSize + unitName;
}

function pxToRem(px: number): string | undefined {
	return pxToRelative(px, rootFontSize, 'rem');
}

function pxToEm(px: number, base = rootFontSize): string | undefined {
	return pxToRelative(px, base, 'em');
}

function limitDecimals(n: number): number {
	return Math.round(n * 10000) / 10000;
}

function fractionToPercent(fraction: number): string | undefined {
	if (fraction === 0) {
		return '0';
	}
	if (!fraction) {
		return undefined;
	}
	return `${limitDecimals(fraction * 100)}%`;
}

export {rootFontSize, remToPx, pxToRem, pxToEm, fractionToPercent};
