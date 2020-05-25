import useEventListener from '../useEventListener';

function useOnClickOutside(excludedElementRef, onClick, isEnabled) {
	useEventListener('click', event => {
		if (!isEnabled) return null;

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
}

export default useOnClickOutside;
