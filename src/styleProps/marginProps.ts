import {getSpacing, createStyleFunction} from '../utils';

export const marginPropsDef = [
	{
		styleProp: 'm',
		properties: ['margin'],
		getValue: getSpacing,
	},
	{
		styleProp: 'mt',
		properties: ['marginTop'],
		getValue: getSpacing,
	},
	{
		styleProp: 'mr',
		properties: ['marginRight'],
		getValue: getSpacing,
	},
	{
		styleProp: 'mb',
		properties: ['marginBottom'],
		getValue: getSpacing,
	},
	{
		styleProp: 'ml',
		properties: ['marginLeft'],
		getValue: getSpacing,
	},
	{
		styleProp: 'mx',
		properties: ['marginLeft', 'marginRight'],
		getValue: getSpacing,
	},
	{
		styleProp: 'my',
		properties: ['marginTop', 'marginBottom'],
		getValue: getSpacing,
	},
];

export default createStyleFunction(marginPropsDef);
