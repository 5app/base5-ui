import {alpha, getColorBlock} from '../utils/colors';

const defaultOptions = {strength: '1px', style: 'solid'};

function borderValue(theme, options = defaultOptions) {
	const {strength, style, color} = options;

	return `${strength} ${style} ${
		color
			? getColorBlock(color, theme)
			: alpha(theme.shade, theme.lineStrength)
	}`;
}

export default borderValue;
