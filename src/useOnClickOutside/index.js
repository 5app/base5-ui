import useEventListener from '../useEventListener';

/**
 * Returns an event handler that executes the callback only if the
 * event's target is outside of, or equal to the provided excluded element
 *
 * @param {object} excludedElementRef - A React ref (as obtained from `useRef` or `createRef`) to an element that should be excluded from triggering the `onClick` callback
 * @param {Function} callback - Function that's called when the event originated outside of the excluded element
 */

export function getOutsideTargetCallback(excludedElementRef, callback) {
	return event => {
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

		callback(event);
	};
}

/**
 * Handle clicks that occur outside of the element provided in the first parameter
 *
 * @param {object} excludedElementRef - A React ref (as obtained from `useRef` or `createRef`) to an element that should be excluded from triggering the `onClick` callback
 * @param {Function} onClick - Function that's called when a click occurs outside of the excluded element
 * @param {bool} [isEnabled=true] - Set to false to disable the hook
 */

function useOnClickOutside(excludedElementRef, onClick, isEnabled) {
	useEventListener(
		'click',
		getOutsideTargetCallback(excludedElementRef, onClick),
		{
			isEnabled,
		}
	);
}

export default useOnClickOutside;
