import {useRef, useEffect} from 'react';

/**
 * @param {Function} callback - Function to run
 * @param {number|null|undefined} delay - Delay in milliseconds. Interval pauses when null
 */

function useInterval(callback: () => void, delay?: number | null): void {
	const savedCallback = useRef<typeof callback>();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	});

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (typeof delay === 'number') {
			const id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

export default useInterval;
