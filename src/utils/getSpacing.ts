import {pxToRem} from './units';
import {LocalThemeSection} from '../theme/types';

const PASS_THROUGH_VALUES = ['auto'];

function getSpacing(
	shortCode: unknown,
	theme: LocalThemeSection
): string | number | false | undefined {
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

	if (PASS_THROUGH_VALUES.indexOf(shortCode) > -1) {
		return shortCode;
	}

	if (shortCode.charAt(0) === '-') {
		return '-' + theme.globals.spacing[shortCode.substring(1)];
	} else {
		return theme.globals.spacing[shortCode];
	}
}

export default getSpacing;
