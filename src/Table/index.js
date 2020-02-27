import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {pxToRem} from '../utils/units';
import {alpha, getSolidBackgroundShade} from '../utils/colors';
import {borderValue, overflowWrap, ie11Hack} from '../mixins';
import {positionProps, marginProps} from '../styleProps';
import {getSpacing, getLength} from '../utils';

import Text from '../Text';
import CenterContent from '../CenterContent';

import getColumnConfigFromChildren from './getColumnConfigFromChildren';
import Column from './Column';
import ClickableHeader from './ClickableHeader';

function getBreakpoint(key) {
	return p => p.theme.globals.breakpoints[p[key]];
}

const headerBackgroundColor = css`
	background-color: ${p =>
		p.shadedHeader ? getSolidBackgroundShade(p.theme) : p.theme.background};
`;

const StyledTable = styled.table`
	position: relative;
	${positionProps}
	display: table;
	table-layout: fixed;
	border-spacing: 0;
	line-height: 1.3;

	${marginProps}

	width: 100%;

	td,
	th {
		font-weight: inherit;
		text-align: left;
		height: ${p => pxToRem(p.rowMinHeight)};
		padding: ${p => p.theme.globals.spacing.xxs}
			${p => p.theme.globals.spacing.s};
		padding-right: 0;

		${overflowWrap}
	}

	thead th {
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
		 * IE 11 doesn't render the pseudo element correctly, so
		 * we hide it and apply background colour and border directly
		 * to the cell.
		 */
		@media ${ie11Hack} {
			border-bottom: ${p => borderValue(p.theme)};
			${headerBackgroundColor}

			&::after {
				display: none;
			}
		}
	}

	/* Border-radius madness */
	border-radius: inherit;

	thead,
	tbody,
	th::after {
		border-radius: inherit;
	}
	th:first-child {
		border-top-left-radius: inherit;
	}
	th:last-child {
		border-top-right-radius: inherit;
	}
	tr:first-child {
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}

	/* Non-mobile-view styles only */
	@media (min-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		/* Highlight table row on hover and focus within */
		tbody tr:hover {
			background-color: ${p =>
				alpha(p.theme.shade, Number(p.theme.shadeStrength) / 2)};
		}
		tbody tr:focus-within {
			background-color: ${p =>
				alpha(p.theme.shade, Number(p.theme.shadeStrength) / 2)};
		}

		${p =>
			p.pl &&
			css`
				th:first-child,
				td:first-child {
					padding-left: ${getSpacing(p.pl, p.theme)};
				}
			`}

		${p =>
			p.pr &&
			css`
				th:last-child,
				td:last-child {
					padding-right: ${getSpacing(p.pr, p.theme)};
				}
			`}
	}

	/* Mobile-view styles */
	@media (max-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		/* Hide column headers. We'll add them back
		 * inside of each cell (except the row header). */
		thead {
			display: none;
		}

		/* Remove table layout. */
		table,
		tbody,
		th,
		td {
			display: block;
		}

		tr {
			/* Using flex allows us to modify the order of children
			 * so we can display the row's header at the top */
			display: flex;
			flex-direction: column;

			/* Add some padding for nicer spacing in the content area */
			padding-bottom: ${p => p.theme.globals.spacing.xs};
			border-bottom: ${p => borderValue(p.theme)};
		}

		/* More border-radius madness */
		tr:first-child th {
			border-top-left-radius: inherit;
			border-top-right-radius: inherit;
		}

		th {
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
		}

		td {
			/* Override the specified minimum row height */
			height: auto;
			display: flex;
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
	}
`;

const Cell = styled.td`
	${p =>
		p.width &&
		`
		width: ${getLength(p.width)};
	`}

	@media (max-width: ${getBreakpoint('hideBelowBreakpoint')}) {
		display: none;
	}
`;

/**
 * Uses either the column's name or its cellRenderer
 * to access a cell's data. If no cellRenderer is proviced,
 * the name of the column is used.
 *
 * @param {object} item
 * @param {string|Function} key
 */

function getCellContent(item, key) {
	if (typeof key === 'string') {
		return item[key] || item[key.toLowerCase()] || 'No entry found';
	}
	return key(item);
}

const defaultHeaderRenderer = column => <Text bold>{column.name}</Text>;

const ariaSortLabel = {
	asc: 'ascending',
	desc: 'descending',
};

// Note about roles: The table is marked up using roles
// that are seemingly redundant. This is done so that the
// styles of the mobile view don't remove the table's semantics,
// which they'd otherwise do. Explicit roles ensure that
// semantics aren't affected by the styles.

