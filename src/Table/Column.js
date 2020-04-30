import PropTypes from 'prop-types';

function Column() {
	return null;
}

Column.displayName = 'Column';

Column.propTypes = {
	/**
	 * Render function for table cells. Are called with
	 * the row's data.
	 */
	cellRenderer: PropTypes.func,
	/**
	 * Indicate below which responsive breakpoint you want
	 * the table to collapse to "mobile mode"
	 */
	hideBelowBreakpoint: PropTypes.string,
	/**
	 * An optional name for the column that will be used
	 * to access a field from the row data (if cellRenderer isn't used)
	 * and as a key for ordering
	 */
	name: PropTypes.string,
	/**
	 * Specify whether you want this column to be sortable
	 */
	sortable: PropTypes.bool,
	/**
	 * Specify the default sort order of this column. Defaults to 'asc'.
	 */
	defaultOrder: PropTypes.oneOf(['asc', 'desc']),
	/**
	 * Subtitle in the header of the column
	 */
	subtitle: PropTypes.string,
	/**
	 * Readable title (header) of the column
	 */
	title: PropTypes.string.isRequired,
	/**
	 * Width of the column as a number.
	 * You can pass pixels (`width={120}` or `width="120"`),
	 * fractions (`width={1/3}`), or percentages (`width="30%"`)
	 */
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// @component
export default Column;
