import {useRef, useEffect} from 'react';
import useCallbackRef from '../useCallbackRef';

function useFocusOnMount({
	onFocus,
	onRestoreFocus,
	disabled = false,
	ref: userRef,
} = {}) {
	const innerRef = useRef();
	const previouslyFocusedElementRef = useRef();

	const onFocusRef = useCallbackRef(onFocus);
	const onRestoreFocusRef = useCallbackRef(onRestoreFocus);

	useEffect(() => {
		const ref = userRef || innerRef;
		const restoreFocus = onRestoreFocusRef.current;

		if (!disabled) {
			previouslyFocusedElementRef.current = document.activeElement;
			ref.current?.focus();
			if (onFocusRef.current) {
				onFocusRef.current(ref.current);
			}
		}

		return () => {
			if (!disabled) {
				previouslyFocusedElementRef.current?.focus();
				if (restoreFocus) {
					restoreFocus(previouslyFocusedElementRef.current);
				}
			}
		};
	}, [disabled, onFocusRef, onRestoreFocusRef, userRef]);

	return innerRef;
}

export default useFocusOnMount;
