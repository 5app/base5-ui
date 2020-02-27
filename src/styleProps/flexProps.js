import {createStyleFunction} from '../utils/styleProps';
import {getLength} from '../utils';

export const alignMap = {
	top: 'flex-start',
	left: 'flex-start',
	center: 'center',
	bottom: 'flex-end',
	right: 'flex-end',
};

const baseRules = {
	/* Reset flex to */
	flex: 'none',
	/* Prevent overflowing content from expanding flex items */
	minWidth: 0,
};

const flexProps = createStyleFunction(
	[
		{
			styleProp: 'flexWrap',
			getValue: value => (value ? 'wrap' : 'nowrap'),
		},
		{
			styleProp: 'basis',
			properties: ['flexBasis'],
			getValue: getLength,
		},
		{
			styleProp: 'grow',
			properties: ['flexGrow'],
			getValue: value => Number(value),
		},
		{
			styleProp: 'shrink',
			properties: ['flexShrink'],
			getValue: value => Number(value),
		},
		{
			styleProp: 'flexAlign',
			properties: ['alignSelf'],
			getValue: value => alignMap[value] || value,
		},
		{
			styleProp: 'alignItems',
			getValue: value => alignMap[value] || value,
		},
		{
			styleProp: 'flexDirection',
			getValue: value => value,
		},
		{
			styleProp: 'dirColumn',
			properties: ['flexDirection'],
			getValue: value => (value ? 'column' : 'initial'),
		},
	],
	baseRules
);

export default flexProps;
