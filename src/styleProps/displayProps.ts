import {createStyleFunction} from '../utils/styleProps';
import {ellipsis, overflowWrap as wrap} from '../mixins';

type SupportedDisplayValues =
	| 'block'
	| 'inline'
	| 'inline-block'
	| 'flex'
	| 'inline-flex'
	| 'none'

const overflowStylesMap: {[key: string]: any} = {
	ellipsis,
	wrap,
};

function getOverflowValue(value: string | number): string | {[key: string]: any} {
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
		getValue: (display: SupportedDisplayValues): string => display
	},
	{
		styleProp: 'overflow',
		getRules: getOverflowValue,
	},
];

// unsure what this issue is here. TODO: come back and figure this out
export default createStyleFunction(displayPropsDef);
