import {alpha} from '../utils/colors';
import {checkTheme} from '../utils/theme';
import {ellipsis, overflowWrap as wrap} from '../mixins';

const textTransformMap = {
	all: 'uppercase',
	first: 'capitalize',
};

const overflowStylesMap = {
	ellipsis,
	wrap,
};

function textProps(props) {
	const {
		bold,
		caps,
		dimmed,
		fontSize,
		lineHeight,
		overflow,
		textAlign,

		theme,
	} = props;

	checkTheme(theme);

	return {
		textAlign,
		fontSize: fontSize ? theme.globals.typeScale[fontSize] : undefined,
		fontWeight: bold ? 'bold' : bold === false ? 'normal' : undefined,
		lineHeight,
		textTransform: caps
			? textTransformMap[caps]
			: caps === false
			? 'none'
			: undefined,
		color: dimmed
			? alpha(theme.text, theme.textDimStrength)
			: dimmed === false
			? theme.text
			: undefined,
		...(overflow ? overflowStylesMap[overflow] : undefined),
	};
}

export default textProps;
