import {useRef, useEffect} from 'react';

/**
 * A hook that returns a stable React ref for a function.
 * The ref will always be kept up to date with the latest
 * version of the callback. Can be used to work around issues
 * with effects that have an incomplete dependency array.
 *
 * Usually it's best to avoid those, but sometimes this is
 * not possible.
 *
 * @param {Function} callback - A function
 * @returns a React ref object whose `current` property is set to
 * the latest version of the callback function
 */

function useCallbackRef(callback) {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	return callbackRef;
}

export default useCallbackRef;
