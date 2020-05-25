import PropTypes from 'prop-types';
import useOnClickOutside from '../useOnClickOutside';

/**
 * Helper component that sets up a global click event listener.
 * Use the `excludedElement` prop to ignore clicks on that element.
 */

function DocumentClickListener({onClick, excludedElementRef}) {
	useOnClickOutside(excludedElementRef, onClick, true);

	return null;
}

DocumentClickListener.propTypes = {
	onClick: PropTypes.func.isRequired,
	/**
	 * Ignore clicks on the element passed here.
	 */
	excludedElementRef: PropTypes.object,
};

// @component
export default DocumentClickListener;
