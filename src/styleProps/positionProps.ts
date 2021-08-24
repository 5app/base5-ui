import {CSSObject} from 'styled-components';

import {getSpacing} from '../utils';
import {createStyleFunction} from '../utils/styleProps';
import {fillParent} from '../mixins';
import {LocalThemeSection} from '../theme/types';

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
		getRules: (value: boolean): CSSObject =>
			value ? (fillParent as CSSObject) : undefined,
	},
	{
		styleProp: 'z',
		properties: ['zIndex'],
		getValue: (z, theme: LocalThemeSection): number =>
			theme.globals.z?.[z] || z,
	},
];

export default createStyleFunction(positionPropsDef);
