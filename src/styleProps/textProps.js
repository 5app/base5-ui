import {alpha} from 'src/utils/colors';

import {ellipsis, overflowWrap} from 'src/mixins';

const textTransformMap = {
	all: 'uppercase',
	first: 'capitalize',
};

const overflowStylesMap = {
	ellipsis,
	wrap: {
		display: 'block',
		...overflowWrap
	},
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

	let alignStyles;
	if (textAlign) {
		alignStyles = {
			display: 'block',
			width: '100%',
			textAlign,
		};
	}

	return {
		...alignStyles,
		fontSize: fontSize ? theme.globals.typeScale[fontSize] : undefined,
		fontWeight: bold ? 'bold' : undefined,
		lineHeight,
		textTransform: caps ? textTransformMap[caps] : undefined,
		color: dimmed ? alpha(theme.text, theme.textDimStrength) : undefined,
		...(overflow ? overflowStylesMap[overflow] : undefined),
	};
}

export default textProps;
