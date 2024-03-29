import {rootFontSize, pxToEm, pxToRem} from '../utils/units';
import {getBorderColor} from '../utils/colors';

import colors from './colors';

const fontSize = rootFontSize;
const lineHeight = 1.5;
const maxPageWidth = 1200;

const typeScale = {
	xxs: pxToRem(fontSize * 0.75),
	xs: pxToRem(fontSize * 0.875),
	s: pxToRem(fontSize * 0.9375),
	m: pxToRem(fontSize),
	l: pxToRem(fontSize * 1.125),
	xl: pxToRem(fontSize * 1.375),
	xxl: pxToRem(fontSize * 1.625),
};

const spacing = {
	xxxs: pxToRem(2),
	xxs: pxToRem(4),
	xs: pxToRem(8),
	s: pxToRem(14),
	m: pxToRem(20),
	l: pxToRem(26),
	xl: pxToRem(32),
	xxl: pxToRem(42),
};

const breakpoints = {
	base: 0,
	xxxs: pxToEm(360, 16),
	xxs: pxToEm(600, 16),
	xs: pxToEm(760, 16),
	s: pxToEm(900, 16),
	m: pxToEm(1060, 16),
	l: pxToEm(1200, 16),
	xl: pxToEm(1400, 16),
	xxl: pxToEm(1800, 16),
	xxxl: pxToEm(2300, 16),
};

const z = {
	below: -1,
	flat: 0,
	raised: 10,
	dropdowns: 30,
	navbars: 40,
	modals: 50,
	alerts: 60,
	tooltips: 80,
};

const buttons = {
	default: {
		text: colors.blue,
		background: colors.white,
	},
	primary: {
		text: colors.white,
		background: colors.blue,
	},
	important: {
		text: colors.white,
		background: colors.pink,
	},
};

const borderRadius = {
	buttons: 3,
	search: 5,
	small: 5,
	large: 10,
};

const borderStyles = {
	thin: theme => `1px solid ${getBorderColor(theme)}`,
	dashed: theme => `${pxToRem(3)} dashed ${getBorderColor(theme)}`,
};

const shadowStyles = {
	soft: `0 0 ${pxToRem(3)} rgba(0, 0, 0, 0.2)`,
	raised: `0 ${pxToRem(2)} 0 0 rgba(0, 0, 0, 0.15)`,
};

const modalWidths = {
	default: 460,
	wide: 540,
};

const colorBlocks = {
	'alert-success': colors.blue,
	'alert-fail': colors.pink,
	'asset-video': colors.yellow,
	positive: colors.green,
	neutral: colors.yellow,
	negative: colors.red,
};

export default {
	breakpoints,
	fontSize,
	lineHeight,
	maxPageWidth,
	spacing,
	typeScale,
	z,
	borderRadius,
	borderStyles,
	shadowStyles,
	modalWidths,
	colorBlocks,
	buttons,
};
