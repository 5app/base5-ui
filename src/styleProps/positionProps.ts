import {getSpacing} from '../utils';
import {createStyleFunction} from '../utils/styleProps';
import {fillParent} from '../mixins';

export const positionPropsDef = [
	{
		styleProp: 'position',
		getValue: (value: string): string => value,
	},
	{
		styleProp: 'pos',
		properties: ['position'],
		getValue: (value: string): string => value,
	},
	{
		styleProp: 'top',
		getValue: getSpacing,
	},
	{
		styleProp: 'left',
		getValue: getSpacing,
	},
	{
		styleProp: 'bottom',
		getValue: getSpacing,
	},
	{
		styleProp: 'right',
		getValue: getSpacing,
	},
	{
		styleProp: 'fillParent',
		getRules: (value: string): typeof fillParent | boolean => (value ? fillParent : false),
	},
	{
		styleProp: 'z',
		properties: ['zIndex'],
		getValue: (z: string, theme): string => theme.globals?.z?.[z] || z,
	},
];

export default createStyleFunction(positionPropsDef);
