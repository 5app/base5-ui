import {createStyleFunction} from '../utils/styleProps';
import {getSolidBackgroundShade, getColorBlock} from '../utils/colors';

function getBackgroundColour(background, theme) {
	if (background === 'shaded') {
		return getSolidBackgroundShade(theme);
	}
	return getColorBlock(background, theme);
}

const themeProps = createStyleFunction([
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
]);

export default themeProps;
