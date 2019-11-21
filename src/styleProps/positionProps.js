import {getSpacing} from '../utils/spacing';
import {createStyleFunction} from '../utils/styleProps';

const positionProps = createStyleFunction([
	{
		styleProp: 'position',
		properties: ['position'],
		getValue: value => value,
	},
	{
		styleProp: 'pos',
		properties: ['position'],
		getValue: value => value,
	},
	{
		styleProp: 'top',
		properties: ['top'],
		getValue: getSpacing,
	},
	{
		styleProp: 'left',
		properties: ['left'],
		getValue: getSpacing,
	},
	{
		styleProp: 'bottom',
		properties: ['bottom'],
		getValue: getSpacing,
	},
	{
		styleProp: 'right',
		properties: ['right'],
		getValue: getSpacing,
	},
	{
		styleProp: 'z',
		properties: ['zIndex'],
		getValue: (z, theme) => (theme.globals.z && theme.globals.z[z]) || z,
	},
]);

export default positionProps;
