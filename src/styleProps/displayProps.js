import {createStyleFunction} from '../utils/styleProps';

const supportedDisplayValues = ['block', 'inline', 'inline-block', 'flex'];

const displayProps = createStyleFunction([
	{
		styleProp: 'display',
		getValue: display =>
			supportedDisplayValues.includes(display)
				? display
				: console.warn(
						`Only 'block', 'inline', and 'inline-block' are supported for
			the 'display' styling prop. Please use 'base5-ui/Flex' or custom CSS
			for more complex styling.`
				  ),
	},
]);

export default displayProps;
