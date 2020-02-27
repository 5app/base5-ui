import {pxToRem, fractionToPercent} from './units';

/**
 * Turns a number or string into a CSS length value.
 * Numbers larger than 1 will be interpreted as pixels and converted to the 'rem' unit
 * Fractions (numbers equal to or smaller than 1, e.g. `1/3`) will be converted to percentages
 * Strings without a unit (that can be converted to a number) will be treated like numbers
 * Other strings, e.g. those with a unit ('50%') will be passed through unchanged
 *
 * @param {number|string} inputLength - Value to be converted to a CSS length
 * @returns {string|number} - CSS length
 */

function getLength(inputLength) {
	const length = Number(inputLength);

	if (!Number.isNaN(length)) {
		if (length <= 1) {
			return fractionToPercent(length);
		}

		return pxToRem(length);
	}

	return inputLength;
}

export default getLength;
