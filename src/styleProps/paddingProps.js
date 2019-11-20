import {getSpacing} from '../utils/spacing';
import {createStyleFunction} from '../utils/styleProps';

const paddingProps = createStyleFunction([
	{
		styleProp: 'p',
		properties: ['padding'],
		getValue: getSpacing,
	},
	{
		styleProp: 'pt',
		properties: ['paddingTop'],
		getValue: getSpacing,
	},
	{
		styleProp: 'pr',
		properties: ['paddingRight'],
		getValue: getSpacing,
	},
	{
		styleProp: 'pb',
		properties: ['paddingBottom'],
		getValue: getSpacing,
	},
	{
		styleProp: 'pl',
		properties: ['paddingLeft'],
		getValue: getSpacing,
	},
	{
		styleProp: 'px',
		properties: ['paddingLeft', 'paddingRight'],
		getValue: getSpacing,
	},
	{
		styleProp: 'py',
		properties: ['paddingTop', 'paddingBottom'],
		getValue: getSpacing,
	},
]);

export default paddingProps;
