function getScrollParent(node) {
	const isElement = node instanceof HTMLElement;
	const overflowY = isElement && window.getComputedStyle(node).overflowY;
	const isScrollable = !(
		overflowY.includes('hidden') || overflowY.includes('visible')
	);

	if (!node) {
		return null;
	} else if (isScrollable && node.scrollHeight >= node.clientHeight) {
		return node;
	}

	return (
		getScrollParent(node.parentNode) ||
		document.scrollingElement ||
		document.body
	);
}

export default getScrollParent;