function Table(props) {
	const {
		children,
		columns: columnsProp,
		data,
		emptyContent,
		itemKey,
		headerRenderer,
		stickyHeaderOffset,
		mobileViewBreakpoint,
		onRequestSort,
		orderLabels,
		rowMinHeight,
		rowHeader: rowHeaderProp,
		shadedHeader,
		sort,
		...otherProps
	} = props;

	const columns = children
		? getColumnConfigFromChildren(children)
		: columnsProp;

	const hasData = data && data.length > 0;
	const rowHeader = rowHeaderProp || columns[0][itemKey];

	return (
		<>
			<StyledTable
				mobileViewBreakpoint={mobileViewBreakpoint}
				stickyHeaderOffset={stickyHeaderOffset}
				rowMinHeight={rowMinHeight}
				shadedHeader={shadedHeader}
				role="table"
				{...otherProps}
			>
				{/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
				<thead role="rowgroup">
					<tr role="row">
						{columns.map(column => {
							const {
								hideBelowBreakpoint,
								name,
								subtitle,
								width,
							} = column;

							const isColumnOrderedBy =
								sort && name === sort.column;

							return (
								<Cell
									key={name}
									as="th"
									scope="col"
									role="columnheader"
									width={width}
									hideBelowBreakpoint={hideBelowBreakpoint}
									aria-sort={
										isColumnOrderedBy
											? ariaSortLabel[sort.order]
											: null
									}
								>
									<ClickableHeader
										isActive={isColumnOrderedBy}
										column={column}
										order={sort && sort.order}
										orderLabels={orderLabels}
										onRequestSort={onRequestSort}
									>
										{headerRenderer(column)}
									</ClickableHeader>
									{subtitle && (
										<Text dimmed size="xs" display="block">
											{subtitle}
										</Text>
									)}
								</Cell>
							);
						})}
					</tr>
				</thead>
				{/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
				<tbody role="rowgroup">
					{hasData &&
						data.map(item => (
							<tr key={item[itemKey]} role="row">
								{columns.map(column => {
									const {
										cellRenderer,
										hideBelowBreakpoint,
										name,
									} = column;

									const isHeader = rowHeader === name;

									return (
										<Cell
											key={name}
											as={isHeader && 'th'}
											role={
												isHeader ? 'rowheader' : 'cell'
											}
											scope={isHeader ? 'row' : null}
											hideBelowBreakpoint={
												hideBelowBreakpoint
											}
											data-columnheader={name}
										>
											{getCellContent(
												item,
												cellRenderer || name
											)}
										</Cell>
									);
								})}
							</tr>
						))}
				</tbody>
			</StyledTable>
			{!hasData && emptyContent}
		</>
	);
}

Table.defaultProps = {
	emptyContent: (
		<CenterContent height={200}>No data to display</CenterContent>
	),
	itemKey: 'id',
	headerRenderer: defaultHeaderRenderer,
	orderLabels: {
		asc: '(sorted ascending)',
		desc: '(sorted descending)',
	},
	mobileViewBreakpoint: 'xs',
	stickyHeaderOffset: 0,
	rowMinHeight: 45,
};

Table.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			cellRenderer: PropTypes.func,
			defaultOrder: PropTypes.oneOf(['asc', 'desc']),
			hideBelowBreakpoint: PropTypes.string,
			name: PropTypes.string.isRequired,
			sortable: PropTypes.bool,
			subtitle: PropTypes.string,
			width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		})
	),
	data: PropTypes.array,
	/**
	 * Content to be displayed when the passed data is empty
	 */
	emptyContent: PropTypes.element,
	/**
	 * Specify a unique key by which each item in
	 * the provided `data` array can be identified
	 */
	itemKey: PropTypes.string,
	/**
	 * Specify how far from the top the sticky header should be placed.
	 * Use to make sure it's not covered by a navigation bar
	 */
	stickyHeaderOffset: PropTypes.number,
	/**
	 * Specify below which breakpoint (from `theme.globals.breakpoints`)
	 * the mobile view should kick in.
	 */
	mobileViewBreakpoint: PropTypes.string,
	/**
	 * Function to call when a new sort order is requested.
	 * Passes an object in the shape of the `orderBy` prop.
	 */
	onRequestSort: PropTypes.func,
	/**
	 * Object describing the order of the table's data.
	 * 'column': Name of the column to be sorted by
	 * 'order': Direction of sorting, either 'asc' (ascending)
	 * or 'desc' (descending)
	 */
	sort: PropTypes.shape({
		column: PropTypes.string.isRequired,
		order: PropTypes.oneOf(['asc', 'desc']),
	}),
	/**
	 * Object containing the labels that are used to announce
	 * the order of a column to screen reader users.
	 */
	orderLabels: PropTypes.shape({
		asc: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
	}),
	pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/**
	 * The name of the column that you want to act as header of the row.
	 * Especially important to set correctly for the mobile view.
	 * Defaults to the first column.
	 */
	rowHeader: PropTypes.string,
	rowMinHeight: PropTypes.number,
	shadedHeader: PropTypes.bool,
};

export {Column};

// @component
export default Table;
