import {alpha} from '../utils/colors';
import {checkTheme} from '../utils/theme';

const borderKeys = {
	top: 'borderTop',
	left: 'borderLeft',
	bottom: 'borderBottom',
	right: 'borderRight',
};

function borderProps(props) {
	const {border, theme} = props;

	checkTheme(theme);

	if (!borderKeys[border]) {
		return null;
	}

	return {
		[borderKeys[border]]: `1px solid ${alpha(
			theme.shade,
			theme.lineStrength
		)}`,
	};
}

export default borderProps;
