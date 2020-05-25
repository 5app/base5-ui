import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FocusLock from 'react-focus-lock';

import {useModalManager} from './ModalManager';

const ModalWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: ${p => p.theme.globals.z.modals};

	overflow: auto;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	background-color: white;
	opacity: 0.666;
`;

function Modal({children, name, onRequestClose, ...otherProps}) {
	const {modalRef, isAtTop} = useModalManager({
		name,
		onRequestClose,
	});

	if (!(otherProps['aria-label'] || otherProps['aria-labelledby'])) {
		// eslint-disable-next-line
		console.warn(
			`Modal '${name}' is missing an accessible label. Please add either an 'aria-label' or 'aria-labelledby' prop.`
		);
	}

	return (
		<Portal>
			<ModalWrapper
				ref={modalRef}
				id={name}
				{...otherProps}
				role="dialog"
				aria-modal="true"
			>
				<CenterContent fillParent>
					<FocusLock>
						{isAtTop && <Overlay onClick={onRequestClose} />}
						<div style={{position: 'relative'}}>{children}</div>
					</FocusLock>
				</CenterContent>
			</ModalWrapper>
		</Portal>
	);
}
Modal.propTypes = {
	/**
	 * A unique ID for your modal. (Only needs to be unique among modals
	 * that are expected to be open at the same time.)
	 */
	name: PropTypes.string.isRequired,
	/**
	 * A function that, when called, will cause the modal to close.
	 * This is needed to support closing the modal when the Esc key
	 * is pressed or the backdrop of the modal is clicked.
	 */
	onRequestClose: PropTypes.func.isRequired,
	/**
	 * Add either this or the `aria-labelledby` prop for accessibility.
	 */
	'aria-label': PropTypes.string,
	/**
	 * Add either this or the `aria-label` prop for accessibility.
	 */
	'aria-labelledby': PropTypes.string,
};

// @component
export default Modal;
