import {pxToRem} from './units';

function getLength(length) {
	const lengthAsNumber = Number(length);

	if (!Number.isNaN(lengthAsNumber)) {
		if (lengthAsNumber === 0) {
			return 0;
		}

		return pxToRem(lengthAsNumber);
	}

	return length;
}

export default getLength;
