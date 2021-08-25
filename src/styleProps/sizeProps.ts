import {getLength, createStyleFunction} from '../utils';

export const sizePropsDef = [
	{
		styleProp: 'width',
		getValue: getLength,
	},
	{
		styleProp: 'maxWidth',
		getValue: getLength,
	},
	{
		styleProp: 'minWidth',
		getValue: getLength,
	},
	{
		styleProp: 'height',
		getValue: getLength,
	},
	{
		styleProp: 'maxHeight',
		getValue: getLength,
	},
	{
		styleProp: 'minHeight',
		getValue: getLength,
	},
];

export default createStyleFunction(sizePropsDef);
