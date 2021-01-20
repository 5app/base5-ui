/**
 * Finds a location in a nested "history stack" array,
 * and returns its indexes as a tuple ([x, y])
 *
 * @param {object} location - location object
 * @param {string} location.id - unique identifier of the stored location
 * @param {Array[]} historyStack - nested array, containing location objects
 *
 * @returns {Array|null} - A tuple [x, y] of the location's index in the array
 * if found, or null if not found.
 * If found, the location can be accessed at historyStack[x][y].
 */

function findInHistoryStack(location, historyStack) {
	for (let level = historyStack.length; level >= 0; level--) {
		if (historyStack[level]) {
			for (
				let locIndex = historyStack[level].length;
				locIndex >= 0;
				locIndex--
			) {
				if (historyStack[level][locIndex]) {
					if (historyStack[level][locIndex].id === location.id) {
						return [level, locIndex];
					}
				}
			}
		}
	}
	return null;
}

export default findInHistoryStack;
