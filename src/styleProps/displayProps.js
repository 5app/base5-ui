import {createStyleFunction} from '../utils/styleProps';
import {ellipsis, overflowWrap as wrap} from '../mixins';

const supportedDisplayValues = [
	'block',
	'inline',
	'inline-block',
	'flex',
	'inline-flex',
	'none',
];

const overflowStylesMap = {
	ellipsis,
	wrap,
};

function getOverflowValue(value) {
	if (overflowStylesMap[value]) {
		return overflowStylesMap[value];
	} else if (value) {
		return {
			overflow: value,
		};
	}
}

export const displayPropsDef = [
	{
		styleProp: 'display',
		getValue: display =>
			supportedDisplayValues.includes(display)
				? display
				: console.warn(
						`Only ${supportedDisplayValues.join(
							', '
						)} are supported for
			the 'display' styling prop. Please use custom CSS
			for more complex styling.`
				  ),
	},
	{
		styleProp: 'overflow',
		getRules: getOverflowValue,
	},
];

export default createStyleFunction(displayPropsDef);
