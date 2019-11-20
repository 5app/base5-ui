import {alpha} from '../utils/colors';
import {createStyleFunction} from '../utils/styleProps';
import {ellipsis, overflowWrap as wrap} from '../mixins';

const textTransformMap = {
	all: 'uppercase',
	first: 'capitalize',
	none: 'none',
};

const overflowStylesMap = {
	ellipsis,
	wrap,
};

const textProps = createStyleFunction([
	{
		styleProp: 'bold',
		properties: ['fontWeight'],
		getValue: bold => (bold ? 'bold' : 'normal'),
	},
	{
		styleProp: 'fontSize',
		properties: ['fontSize'],
		getValue: (size, theme) =>
			size ? theme.globals.typeScale[size] : undefined,
	},
	{
		styleProp: 'textAlign',
		properties: ['textAlign'],
		getValue: value => value,
	},
	{
		styleProp: 'lineHeight',
		properties: ['lineHeight'],
		getValue: value => value,
	},
	{
		styleProp: 'caps',
		properties: ['textTransform'],
		getValue: caps => textTransformMap[caps],
	},
	{
		styleProp: 'dimmed',
		properties: ['color'],
		getValue: (dimmed, theme) =>
			dimmed ? alpha(theme.text, theme.textDimStrength) : theme.text,
	},
	{
		styleProp: 'overflow',
		getRules: overflow =>
			overflow ? overflowStylesMap[overflow] : undefined,
	},
]);

export default textProps;
