import {LocalThemeSection, ThemeGlobals} from '../theme/types';

type GlobalFieldName = keyof ThemeGlobals;

function getGlobalThemeValue(
	field: GlobalFieldName,
	propValue: unknown | unknown[]
) {
	return (theme: LocalThemeSection): unknown => {
		const getFieldValue = value => theme.globals?.[field]?.[value] || value;

		if (Array.isArray(propValue)) {
			return propValue.map(getFieldValue);
		} else {
			return getFieldValue(propValue);
		}
	};
}

export default getGlobalThemeValue;
