import {useState, useEffect, useRef} from 'react';

import useOnClickOutside from '../useOnClickOutside';

function usePopOverState({openDelay, popOverRef = null}) {
	const [isOpen, setOpen] = useState(false);
	const timeoutRef = useRef();
	const isMounted = useRef(true);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		return resetTimeout;
	}, [isOpen]);

	function resetTimeout() {
		if (timeoutRef.current !== null) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	}

	function open(e) {
		if (e.type !== 'touchstart') {
			timeoutRef.current = setTimeout(() => {
				if (isMounted.current) {
					setOpen(true);
					timeoutRef.current = null;
				}
			}, openDelay);
		}
	}

	function close() {
		setOpen(false);
		resetTimeout();
	}

	function toggle() {
		setOpen(openState => !openState);
		resetTimeout();
	}

	useOnClickOutside(popOverRef, close, isOpen);

	return {
		isOpen,
		open,
		close,
		toggle,
	};
}

export default usePopOverState;
