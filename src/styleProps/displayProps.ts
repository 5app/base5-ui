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

const overflowStylesMap: {[key: string]: any} = {
	ellipsis,
	wrap,
};

function getOverflowValue(value: string | number) {
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
		getValue: (display: string) =>
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

// unsure what this issue is here. TODO: come back and figure this out
export default createStyleFunction(displayPropsDef);
