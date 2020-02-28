import {createStyleFunction} from '../utils/styleProps';
import {getSolidBackgroundShade, getColorBlock} from '../utils/colors';

function getBackgroundColour(background, theme) {
	if (background === 'shaded') {
		return getSolidBackgroundShade(theme);
	}
	return getColorBlock(background, theme);
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
		getValue: (value, theme) => getColorBlock(value, theme),
	},
];

export default createStyleFunction(themePropsDef);
