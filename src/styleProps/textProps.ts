import {getDimmedTextColor} from '../utils/colors';
import {createStyleFunction} from '../utils/styleProps';
import {LocalThemeSection} from '../theme/types';

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
		getValue: (size: string, theme: LocalThemeSection): string =>
			size ? theme.globals.typeScale[size] : undefined,
	},
	{
		styleProp: 'bold',
		properties: ['fontWeight'],
		getValue: (bold: boolean): string => (bold ? 'bold' : 'normal'),
	},
	{
		styleProp: 'fontWeight',
		properties: ['fontWeight'],
		getValue: (value: string | number): string | number => value,
	},
	{
		styleProp: 'textAlign',
		properties: ['textAlign'],
		getValue: (value: string): string => value,
	},
	{
		styleProp: 'lineHeight',
		properties: ['lineHeight'],
		getValue: (value: string | number): string | number => value,
	},
	{
		styleProp: 'caps',
		properties: ['textTransform'],
		getValue: (caps: string): string =>
			textTransformMap[caps as TextTransformKey],
	},
	{
		styleProp: 'dimmed',
		properties: ['color'],
		getValue: (dimmed: boolean, theme: LocalThemeSection): string =>
			dimmed ? getDimmedTextColor(theme) : theme.text,
	},
];

export default createStyleFunction(textPropsDef);
