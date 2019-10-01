import {useEffect, useRef} from 'react';

function useEventListener(eventName, callback, element = document) {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const currentCallback = callbackRef.current;

		element.addEventListener(eventName, currentCallback);

		return function cleanUp() {
			element.removeEventListener(eventName, currentCallback);
		};
	}, [eventName, element]);
}

export default useEventListener;
