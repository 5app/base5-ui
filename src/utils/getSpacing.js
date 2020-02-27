import {pxToRem} from './units';

const passThroughValues = ['auto'];

function getSpacing(shortCode, theme) {
	if (shortCode === undefined || shortCode === null || shortCode === false) {
		return shortCode;
	}

	if (
		(typeof shortCode !== 'number' && typeof shortCode !== 'string') ||
		shortCode === '0'
	) {
		return '0';
	}

	if (typeof shortCode === 'number') {
		return pxToRem(shortCode);
	}

	if (passThroughValues.indexOf(shortCode) > -1) {
		return shortCode;
	}

	if (shortCode.charAt(0) === '-') {
		return '-' + theme.globals.spacing[shortCode.substring(1)];
	} else {
		return theme.globals.spacing[shortCode];
	}
}

export default getSpacing;
