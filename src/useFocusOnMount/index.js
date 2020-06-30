import {useRef, useEffect} from 'react';

function useFocusOnMount({
	onFocus,
	onRestoreFocus,
	disabled = false,
	ref: userRef,
} = {}) {
	const innerRef = useRef();
	const previouslyFocusedElementRef = useRef();

	const onFocusRef = useRef(onFocus);
	const onRestoreFocusRef = useRef(onRestoreFocus);

	useEffect(() => {
		onFocusRef.current = onFocus;
		onRestoreFocusRef.current = onRestoreFocus;
	}, [onFocus, onRestoreFocus]);

	useEffect(() => {
		const ref = userRef || innerRef;

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
				if (onRestoreFocusRef.current) {
					onRestoreFocusRef.current(
						previouslyFocusedElementRef.current
					);
				}
			}
		};
	}, [disabled, userRef]);

	return innerRef;
}

export default useFocusOnMount;
