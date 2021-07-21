import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import CenterContent from '../CenterContent';

import {
	getColumnName,
	getCellContent,
	getColumnConfigFromChildren,
} from './utils';

import {
	TableContextProvider,
	TableWrapper,
	TableColumnHeader,
	TableHead,
	TableBody,
	TableRow,
	TableBodyCell,
} from './shared';

export const defaultHeaderRenderer = column => <Text bold>{column.title}</Text>;
export const defaultEmptyContent = (
	<CenterContent height={200}>No data to display</CenterContent>
);
export const defaultA11yLabels = {
	sortedAsc: 'ascending',
	sortedDesc: 'descending',
	sortByColumn: (columnTitle, order) =>
		`Sort by ${columnTitle} in ${order}ending order`,
};

function Table(props) {
	const {
		children,
		columns: columnsProp,
		data,
		emptyContent,
		itemKey,
		headerRenderer,
		onRequestSort,
		a11yLabels,
		rowHeader: rowHeaderProp,
		sort,
		...otherProps
	} = props;

	const columns = children
		? getColumnConfigFromChildren(children)
		: columnsProp;

	const hasData = data && data.length > 0;
	const rowHeader = rowHeaderProp || getColumnName(columns[0]);

	return (
		<TableContextProvider {...otherProps}>
			<TableWrapper aria-label={a11yLabels.label}>
				<TableHead>
					<TableRow>
						{columns.map(column => (
							<TableColumnHeader
								key={getColumnName(column)}
								column={column}
								sort={sort}
								a11yLabels={a11yLabels}
								onRequestSort={onRequestSort}
							>
								{headerRenderer(column)}
							</TableColumnHeader>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{hasData &&
						data.map(item => (
							<TableRow key={item[itemKey]}>
								{columns.map(column => {
									const {
										cellRenderer,
										hideBelowBreakpoint,
										name,
										title,
									} = column;

									const columnName = getColumnName(column);
									const isHeader = [name, title].includes(
										rowHeader
									);

									return (
										<TableBodyCell
											key={columnName}
											title={title}
											isHeader={isHeader}
											hideBelowBreakpoint={
												hideBelowBreakpoint
											}
										>
											{getCellContent(
												item,
												cellRenderer || columnName
											)}
										</TableBodyCell>
									);
								})}
							</TableRow>
						))}
				</TableBody>
			</TableWrapper>
			{!hasData && emptyContent}
		</TableContextProvider>
	);
}

Table.defaultProps = {
	emptyContent: defaultEmptyContent,
	itemKey: 'id',
	headerRenderer: defaultHeaderRenderer,
	a11yLabels: defaultA11yLabels,
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
			name: PropTypes.string,
			sortable: PropTypes.bool,
			subtitle: PropTypes.string,
			title: PropTypes.string.isRequired,
			width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		})
	),
	/**
	 * The data for your table. Each object in the array must correspond to one row in the table
	 */
	data: PropTypes.arrayOf(PropTypes.object),
	/**
	 * Specify a unique key by which each item in
	 * the provided `data` array can be identified
	 */
	itemKey: PropTypes.string,
	/**
	 * The title or name of the column that you want to act as header of each **row**.
	 * Usually you'd set this to the column that shows the name of the table row.
	 * Especially important to set correctly for the mobile view. Defaults to the first column.
	 */
	rowHeader: PropTypes.string,
	/**
	 * Content to be displayed when the passed data is empty
	 */
	emptyContent: PropTypes.element,
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
	 * Passes an object in the shape of the `sort` prop.
	 */
	onRequestSort: PropTypes.func,
	/**
	 * Object describing the order of the table's data.
	 * 'column': Name (or title) of the column to be sorted by.
	 * 'order': Direction of sorting, either 'asc' (ascending)
	 * or 'desc' (descending)
	 */
	sort: PropTypes.shape({
		column: PropTypes.string.isRequired,
		order: PropTypes.oneOf(['asc', 'desc']),
	}),
	/**
	 * Object containing labels used for accessibility.
	 * Note that some fields are functions that are called with
	 * data needed to customise the label.
	 */
	a11yLabels: PropTypes.shape({
		sortedAsc: PropTypes.string.isRequired,
		sortedDesc: PropTypes.string.isRequired,
		sortByColumn: PropTypes.func.isRequired,
	}),
	/**
	 * Padding left – indent the content of the first column by the
	 * specified amount.
	 */
	pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/**
	 * Padding right – spaces the content of the last column by the
	 * specified amount.
	 */
	pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/**
	 * Minimum height of each row. Increase this for a more spacious design.
	 */
	rowMinHeight: PropTypes.number,
	/**
	 * Slightly darken the background of the header
	 */
	shadedHeader: PropTypes.bool,
};

export default Table;
