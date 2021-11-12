import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FocusLock from 'react-focus-lock';

import {getGlobalThemeValue} from '../utils';

import Box from '../Box';
import Portal from '../Portal';
import CenterContent from '../CenterContent';
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

const ContentWrapper = styled.div`
	position: relative;
	height: 100%;
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

function CenterOrFullscreen({
	breakpoints,
	children,
	fullscreen,
	spacing,
	width,
	disableIE11Hack,
}) {
	if (fullscreen) {
		return (
			<Box
				height="100%"
				overflow="hidden"
				p={spacing}
				breakpoints={breakpoints}
			>
				{children}
			</Box>
		);
	}

	return (
		<CenterContent
			fillParent
			p={spacing}
			contentWidth={getGlobalThemeValue('modalWidths', width)}
			breakpoints={breakpoints}
			disableIE11Hack={disableIE11Hack}
		>
			{children}
		</CenterContent>
	);
}

function Modal({
	breakpoints,
	children,
	fullscreen,
	name,
	onRequestClose,
	spacing,
	width,
	disableIE11Hack,
	...otherProps
}) {
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
				// We don't need the aria-modal property here,
				// because we're "polyfilling" its effect (hiding
				// background content) using the 'aria-hidden' library,
				// which also gives us more control over it and allows
				// us to exclude certain elements from being hidden.
				// This solves issue https://github.com/5app/hub/issues/10949
				// aria-modal="true"
			>
				<CenterOrFullscreen
					fullscreen={fullscreen}
					spacing={spacing}
					width={width}
					breakpoints={breakpoints}
					disableIE11Hack={disableIE11Hack}
				>
					{isAtTop && <Overlay onClick={onRequestClose} />}
					<FocusLock as={ContentWrapper}>{children}</FocusLock>
				</CenterOrFullscreen>
			</ModalWrapper>
		</Portal>
	);
}

Modal.defaultProps = {
	disableIE11Hack: false,
	width: 'default',
};

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
	 * Only omit this if you're sure that you don't want the user to
	 * be able to close the modal.
	 */
	onRequestClose: PropTypes.func,
	/**
	 * Add either this or the `aria-labelledby` prop for accessibility.
	 */
	'aria-label': PropTypes.string,
	/**
	 * Add either this or the `aria-label` prop for accessibility.
	 */
	'aria-labelledby': PropTypes.string,
	/**
	 * When enabled, content will no longer be centred automatically,
	 * and the modal content can take up the full height of the screen
	 * when `height: 100%` is applied to it.
	 *
	 * Note that in fullscreen mode, the modal content should use
	 * `overflow: auto` if the content of modal should be scrollable.
	 */
	fullscreen: PropTypes.bool,
	/**
	 * Defines the minimum spacing between the modal content and
	 * the edge of the window. Can be an array of responsive values
	 * when used with the `breakpoints` prop.
	 */
	spacing: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
	]),
	/**
	 * Set the maximum width of the modal. (It can always go narrower.)
	 * Can be a responsive array when used with the breakpoints prop.
	 *
	 * The width is not applied when the fullscreen prop is active.
	 * You can use keys from the 'modalWidths' property in your global theme config.
	 */
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	/**
	 * Disable the vertical centering method used for IE11, as it can lead
	 * to cut-off/inaccessible content when the height of the centred content
	 * increases beyond the height of the parent container.
	 * Use this whenever the modal content is known to be long enough to cause
	 * scrolling or when the content is dynamic and may grow.
	 */
	disableIE11Hack: PropTypes.bool,
};

export default Modal;
