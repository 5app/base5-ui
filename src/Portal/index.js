import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function canUseDom() {
	return Boolean(
		typeof window !== 'undefined' &&
		window.document
	);
}

function Portal({targetElement, children}) {
	if (!canUseDom) return null;
	if (!targetElement) return children;

	return ReactDOM.createPortal(children, targetElement);
}

Portal.defaultProps = {
	targetElement: document.body,
};

Portal.propTypes = {
	/** Element to render the Portal's children into.
	 * Must be an object, e.g. the result of a getElementById() call
	 */
	targetElement: PropTypes.object,
};

export default Portal;
