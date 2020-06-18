import {createStyleFunction} from '../utils/styleProps';
import {getSolidBackgroundShade, getColorBlock} from '../utils/colors';

function getBackgroundColour(value, theme) {
	if (value === 'shaded') {
		return getSolidBackgroundShade(theme);
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
