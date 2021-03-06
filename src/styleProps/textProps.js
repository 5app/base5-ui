import {getDimmedTextColor} from '../utils/colors';
import {createStyleFunction} from '../utils/styleProps';

const textTransformMap = {
	all: 'uppercase',
	first: 'capitalize',
	none: 'none',
};

export const textPropsDef = [
	{
		styleProp: 'bold',
		properties: ['fontWeight'],
		getValue: bold => (bold ? 'bold' : 'normal'),
	},
	{
		styleProp: 'fontSize',
		properties: ['fontSize'],
		getValue: (size, theme) =>
			size ? theme.globals.typeScale[size] : undefined,
	},
	{
		styleProp: 'textAlign',
		properties: ['textAlign'],
		getValue: value => value,
	},
	{
		styleProp: 'lineHeight',
		properties: ['lineHeight'],
		getValue: value => value,
	},
	{
		styleProp: 'caps',
		properties: ['textTransform'],
		getValue: caps => textTransformMap[caps],
	},
	{
		styleProp: 'dimmed',
		properties: ['color'],
		getValue: (dimmed, theme) =>
			dimmed ? getDimmedTextColor(theme) : theme.text,
	},
];

export default createStyleFunction(textPropsDef);
