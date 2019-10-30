import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const canUseDom = Boolean(typeof window !== 'undefined' && window.document);

function Portal({targetElement, children}) {
	if (!canUseDom) return null;
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

export default Portal;
