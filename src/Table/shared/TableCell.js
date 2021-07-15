import styled, {css} from 'styled-components';

import {pxToRem, getSpacing, getLength, getPropFilter} from '../../utils';
import {overflowWrap} from '../../mixins';

import {DEFAULT_LEFT_CELL_PADDING} from '../utils';
import {withTableContext, TABLE_CONTEXT_PROP_NAMES} from './TableContext';

function getBreakpoint(key) {
	return p => p.theme.globals.breakpoints[p[key]];
}

export const tableCellPropFilter = getPropFilter([
	...TABLE_CONTEXT_PROP_NAMES,
	'hideBelowBreakpoint',
	'width',
	'isCheckbox',
]);

export const tableCellBaseStyles = css`
	position: relative;
	font-weight: inherit;
	text-align: left;
	width: ${p => getLength(p.width)};
	height: ${p => pxToRem(p.rowMinHeight)};
	padding: ${p => p.theme.globals.spacing.xxs}
		${p => p.theme.globals.spacing[DEFAULT_LEFT_CELL_PADDING]};
	padding-right: 0;

	${overflowWrap}

	&:focus {
		outline: none;
	}

	&.focus-visible {
		outline: 3px solid ${p => p.theme.links};
		outline-offset: -1px;
	}

	/* Non-mobile view */
	@media (min-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		${p =>
			p.pl &&
			css`
				&:first-child {
					padding-left: ${getSpacing(p.pl, p.theme)};
				}
			`}

		${p =>
			p.pr &&
			css`
				&:last-child {
					padding-right: ${getSpacing(p.pr, p.theme)};
				}
			`}
	}

	${p =>
		p.hideBelowBreakpoint &&
		css`
			/* Hide column in non-mobile view */
			@media (max-width: ${getBreakpoint('hideBelowBreakpoint')}) {
				display: none;
			}
		`}
`;

const TableCell = styled.td.withConfig({
	shouldForwardProp: tableCellPropFilter,
})`
	${tableCellBaseStyles}

	/* Mobile view */
	@media (max-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		display: flex;
		/* Override the previously specified row height */
		height: auto;
		font-weight: bold;

		/* Add columns headers as inline labels
		 * The parent td's display: flex ensures clean
		 * content line breaks */
		${p =>
			p.isCheckbox
				? css`
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						z-index: ${p => p.theme.globals.z.raised};
						/* Visually align checkbox */
						padding-top: ${pxToRem(13)};
				  `
				: css`
						&::before {
							content: attr(data-columnheader) ': ';
							margin-right: ${p => p.theme.globals.spacing.xs};
							font-weight: normal;
							white-space: nowrap;
						}
				  `}
	}
`;

export default withTableContext(TableCell);
