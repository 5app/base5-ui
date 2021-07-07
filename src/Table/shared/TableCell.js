import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {pxToRem, getSpacing} from '../../utils';
import {overflowWrap} from '../../mixins';

import {withTableContext, tableContextPropFilter} from './TableContext';

function getBreakpoint(key) {
	return p => p.theme.globals.breakpoints[p[key]];
}

export const tableCellBaseStyles = css`
	font-weight: inherit;
	text-align: left;
	height: ${p => pxToRem(p.rowMinHeight)};
	padding: ${p => p.theme.globals.spacing.xxs}
		${p => p.theme.globals.spacing.s};
	padding-right: 0;

	${overflowWrap}

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

const TableCell = styled('td').withConfig({
	shouldForwardProp: tableContextPropFilter,
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
		&::before {
			content: attr(data-columnheader) ': ';
			margin-right: ${p => p.theme.globals.spacing.xs};
			font-weight: normal;
			white-space: nowrap;
		}
	}
`;

TableCell.propTypes = {
	hideBelowBreakpoint: PropTypes.string,
};

export default withTableContext(TableCell);
