import {useEffect, useRef} from 'react';

function useEventListener(eventName, callback, options = {}) {
	const callbackRef = useRef(callback);

	const {isEnabled = true, targetElement, capture = false} = options;

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const element = targetElement || document;
		const currentCallback = event => callbackRef.current(event);

		if (isEnabled) {
			element.addEventListener(eventName, currentCallback, capture);
		} else {
			element.removeEventListener(eventName, currentCallback, capture);
		}

		return function cleanUp() {
			element.removeEventListener(eventName, currentCallback, capture);
		};
	}, [isEnabled, eventName, targetElement, capture]);
}

export default useEventListener;
