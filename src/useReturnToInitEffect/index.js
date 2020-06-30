import {useEffect, useRef} from 'react';

function useReturnToInitEffect(callback, state) {
	const initialState = useRef(state);
	const shouldRunEffect = useRef(false);
	const callbackRef = useRef(callback);

	useEffect(() => {
		// We're storing the callback in a ref since
		// we don't want our
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
