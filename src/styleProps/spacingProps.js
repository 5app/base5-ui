import {getSpacing} from '../utils/spacing';

function spacingProps(props) {
	const {
		p,
		px, py,
		pt, pr, pb, pl,
		m,
		mx, my,
		mt, mr, mb, ml,
		theme,
	} = props;

	return {
		padding: p ? getSpacing(p, theme) : undefined,
		paddingTop: py ? getSpacing(py, theme) : pt ? getSpacing(pt, theme) : undefined,
		paddingRight: px ? getSpacing(px, theme) : pr ? getSpacing(pr, theme) : undefined,
		paddingBottom: py ? getSpacing(py, theme) : pb ? getSpacing(pb, theme) : undefined,
		paddingLeft: px ? getSpacing(px, theme) : pl ? getSpacing(pl, theme) : undefined,
		margin: m ? getSpacing(m, theme) : undefined,
		marginTop: my ? getSpacing(my, theme) : mt ? getSpacing(mt, theme) : undefined,
		marginRight: mx ? getSpacing(mx, theme) : mr ? getSpacing(mr, theme) : undefined,
		marginBottom: my ? getSpacing(my, theme) : mb ? getSpacing(mb, theme) : undefined,
		marginLeft: mx ? getSpacing(mx, theme) : ml ? getSpacing(ml, theme) : undefined,
	};
}

export default spacingProps;
