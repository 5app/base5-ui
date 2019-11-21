import PropTypes from 'prop-types';
import styled from 'styled-components';

import {pxToRem, pxToEm} from '../utils/units';

const iconSize = 18;

const Svg = styled.svg.attrs({
	role: 'presentation',
})`
	display: inline-block;
	vertical-align: middle;

	flex: 0 0 auto;
	/* Using ems makes the icon scale along with the surrounding font size */
	width: 1em;
	height: 1em;

	${p =>
		p.spacingLeft &&
		`
			margin-left: ${p.spacingLeft};
		`}
	${p =>
		p.spacingRight &&
		`
			margin-right: ${p.spacingRight};
		`}

	font-size: ${p =>
		p.scale !== 0 ? pxToEm(iconSize * p.scale) : pxToRem(iconSize)};

	${p =>
		p.vAlign &&
		`
			/* Use to align icons with surrounding body text */
			position: relative;
			top: -0.12em;
		`}

	${p =>
		p.dimmed &&
		`
			opacity: ${p.theme.textDimStrength};
		`}
`;

Svg.defaultProps = {
	scale: 1,
};

Svg.propTypes = {
	dimmed: PropTypes.bool,
	scale: PropTypes.number,
	vAlign: PropTypes.bool,
	spacingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	spacingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default Svg;
