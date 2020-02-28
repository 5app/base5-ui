import {createStyleFunction} from '../utils/styleProps';
import {ellipsis, overflowWrap as wrap} from '../mixins';

const supportedDisplayValues = ['block', 'inline', 'inline-block', 'flex'];

const overflowStylesMap = {
	ellipsis,
	wrap,
	hidden: {
		overflow: 'hidden',
	},
	auto: {
		overflow: 'auto',
	},
};

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
	{
		styleProp: 'overflow',
		getRules: overflow =>
			overflow ? overflowStylesMap[overflow] : undefined,
	},
]);

export default displayProps;
