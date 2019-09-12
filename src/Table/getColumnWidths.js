import {percentageToFraction} from '../utils/units';

/**
 * @param {string|number|undefined} width - Predefined width
 * of a column, either absolute (number) or a percentage (string)
 * @param {number} availableWidth - Total width of the table
 *
 * @returns {number} Column width in pixels
 */

export function getSingleColumnWidth(width, availableWidth) {
	if (!width) return null;
	if (typeof width === 'string') {
		const fraction = percentageToFraction(width);
		return Math.round(availableWidth * fraction);
	} else return width;
}

/**
 * The table uses fixed positioning, which means we can calculate
 * the width of each column knowing only the table's configuration
 * and the total width that the table takes up on the page.
 *
 * @param {Array} columns - Table column configuration
 * @param {number} totalWidth - Total table width
 *
 * @returns {Array} column widths, containing one object per column
 * with the fields `name`, `width`, and `shouldHide`
 *
 * `shouldHide` is determined based on the column's `minWidth` prop.
 */

function getColumnWidths(columns, totalWidth) {
	if (columns.length === 0 || !totalWidth || totalWidth < 0) {
		return null;
	}
	// Get the width of any columns that have a predefined width (either % or px)
	const predefinedColumnWidths = columns.map(column =>
		getSingleColumnWidth(column.width, totalWidth)
	);
	// Calculate the space remaining after subtracting the defined widths
	const remainingSpace = predefinedColumnWidths.reduce(
		(remaining, current) => remaining - (current || 0),
		totalWidth
	);
	const remainingColumns = predefinedColumnWidths.filter(width => !width);
	// Calculate the widths of any remaining columns by evenly
	// distributing the remaining space between them
	const columnWidths = predefinedColumnWidths.map(width => {
		if (width) return width;
		return Math.round(remainingSpace / remainingColumns.length);
	});

	// Build the output object including the information whether the
	// column should be hidden given its size
	const columnWidthsAndHiddenStatus = columns.map((column, index) => {
		const shouldHide = column.minWidth
			? columnWidths[index] < column.minWidth
			: false;

		return {
			name: column.name,
			width: columnWidths[index],
			shouldHide,
		};
	});

	return columnWidthsAndHiddenStatus;
}

export default getColumnWidths;
