import {useEffect, useRef} from 'react';

function useEventListener(eventName, callback, options = {}) {
	const callbackRef = useRef(callback);

	const {targetElement, capture = false} = options;

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const element = targetElement || document;
		const currentCallback = event => callbackRef.current(event);

		element.addEventListener(eventName, currentCallback, capture);

		return function cleanUp() {
			element.removeEventListener(eventName, currentCallback, capture);
		};
	}, [eventName, targetElement, capture]);
}

export default useEventListener;
