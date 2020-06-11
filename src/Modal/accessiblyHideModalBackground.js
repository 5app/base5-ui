import React from 'react';
import {hideOthers} from 'aria-hidden';
import PropTypes from 'prop-types';

const PREVENT_ARIA_HIDDEN_ATTRIBUTE = 'data-prevent-aria-hidden';

// hide everything except modalElement and elements with
// the PREVENT_ARIA_HIDDEN_ATTRIBUTE
function hideForModal(modalElement) {
	return hideOthers([
		modalElement,
		...document.querySelectorAll(`[${PREVENT_ARIA_HIDDEN_ATTRIBUTE}]`),
	]);
}

// A helper component that applies the PREVENT_ARIA_HIDDEN_ATTRIBUTE
// to its (only) child component
function PreventModalAriaHidden({children}) {
	return React.cloneElement(React.Children.only(children), {
		[PREVENT_ARIA_HIDDEN_ATTRIBUTE]: true,
	});
}
PreventModalAriaHidden.propTypes = {
	children: PropTypes.element.isRequired,
};

export {hideForModal, PreventModalAriaHidden};
