import PropTypes from 'prop-types';
import styled from 'styled-components';

import {pxToRem, pxToEm} from '../utils/units';

const iconSize = 18;

function getScaleFromFlipAxis(axis) {
	switch (axis) {
		case 'x':
			return ' scaleX(-1)';
		case 'y':
			return ' scaleY(-1)';
		default:
			return '';
	}
}

function shouldForwardProp(prop) {
	return ![
		'spacingLeft',
		'spacingRight',
		'scale',
		'vAlign',
		'dimmed',
		'rotate',
		'flip',
	].includes(prop);
}

const Svg = styled.svg.withConfig({shouldForwardProp})`
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
	${p =>
		(p.rotate || p.flip) &&
		`
			transform: rotate(${p.rotate || 0}deg)${
			p.flip ? getScaleFromFlipAxis(p.flip) : ''
		};

		transition: transform 0.2s cubic-bezier(0.3, 0.8, 0.46, 1.25);
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
