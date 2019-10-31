import PropTypes from 'prop-types';

function Column() {
	return null;
}

Column.displayName = 'Column';

Column.propTypes = {
	cellRenderer: PropTypes.func,
	isHeading: PropTypes.bool,
	hideBelowBreakpoint: PropTypes.string,
	name: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// @component
export default Column;
