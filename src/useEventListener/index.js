import {useEffect, useRef} from 'react';

function useEventListener(eventName, callback, targetElement) {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const element = targetElement || document;
		const currentCallback = event => callbackRef.current(event);

		element.addEventListener(eventName, currentCallback);

		return function cleanUp() {
			element.removeEventListener(eventName, currentCallback);
		};
	}, [eventName, targetElement]);
}

export default useEventListener;
