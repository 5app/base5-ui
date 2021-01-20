/**
 * @typedef {object} backlinks
 * @property {object|string} backLink
 * @property {object|string} backUpLink
 */

/**
 * Returns two types of back links from the current history stack.
 * 1. backLink: The previous user location at the current
 * hierarchy level, or the previous location at the nearest hierarchy level
 * 2. backUpLink: The previus user location at the nearest hierarchy level
 *
 * @param {Array[]} historyStack - nested array, containing location objects
 *
 * @returns {backlinks}
 */

function getBackLinks(historyStack) {
	const hasHistory = historyStack.length > 1 || historyStack[0]?.length > 1;
	// The previous page on the current history level
	let backLink;
	// The last page on the previous history level
	let backUpLink;

	if (hasHistory) {
		// We're looking for the "back up" link first.
		// There can be gaps between levels in the history stack,
		// so we need to filter those out first
		const gaplessHistory = historyStack.filter(Boolean);
		const secondToLastLevel = gaplessHistory[gaplessHistory.length - 2];
		if (secondToLastLevel) {
			backUpLink =
				secondToLastLevel[secondToLastLevel.length - 1]?.location;
		}

		const lastLevel = historyStack[historyStack.length - 1];
		backLink = lastLevel[lastLevel.length - 2]?.location || backUpLink;
	}

	return {backLink, backUpLink};
}

export default getBackLinks;
