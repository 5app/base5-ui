import useEventListener from '../useEventListener';
import {getOutsideTargetCallback} from '../useOnClickOutside';

/**
 * Run a function when the user navigates outside of the element provided in the first parameter
 * (e.g. by clicking outside of it, or moving focus to an element outside of it)
 *
 * @param {object} excludedElementRef - A React ref (as obtained from `useRef` or `createRef`) to an element that should be excluded from triggering the `onNavigateAway` callback
 * @param {Function} onNavigateAway - Function that's called when focus moves outside of the excluded element
 * @param {bool} [isEnabled=true] - Set to false to disable the hook
 */

function useOnNavigateAway(excludedElementRef, onNavigateAway, isEnabled) {
	const callback = getOutsideTargetCallback(
		excludedElementRef,
		onNavigateAway
	);
	useEventListener('click', callback, {
		isEnabled,
	});
	useEventListener('focus', callback, {
		isEnabled,
		capture: true,
	});
}

export default useOnNavigateAway;
