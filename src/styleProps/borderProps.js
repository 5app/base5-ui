import {createStyleFunction} from '../utils/styleProps';

function getGlobalThemeValue(key) {
	return (value, theme) => {
		const themeValue = theme.globals?.[key]?.[value] || value;

		if (typeof themeValue === 'function') {
			return themeValue(theme);
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
