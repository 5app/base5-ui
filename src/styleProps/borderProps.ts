import {createStyleFunction} from '../utils/styleProps';
import {pxToRem} from '../utils';

function getGlobalThemeValue(key: string) {
	return (value: string, theme?: any): string => {
		const themeValue = theme.globals?.[key]?.[value] || value;

		if (typeof themeValue === 'function') {
			return themeValue(theme);
		}

		if (!isNaN(themeValue)) {
			return pxToRem(themeValue);
		}

		return themeValue;
	};
}

const getBorderValue = getGlobalThemeValue('borderStyles');

export const borderPropsDef = [
	{
		styleProp: 'border',
		getValue: getBorderValue,
	},
	{
		styleProp: 'borderTop',
		getValue: getBorderValue,
	},
	{
		styleProp: 'borderRight',
		getValue: getBorderValue,
	},
	{
		styleProp: 'borderBottom',
		getValue: getBorderValue,
	},
	{
		styleProp: 'borderLeft',
		getValue: getBorderValue,
	},
	{
		styleProp: 'boxShadow',
		getValue: getGlobalThemeValue('shadowStyles'),
	},
	{
		styleProp: 'borderRadius',
		getValue: getGlobalThemeValue('borderRadius'),
	},
];

export default createStyleFunction(borderPropsDef);
