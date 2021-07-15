import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {alpha} from '../../utils';
import {borderValue} from '../../mixins';

import {
	getBreakpoint,
	headerBackgroundColor,
	getCheckboxColumnWidth,
} from '../utils';

import {withTableContext} from './TableContext';
import {tableCellBaseStyles, tableCellPropFilter} from './TableCell';

const Th = withTableContext(styled.th.withConfig({
	shouldForwardProp: tableCellPropFilter,
})`
	${tableCellBaseStyles}

	@media (max-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		/* Make sure to display the header at the top */
		order: -1;

		/* Flex to vertically align content in cell */
		display: flex;
		align-items: center;
		font-weight: bold;

		/* Visually, this margin is added to the top padding 
		* of the content area */
		margin-bottom: ${p => p.theme.globals.spacing.xs};

		border-bottom: ${p => borderValue(p.theme)};
		${headerBackgroundColor}

		tr[data-selectable] & {
			padding-left: ${getCheckboxColumnWidth};
		}

		/* Highlight SELECTABLE table rows */
		tr[data-selectable][data-highlighted] &,
		tr[data-selectable][data-highlighted]:focus-within & {
			background-color: ${p =>
				alpha(
					p.theme.links,
					Math.max(0.05, +p.theme.shadeStrength / 2)
				)};
		}

		tr[data-selectable][aria-selected='true'] &,
		tr[data-selectable][aria-selected='true'][data-highlighted] & {
			background-color: ${p =>
				alpha(p.theme.links, Math.max(0.15, +p.theme.shadeStrength))};
		}
	}
`);

const TableRowHeader = forwardRef((props, ref) => {
	return <Th {...props} ref={ref} as="th" role="rowheader" scope="row" />;
});

TableRowHeader.displayName = 'TableRowHeader';

TableRowHeader.propTypes = {
	hideBelowBreakpoint: PropTypes.string,
};

export default TableRowHeader;
