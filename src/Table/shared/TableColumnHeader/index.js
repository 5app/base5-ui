import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {pxToRem} from '../../../utils';
import {borderValue, ie11Hack} from '../../../mixins';
import Text from '../../../Text';
import {
	getColumnName,
	headerBackgroundColor,
	getCheckboxColumnWidth,
} from '../../utils';

import {tableCellBaseStyles, tableCellPropFilter} from '../TableCell';
import {withTableContext} from '../TableContext';

import ClickableHeader from './ClickableHeader';

const ARIA_SORT_LABEL = {
	asc: 'ascending',
	desc: 'descending',
};

export const Wrapper = withTableContext(styled.th.withConfig({
	shouldForwardProp: tableCellPropFilter,
})`
	${tableCellBaseStyles}

	/* For the checkbox header cell, we need to add any
	 * left-hand-side padding to the width, otherwise the
	 * padding would "eat in" to the width. */
	${p =>
		p.isCheckbox &&
		`
		width: ${getCheckboxColumnWidth(p)};
	`}

	position: relative;
	position: sticky;
	top: ${p => pxToRem(p.stickyHeaderOffset) || 0};
	z-index: ${p => p.theme.globals.z.raised};
	color: ${p => p.theme.text};

	/*
	* MS Edge shows glitchy rendering when using a normal
	* border on sticky table headers, so we're using a
	* pseudo-element instead
	*/
	&::after {
		content: '';
		position: absolute;
		/* Compensating for table element's transparent 1px border
		 * which is needed for drawing a border around highlighted rows */
		top: -1px;
		bottom: 0;
		left: -1px;
		right: -1px;
		z-index: ${p => p.theme.globals.z.below};
		border-bottom: ${p => borderValue(p.theme)};
		${headerBackgroundColor}
	}

	/**
	* IE 11 doesn't support position: sticky and doesn't render
	* the pseudo element correctly, so we hide it and apply background
	* colour and border directly to the cell.
	*/
	@media ${ie11Hack} {
		border-bottom: ${p => borderValue(p.theme)};
		${headerBackgroundColor}

		&::after {
			display: none;
		}
	}
`);

function TableColumnHeader({
	children,
	column,
	sort,
	a11yLabels,
	onRequestSort,
}) {
	const {hideBelowBreakpoint, subtitle, width} = column;

	const columnName = getColumnName(column);
	const isColumnOrderedBy = sort && columnName === sort.column;

	return (
		<Wrapper
			scope="col"
			width={width}
			hideBelowBreakpoint={hideBelowBreakpoint}
			aria-sort={isColumnOrderedBy ? ARIA_SORT_LABEL[sort.order] : null}
		>
			<ClickableHeader
				isActive={isColumnOrderedBy}
				column={column}
				order={sort && sort.order}
				a11yLabels={a11yLabels}
				onRequestSort={onRequestSort}
			>
				{children}
			</ClickableHeader>
			{subtitle && (
				<Text dimmed size="xs" display="block">
					{subtitle}
				</Text>
			)}
		</Wrapper>
	);
}

TableColumnHeader.propTypes = {
	children: PropTypes.node,
	column: PropTypes.shape({
		cellRenderer: PropTypes.func,
		defaultOrder: PropTypes.oneOf(['asc', 'desc']),
		hideBelowBreakpoint: PropTypes.string,
		name: PropTypes.string,
		sortable: PropTypes.bool,
		subtitle: PropTypes.string,
		title: PropTypes.string.isRequired,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}),
	sort: PropTypes.object,
	orderLabels: PropTypes.object,
	onRequestSort: PropTypes.func,
};

export default TableColumnHeader;
