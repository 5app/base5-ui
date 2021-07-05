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
	TableWrapper,
	TableHead,
	TableBody,
	TableRow,
	TableBodyCell,
} from './styles';
import TableColumnHeader from './TableColumnHeader';

const defaultHeaderRenderer = column => <Text bold>{column.title}</Text>;

function Table(props) {
	const {
		children,
		columns: columnsProp,
		data,
		emptyContent,
		itemKey,
		headerRenderer,
		onRequestSort,
		orderLabels,
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
		<>
			<TableWrapper {...otherProps}>
				<TableHead>
					<TableRow>
						{columns.map(column => (
							<TableColumnHeader
								key={getColumnName(column)}
								column={column}
								sort={sort}
								orderLabels={orderLabels}
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
											as={isHeader && 'th'}
											role={isHeader && 'rowheader'}
											scope={isHeader && 'row'}
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
			name: PropTypes.string,
			sortable: PropTypes.bool,
			subtitle: PropTypes.string,
			title: PropTypes.string.isRequired,
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
	 * Object containing the labels that are used to announce
	 * the order of a column to screen reader users.
	 */
	orderLabels: PropTypes.shape({
		asc: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
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
	 * The title or name of the column that you want to act as header of the row.
	 * Especially important to set correctly for the mobile view.
	 * Defaults to the first column.
	 */
	rowHeader: PropTypes.string,
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
