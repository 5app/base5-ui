import PropTypes from 'prop-types';

function Column() {
	return null;
}

Column.displayName = 'Column';

Column.propTypes = {
	cellRenderer: PropTypes.func,
	hideBelowBreakpoint: PropTypes.string,
	name: PropTypes.string.isRequired,
	sortable: PropTypes.bool,
	defaultOrder: PropTypes.oneOf(['asc', 'desc']),
	subtitle: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// @component
export default Column;
