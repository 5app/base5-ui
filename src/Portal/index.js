import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import useHasMounted from '../useHasMounted';

function Portal({targetElement, children}) {
	if (!useHasMounted()) return null;
	if (targetElement === null) return children;

	return ReactDOM.createPortal(children, targetElement || document.body);
}

Portal.propTypes = {
	/**
	 * Element to render the Portal's children into.
	 * Must be an object, e.g. the result of a getElementById() call.
	 * Defaults to `document.body` when undefined, but can be set to
	 * `null` to render the children in place, i.e. effectively disable
	 * the Portal's functionality
	 */
	targetElement: PropTypes.object,
};

// @component
export default Portal;
