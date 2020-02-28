import {contrast} from '../utils/colors';

function getReadableColorblock(colorBlocks, colorBlockName, hasBgImage) {
	if (!colorBlockName || !colorBlocks[colorBlockName]) {
		return undefined;
	}

	const readableColor = hasBgImage
		? 'white'
		: contrast(colorBlocks[colorBlockName]);

	return {
		text: readableColor,
		links: readableColor,
		background: colorBlocks[colorBlockName],
	};
}

export default getReadableColorblock;
