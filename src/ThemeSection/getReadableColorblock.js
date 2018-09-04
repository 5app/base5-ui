import {contrast} from '../utils/colors';

function getReadableColorblock(theme, colorBlockName, hasBgImage) {
	if (!colorBlockName || !theme.colorBlocks[colorBlockName]) {
		return {};
	}

	const readableColor = hasBgImage ? 'white' : contrast(theme.colorBlocks[colorBlockName]);

	return {
		text: readableColor,
		links: readableColor,
		background: theme.colorBlocks[colorBlockName]
	};
}

export default getReadableColorblock;
