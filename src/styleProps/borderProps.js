import {createStyleFunction} from '../utils/styleProps';
import {pxToRem} from '../utils/units';
import {borderValue} from '../mixins';

function getBorderValue(value, theme) {
	const borderStyles = theme.globals?.borderStyles?.[value];
	if (!borderStyles) {
		return value;
	}
	return borderValue(theme, borderStyles);
}

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
		getValue: (value, theme) =>
			theme.globals?.shadowStyles?.[value] || value,
	},
	{
		styleProp: 'borderRadius',
		getValue: (value, theme) =>
			pxToRem(theme.globals?.borderRadius?.[value]) || value,
	},
];

export default createStyleFunction(borderPropsDef);
