import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {pxToRem, getSolidBackgroundShade, getPropFilter} from '../../../utils';
import {borderValue, ie11Hack} from '../../../mixins';
import Text from '../../../Text';
import {getColumnName} from '../../utils';

import {tableCellBaseStyles, TABLE_CELL_PROPS} from '../TableCell';
import {withTableContext} from '../TableContext';

import ClickableHeader from './ClickableHeader';

const ARIA_SORT_LABEL = {
	asc: 'ascending',
	desc: 'descending',
};

const headerBackgroundColor = css`
	background-color: ${p =>
		p.shadedHeader ? getSolidBackgroundShade(p.theme) : p.theme.background};
`;

export const Wrapper = withTableContext(styled('th').withConfig({
	shouldForwardProp: getPropFilter([
		...TABLE_CELL_PROPS,
		'stickyHeaderOffset',
	]),
})`
	${tableCellBaseStyles}

	position: relative;
	position: sticky;
	top: ${p => pxToRem(p.stickyHeaderOffset) || 0};
	z-index: ${p => p.theme.globals.z.raised};

	/**
	* MS Edge shows glitchy rendering when using a normal
	* border on sticky table headers, so we're using a
	* pseudo-element instead
	*/
	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
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
	orderLabels,
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
				orderLabels={orderLabels}
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
