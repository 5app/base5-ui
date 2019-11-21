import {createStyleFunction} from '../utils/styleProps';
import {pxToRem} from '../utils/units';

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
			styleProp: 'basis',
			properties: ['flexBasis'],
			getValue: pxToRem,
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
	],
	baseRules
);

export default flexProps;
