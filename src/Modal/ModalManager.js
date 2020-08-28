import React, {
	createContext,
	useState,
	useEffect,
	useRef,
	useCallback,
	useMemo,
	useContext,
} from 'react';

import {KEY_CODES} from '../constants';
import useEventListener from '../useEventListener';
import {hideForModal} from './accessiblyHideModalBackground';

const noop = () => {};

const defaultState = {
	register: noop,
	unregister: noop,
};

const ModalContext = createContext(defaultState);
const ModalStackContext = createContext([]);

function validateObjectShape(modalObject) {
	const missingFields = [
		!modalObject.name && 'name',
		!modalObject.focusAnchor && 'focusAnchor',
		!modalObject.ref && 'ref',
		!modalObject.onClose && 'onClose',
	].filter(Boolean);

	if (missingFields.length !== 0) {
		throw new Error(
			`ModalManager couldn't register modal. Missing parameter(s): ${missingFields.join(
				', '
			)}.`
		);
	}
}

function ModalManager({children}) {
	const [modalStack, setModalStack] = useState([]);
	const elementToFocus = useRef(null);

	/**
	 * Add a new modal to the stack with a name, focusAnchor (the
	 * element that triggered its opening), ref of the modal component,
	 * and an onClose handler that will close the modal.
	 * ModalManager does not _own_ the open/close state of a modal,
	 * it just needs to track it in order to handle focus restoration.
	 */
	const register = useCallback(newModalObject => {
		validateObjectShape(newModalObject);

		setModalStack(prevModalStack => {
			const isModalAlreadyRegistered = Boolean(
				prevModalStack.find(modal => modal.name === newModalObject.name)
			);
			if (isModalAlreadyRegistered) {
				return prevModalStack;
			}
			return [...prevModalStack, newModalObject];
		});
	}, []);

	const unregister = useCallback(({name}) => {
		if (!name) {
			return;
		}

		setModalStack(prevModalStack => {
			const indexOfModalToClose = prevModalStack.findIndex(
				modal => modal.name === name
			);
			if (prevModalStack.length === 0 || indexOfModalToClose === -1) {
				return prevModalStack;
			}

			const {focusAnchor} = prevModalStack[indexOfModalToClose];
			elementToFocus.current = focusAnchor;

			return prevModalStack.slice(0, indexOfModalToClose);
		});
	}, []);

	// Focus the element that originally opened the modal
	// There should only be one after a modal was un-registered)
	useEffect(() => {
		// The timeout is needed to allow the focus lock script
		// (react-focus-lock) to unlock the focus target
		setTimeout(() => {
			if (elementToFocus.current) {
				elementToFocus.current.focus();
				elementToFocus.current = null;
			}
		}, 0);
	}, [modalStack]);

	// Apply aria-hidden to everything but the top-most modal.
	useEffect(() => {
		if (modalStack.length) {
			const topMostModal = modalStack[modalStack.length - 1];
			const undoAriaHideOthers = hideForModal(topMostModal?.ref.current);

			return function cleanUp() {
				undoAriaHideOthers();
			};
		}
	}, [modalStack]);

	// Close the topmost modal when the Esc key is pressed
	useEventListener(
		'keydown',
		event => {
			if (event.keyCode === KEY_CODES.ESC) {
				const topMostModal = modalStack[modalStack.length - 1];
				topMostModal.onClose();
			}
		},
		{
			isEnabled: modalStack.length > 0,
		}
	);

	const modalContext = useMemo(
		() => ({
			register,
			unregister,
		}),
		[register, unregister]
	);

	return (
		<ModalContext.Provider value={modalContext}>
			<ModalStackContext.Provider value={modalStack}>
				{children}
			</ModalStackContext.Provider>
		</ModalContext.Provider>
	);
}

function useModalManager({name, onRequestClose, focusAnchor}) {
	const modalRef = useRef();
	const {register, unregister} = useContext(ModalContext);

	useEffect(() => {
		register({
			name,
			ref: modalRef,
			onClose: onRequestClose,
			focusAnchor: focusAnchor || document.activeElement || document.body,
		});

		return () => {
			unregister({name});
		};
	}, [focusAnchor, name, onRequestClose, register, unregister]);

	const modalStack = useContext(ModalStackContext);
	const isAtTop = modalStack[modalStack.length - 1]?.name === name;

	return {modalRef, isAtTop};
}

export {ModalManager, useModalManager, ModalContext, ModalStackContext};
