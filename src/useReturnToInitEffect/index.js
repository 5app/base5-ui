import {useEffect, useRef} from 'react';

/**
 * Run an effect only after a condition has returned to its original value.
 * The callback will not be run initially, only after the value has changed
 * AND eventually returned to its original value.
 *
 * @param {Function} callback - Function to run after the status parameter
 * has changed and then returns to its initial value
 * @param {bool|number|string} status - Status that should be tracked to
 * decide whether to run the effect
 */

function useReturnToInitEffect(callback, state) {
	const initialState = useRef(state);
	const shouldRunEffect = useRef(false);
	const callbackRef = useRef(callback);

	useEffect(() => {
		// We're storing the latest callback in a ref since
		// we don't want our main effect (below) to re-run
		// when the callback changes (which it would do
		// on every render when defined as an inline function).
		// But we still want it to have access to the latest
		// callback! This is a way of achieving that.
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		if (state === initialState.current && shouldRunEffect.current) {
			const cleanup = callbackRef.current();
			shouldRunEffect.current = false;

			if (cleanup) {
				return cleanup;
			}
		} else {
			shouldRunEffect.current = true;
		}
	}, [state]);
}

export default useReturnToInitEffect;
