import {useState, useEffect, useRef} from 'react';

import {KEY_CODES} from '../constants';
import useEventListener from '../useEventListener';

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

	function open() {
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

	function close() {
		if (onClose) {
			onClose();
		}
		setOpen(false);
		resetTimeout();
	}

	function toggle() {
		if (isOpen) {
			close();
		} else {
			open();
		}
	}

	useEventListener(
		'keydown',
		event => {
			if (event.keyCode === KEY_CODES.ESC) {
				close();
			}
		},
		{
			isEnabled: isOpen,
		}
	);

	return {
		isOpen,
		open,
		close,
		toggle,
	};
}

export default usePopoverState;
