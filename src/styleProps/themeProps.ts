import {createStyleFunction} from '../utils/styleProps';
import {
	getColorBlock,
	getSolidBackgroundShade,
	getBackgroundShade,
} from '../utils/colors';

function getBackgroundColour(value: string, theme: any): string {
	if (value === 'shaded') {
		return getSolidBackgroundShade(theme);
	}
	if (value === 'transparently-shaded') {
		return getBackgroundShade(theme);
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
