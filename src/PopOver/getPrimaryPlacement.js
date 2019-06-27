/* Given a popper.js placement string, this function
 * returns the primary direction of the tooltip, ie
 * the first part of the string.
 *
 * Example:
 * getPrimaryPlacement('bottom-start') // returns 'bottom'
 * getPrimaryPlacement('left-end') // returns 'left'
 */

function getPrimaryPlacement(placement) {
	if (placement.indexOf('-') > -1) {
		const primaryPlacement = placement.split('-')[0];
		return primaryPlacement;
	} else {
		return placement;
	}
}

export default getPrimaryPlacement;
