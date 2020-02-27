import {createStyleFunction} from '../utils/styleProps';
import {getLength} from '../utils';

const sizeProps = createStyleFunction([
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
]);

export default sizeProps;
