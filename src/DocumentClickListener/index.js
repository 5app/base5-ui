import PropTypes from 'prop-types';

import useEventListener from '../useEventListener';

/**
 * Helper component that sets up a global click event listener.
 * Use the `excludedElement` prop to ignore clicks on that element.
 */

function DocumentClickListener({onClick, excludedElementRef}) {
	useEventListener('click', event => {
		const excludedElement =
			excludedElementRef && excludedElementRef.current;
		// Bail out if the clicked element or the currently focused element
		// is inside of excludedElement. We need to check the focused element
		// to prevent an issue in Chrome where initiating a drag inside of an
		// input (to select the text inside of it) and ending that drag outside
		// of the input fires a click event, breaking our excludedElement rule.
		if (
			excludedElement &&
			(excludedElement === event.target ||
				excludedElement.contains(event.target) ||
				excludedElement === document.activeElement ||
				excludedElement.contains(document.activeElement))
		) {
			return null;
		}

		onClick(event);
	});

	return null;
}

DocumentClickListener.propTypes = {
	onClick: PropTypes.func.isRequired,
	excludedElementRef: PropTypes.object,
};

export default DocumentClickListener;
