import {isValidColor, contrast, getColorBlock} from '../utils/colors';

function getReadableColorblock(colorBlock, theme, hasBgImage) {
	if (!colorBlock) {
		return undefined;
	}

	const background = getColorBlock(colorBlock, theme);

	if (!isValidColor(background)) {
		return undefined;
	}

	const contrastingTextColor = hasBgImage ? 'white' : contrast(background);

	return {
		text: contrastingTextColor,
		links: contrastingTextColor,
		background,
	};
}

export default getReadableColorblock;
