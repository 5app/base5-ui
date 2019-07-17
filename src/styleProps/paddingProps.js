import {getSpacing} from '../utils/spacing';
import {checkTheme} from '../utils/theme';

function paddingProps(props) {
	const {p, px, py, pt, pr, pb, pl, theme} = props;

	checkTheme(theme);

	return {
		padding: p ? getSpacing(p, theme) : undefined,
		paddingTop: py
			? getSpacing(py, theme)
			: pt
			? getSpacing(pt, theme)
			: undefined,
		paddingRight: px
			? getSpacing(px, theme)
			: pr
			? getSpacing(pr, theme)
			: undefined,
		paddingBottom: py
			? getSpacing(py, theme)
			: pb
			? getSpacing(pb, theme)
			: undefined,
		paddingLeft: px
			? getSpacing(px, theme)
			: pl
			? getSpacing(pl, theme)
			: undefined,
	};
}

export default paddingProps;
