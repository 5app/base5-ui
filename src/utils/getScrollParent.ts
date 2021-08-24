function getScrollParent(node: null| Element | HTMLElement): null | Element | HTMLElement {
	const overflowY = window.getComputedStyle(node as Element).overflowY;
	const isScrollable = !(
		overflowY.includes('hidden') || overflowY.includes('visible')
	);

	if (!node) {
		return null;
	} else if (isScrollable && node.scrollHeight >= node.clientHeight) {
		return node;
	}

	return (
		getScrollParent(node.parentNode as Element | null) ||
		document.scrollingElement ||
		document.body
	);
}

export default getScrollParent;
