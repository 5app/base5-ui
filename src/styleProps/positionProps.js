import {getSpacing} from '../utils/spacing';
import {checkTheme} from '../utils/theme';

function positionProps(props) {
	const {pos, position, top, left, bottom, right, z, theme} = props;

	checkTheme(theme);

	return {
		position: pos || position || undefined,

		top: top ? getSpacing(top, theme) : undefined,
		left: left ? getSpacing(left, theme) : undefined,
		bottom: bottom ? getSpacing(bottom, theme) : undefined,
		right: right ? getSpacing(right, theme) : undefined,

		zIndex: (theme.globals.z && theme.globals.z[z]) || z || undefined,
	};
}

export default positionProps;
