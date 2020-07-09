import {useState, useEffect, useRef} from 'react';

function usePopoverState({openDelay = 0, onOpen, onClose} = {}) {
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
					if (onOpen) {
						onOpen();
					}
					timeoutRef.current = null;
				}
			}, openDelay);
		}
	}

	function close() {
		setOpen(false);
		if (onClose) {
			onClose();
		}
		resetTimeout();
	}

	function toggle(e) {
		if (isOpen) {
			close(e);
		} else {
			open(e);
		}
	}

	return {
		isOpen,
		open,
		close,
		toggle,
	};
}

export default usePopoverState;
