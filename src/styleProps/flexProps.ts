import {createStyleFunction} from '../utils/styleProps';
import {getLength} from '../utils';

export const alignMap = {
	top: 'flex-start',
	left: 'flex-start',
	center: 'center',
	bottom: 'flex-end',
	right: 'flex-end',
};

export const baseFlexRules = {
	/* Reset flex to */
	flex: 'none',
	/* Prevent overflowing content from expanding flex items */
	minWidth: 0,
};

export const flexPropsDef = [
	{
		styleProp: 'flexWrap',
		getValue: <Type>(value: Type): Type => value,
	},
	{
		styleProp: 'wrapItems',
		properties: ['flexWrap'],
		getValue: (value: boolean): string => (value ? 'wrap' : 'nowrap'),
	},
	{
		styleProp: 'basis',
		properties: ['flexBasis'],
		getValue: getLength,
	},
	{
		styleProp: 'grow',
		properties: ['flexGrow'],
		getValue: (value: string): number => Number(value),
	},
	{
		styleProp: 'shrink',
		properties: ['flexShrink'],
		getValue: (value: string): number => Number(value),
	},
	{
		styleProp: 'flexAlign',
		properties: ['alignSelf'],
		getValue: (value: string): string => alignMap[value] || value,
	},
	{
		styleProp: 'alignItems',
		getValue: (value: string): string => alignMap[value] || value,
	},
	{
		styleProp: 'justifyContent',
		getValue: (value: string): string => value,
	},
	{
		styleProp: 'flexDirection',
		getValue: (value: string): string => value,
	},
	{
		styleProp: 'stackItems',
		properties: ['flexDirection'],
		getValue: (value: boolean): string => (value ? 'column' : 'initial'),
	},
];

const flexProps = createStyleFunction(flexPropsDef, baseFlexRules);

export default flexProps;
