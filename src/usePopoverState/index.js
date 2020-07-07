import {useState, useEffect, useRef} from 'react';

function usePopoverState({openDelay}) {
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

	return {
		isOpen,
		open,
		close,
		toggle,
	};
}

export default usePopoverState;
