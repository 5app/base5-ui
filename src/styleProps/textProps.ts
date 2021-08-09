import {getDimmedTextColor} from '../utils/colors';
import {createStyleFunction} from '../utils/styleProps';

const textTransformMap = {
	all: 'uppercase',
	first: 'capitalize',
	none: 'none',
};

type TextTransformKey = keyof typeof textTransformMap;

export const textPropsDef = [
	{
		styleProp: 'fontSize',
		properties: ['fontSize'],
		getValue: (size: string, theme: any) =>
			size ? theme.globals.typeScale[size] : undefined,
	},
	{
		styleProp: 'bold',
		properties: ['fontWeight'],
		getValue: (bold: unknown) => (bold ? 'bold' : 'normal'),
	},
	{
		styleProp: 'fontWeight',
		properties: ['fontWeight'],
		getValue: (value: unknown) => value,
	},
	{
		styleProp: 'textAlign',
		properties: ['textAlign'],
		getValue: (value: unknown) => value,
	},
	{
		styleProp: 'lineHeight',
		properties: ['lineHeight'],
		getValue: (value: unknown) => value,
	},
	{
		styleProp: 'caps',
		properties: ['textTransform'],
		getValue: (caps: string): string => textTransformMap[caps as TextTransformKey],
	},
	{
		styleProp: 'dimmed',
		properties: ['color'],
		getValue: (dimmed: unknown, theme: any) =>
			dimmed ? getDimmedTextColor(theme) : theme.text,
	},
];

export default createStyleFunction(textPropsDef);
