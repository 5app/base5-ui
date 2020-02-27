import {pxToRem} from './units';

function getLength(length) {
	if (typeof shortCode === 'number') {
		return pxToRem(length);
	}

	return length;
}

export default getLength;
