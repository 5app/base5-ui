import {useEffect, useRef} from 'react';

/**
 * Add a (global) event listener to your component.
 *
 * @param {string} eventName - Name of the event, e.g. 'click', or 'keydown'
 * @param {Function} callback - Function to run when the event occurs. Is called with the event object.
 * @param {object} [options]
 * @param {bool} [options.isEnabled=true] - Set this to false to disable the event listener
 * @param {bool} [options.capture=false] - Enable to capture non-bubbling events (e.g. focus within)
 * @param {object} [options.targetElement=document] - HTML element the event listener should be attached to
 */

function useEventListener(eventName, callback, options = {}) {
	const callbackRef = useRef(callback);

	const {isEnabled = true, capture = false, targetElement} = options;

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
