import {getSpacing} from '../utils/spacing';
import {checkTheme} from '../utils/theme';

function marginProps(props) {
	const {m, mx, my, mt, mr, mb, ml, theme} = props;

	checkTheme(theme);

	return {
		margin: m ? getSpacing(m, theme) : undefined,
		marginTop: my
			? getSpacing(my, theme)
			: mt
			? getSpacing(mt, theme)
			: undefined,
		marginRight: mx
			? getSpacing(mx, theme)
			: mr
			? getSpacing(mr, theme)
			: undefined,
		marginBottom: my
			? getSpacing(my, theme)
			: mb
			? getSpacing(mb, theme)
			: undefined,
		marginLeft: mx
			? getSpacing(mx, theme)
			: ml
			? getSpacing(ml, theme)
			: undefined,
	};
}

export default marginProps;
