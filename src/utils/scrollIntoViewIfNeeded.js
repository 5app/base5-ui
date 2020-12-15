function getScrollParent(element) {
	if (!element) {
		return null;
	}
	if (element.scrollHeight > element.clientHeight) {
		return element;
	} else {
		return getScrollParent(element.parentNode);
	}
}

/**
 * Vertically Scrolls an element into view if it's not visible yet.
 * Replacement for native non-standard `scrollIntoViewIfNeeded`
 * function that doesn't have great browser support.
 *
 * @param {object} element - The element to be scrolled into view
 */

function scrollIntoViewIfNeeded(element) {
	if (!element) {
		return null;
	}

	const scrollParent = getScrollParent(element);
	const elementIsAbove = scrollParent.scrollTop > element.offsetTop;
	const elementIsBelow =
		scrollParent.clientHeight + scrollParent.scrollTop < element.offsetTop;

	if (elementIsAbove || elementIsBelow) {
		element.scrollIntoView();
	}
}

export {getScrollParent};

export default scrollIntoViewIfNeeded;
