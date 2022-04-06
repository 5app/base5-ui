import {createStyleFunction} from '../utils/styleProps';
import {
	getColorBlock,
	getSolidBackgroundShade,
	getBackgroundShade,
	getBorderColor,
	getDimmedTextColor,
} from '../utils/colors';
import {LocalThemeSection} from '../theme/types';

function getBackgroundColour(value: string, theme: LocalThemeSection): string {
	if (value === 'shaded') {
		return getSolidBackgroundShade(theme);
	}
	if (value === 'transparently-shaded') {
		return getBackgroundShade(theme);
	}
	if (value === 'border') {
		return getBorderColor(theme);
	}
	if (value === 'dimmed') {
		return getDimmedTextColor(theme);
	}
	return getColorBlock(value, theme);
}

export const themePropsDef = [
	{
		styleProp: 'backgroundColor',
		getValue: getBackgroundColour,
	},
	{
		styleProp: 'background',
		getValue: getBackgroundColour,
	},
	{
		styleProp: 'color',
		getValue: getColorBlock,
	},
];

export default createStyleFunction(themePropsDef);
