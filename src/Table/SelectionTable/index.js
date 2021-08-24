import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../../Checkbox';
import VisuallyHidden from '../../VisuallyHidden';
import useUniqueId from '../../useUniqueId';

import {
	getColumnName,
	getCellContent,
	getColumnConfigFromChildren,
} from '../utils';

import {
	TableContextProvider,
	TableWrapper,
	TableColumnHeader,
	TableHead,
	TableBody,
	TableRow,
	TableBodyCell,
	TableCheckboxCell,
	RowSelectButton,
	InteractiveTableContent,
} from '../shared';

import useGridNavigation from './useGridNavigation';
import useClickRowToSelect from './useClickRowToSelect';
import useTableSelection, {
	ALL_SELECTED,
	SOME_SELECTED,
} from './useTableSelection';

import {
	defaultHeaderRenderer,
	defaultEmptyContent,
	defaultA11yLabels,
} from '../Table';

function SelectionTable(props) {
	const {
		children,
		columns: columnsProp,
		data,
		emptyContent,
		itemKey,
		headerRenderer,
		getItemLabel = (item, index) => `Item ${index}`,
		a11yLabels,
		onRequestSort,
		rowHeader: rowHeaderProp,
		selectedItems,
		onChangeSelectedItems,
		sort,
		...otherProps
	} = props;

	const columns = children
		? getColumnConfigFromChildren(children)
		: columnsProp;

	const hasData = data && data.length > 0;
	const rowHeader = rowHeaderProp || getColumnName(columns[0]);

	const rowIds = hasData ? data.map(item => item[itemKey]) : [];
	const getInitialHighlightedRow = () =>
		selectedItems.length
			? selectedItems[0]
			: hasData
			? data[0][itemKey]
			: null;

	const {
		highlightedRowIndex,
		getIsRowHighlighted,
		getRowProps,
		getCellProps,
		handleGridNavigationKeys,
	} = useGridNavigation({
		rowIds,
		getInitialHighlightedRow,
	});

	const {
		selectAllState,
		getIsRowSelected,
		getSelectRowHandler,
		getSelectSingleRowHandler,
		toggleSelectAll,
		handleGridSelectionKeys,
	} = useTableSelection({
		rowIds,
		highlightedRowIndex,
		selectedItems,
		onChange: onChangeSelectedItems,
	});

	const {getRowSelectButtonRef, getRowClickHandler} = useClickRowToSelect();

	const navigationHintId = useUniqueId();

	return (
		<TableContextProvider {...otherProps}>
			<TableWrapper
				role="grid"
				aria-label={a11yLabels.label}
				aria-multiselectable="true"
				aria-describedby={navigationHintId}
				onKeyDown={event => {
					handleGridNavigationKeys(event);
					handleGridSelectionKeys(event);
				}}
			>
				<TableHead>
					<TableRow>
						<TableCheckboxCell isHeader>
							<Checkbox
								scale={0.9}
								checked={selectAllState === ALL_SELECTED}
								indeterminate={selectAllState === SOME_SELECTED}
								onChange={toggleSelectAll}
								aria-label={a11yLabels.selectAllRows}
							/>
						</TableCheckboxCell>
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
						data.map((item, index) => {
							const rowId = item[itemKey];
							const itemLabel = getItemLabel(item, index + 1);
							const isSelected = getIsRowSelected(rowId);
							const isRowHighlighted = getIsRowHighlighted(rowId);
							return (
								<TableRow
									selectable
									key={rowId}
									{...getRowProps(rowId)}
									onClick={getRowClickHandler(rowId)}
									isHighlighted={isRowHighlighted}
									isSelected={isSelected}
								>
									<TableCheckboxCell
										{...getCellProps(rowId, 0)}
										tabIndex="-1"
									>
										<RowSelectButton
											ref={getRowSelectButtonRef(rowId)}
											onClick={getSelectSingleRowHandler(
												rowId
											)}
											isActive={
												isSelected &&
												selectedItems.length === 1
											}
											tabIndex={isRowHighlighted ? 0 : -1}
										>
											{a11yLabels.selectSingleRow(
												itemLabel
											)}
										</RowSelectButton>
										<InteractiveTableContent>
											<Checkbox
												scale={0.9}
												checked={isSelected}
												onChange={getSelectRowHandler(
													rowId
												)}
												aria-label={itemLabel}
											/>
										</InteractiveTableContent>
									</TableCheckboxCell>
									{columns.map((column, colIndex) => {
										const {
											cellRenderer,
											hideBelowBreakpoint,
											name,
											title,
										} = column;

										const columnName =
											getColumnName(column);
										const isHeader = [name, title].includes(
											rowHeader
										);

										return (
											<TableBodyCell
												key={columnName}
												{...getCellProps(
													rowId,
													colIndex + 1
												)}
												tabIndex="-1"
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
							);
						})}
				</TableBody>
			</TableWrapper>
			<VisuallyHidden id={navigationHintId}>
				{a11yLabels.navigationHint}
			</VisuallyHidden>
			{!hasData && emptyContent}
		</TableContextProvider>
	);
}

SelectionTable.defaultProps = {
	emptyContent: defaultEmptyContent,
	itemKey: 'id',
	headerRenderer: defaultHeaderRenderer,
	a11yLabels: {
		...defaultA11yLabels,
		selectSingleRow: itemLabel => `Select only ${itemLabel}`,
		selectAllRows: 'Select all',
		navigationHint:
			'Use up and down arrow keys to navigate rows. Press Shift + Space to select or deselect rows.',
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
	/* Return a simple string that uniquely defines the item */
	getItemLabel: PropTypes.func.isRequired,
	a11yLabels: PropTypes.shape({
		label: PropTypes.string,
		navigationHint: PropTypes.string.isRequired,
		selectSingleRow: PropTypes.func.isRequired,
		selectAllRows: PropTypes.string.isRequired,
		sortedAsc: PropTypes.string.isRequired,
		sortedDesc: PropTypes.string.isRequired,
	}),
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

export {InteractiveTableContent};

export default SelectionTable;
