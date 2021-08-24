import {createStyleFunction} from '../utils/styleProps';
import {ellipsis, overflowWrap as wrap} from '../mixins';

const overflowStylesMap = {
	ellipsis,
	wrap,
};

interface OverflowStyles {
	[property: string]: string;
}

function getOverflowValue(value: string): OverflowStyles {
	if (overflowStylesMap[value]) {
		return overflowStylesMap[value];
	} else if (value) {
		return {
			overflow: value,
		};
	}
}

type SupportedDisplayValues =
	| 'block'
	| 'inline'
	| 'inline-block'
	| 'flex'
	| 'inline-flex'
	| 'none';

export const displayPropsDef = [
	{
		styleProp: 'display',
		getValue: (display: SupportedDisplayValues): string => display,
	},
	{
		styleProp: 'overflow',
		getRules: getOverflowValue,
	},
];

export default createStyleFunction(displayPropsDef);
