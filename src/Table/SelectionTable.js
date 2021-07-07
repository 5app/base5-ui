import React from 'react';
import PropTypes from 'prop-types';

import CenterContent from '../CenterContent';
import Checkbox from '../Checkbox';
import Text from '../Text';

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
	TableCheckboxCell,
} from './shared';

const defaultHeaderRenderer = column => <Text bold>{column.title}</Text>;

const NONE_SELECTED = 'none';
const SOME_SELECTED = 'some';
const ALL_SELECTED = 'all';

function getSelectAllState(data, selectedItems, itemKey) {
	if (selectedItems.length === 0) {
		return NONE_SELECTED;
	}
	const itemIsSelected = item => selectedItems.includes(item[itemKey]);
	const areAllSelected = data.every(itemIsSelected);
	if (areAllSelected) {
		return ALL_SELECTED;
	}
	const areSomeSelected = data.some(itemIsSelected);
	return areSomeSelected ? SOME_SELECTED : NONE_SELECTED;
}

function SelectionTable(props) {
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
		selectedItems,
		onChangeSelectedItems,
		sort,
		mobileViewBreakpoint,
		...otherProps
	} = props;

	const columns = children
		? getColumnConfigFromChildren(children)
		: columnsProp;

	const hasData = data && data.length > 0;
	const rowHeader = rowHeaderProp || getColumnName(columns[0]);
	const selectAllState = getSelectAllState(data, selectedItems, itemKey);

	function getIsItemSelected(item) {
		return (
			selectAllState === ALL_SELECTED ||
			selectedItems.includes(item[itemKey])
		);
	}

	function getSelectRowHandler(item) {
		return e => {
			const isSelected = e.target.checked;
			if (isSelected) {
				onChangeSelectedItems([...selectedItems, item[itemKey]]);
			} else {
				onChangeSelectedItems(
					selectedItems.filter(
						selectedItem => selectedItem !== item[itemKey]
					)
				);
			}
		};
	}

	function toggleSelectAll() {
		if (selectAllState === NONE_SELECTED) {
			onChangeSelectedItems(data.map(item => item[itemKey]));
		} else {
			onChangeSelectedItems([]);
		}
	}

	return (
		<TableContextProvider {...otherProps}>
			<TableWrapper>
				<TableHead>
					<TableRow mobileViewBreakpoint={mobileViewBreakpoint}>
						<TableCheckboxCell isHeader>
							<Checkbox
								checked={selectAllState === ALL_SELECTED}
								indeterminate={selectAllState === SOME_SELECTED}
								onChange={toggleSelectAll}
							/>
						</TableCheckboxCell>
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
								<TableCheckboxCell>
									<Checkbox
										checked={getIsItemSelected(item)}
										onChange={getSelectRowHandler(item)}
									/>
								</TableCheckboxCell>
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

SelectionTable.defaultProps = {
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

SelectionTable.propTypes = {
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
	selectedItems: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
	),
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

export default SelectionTable;
