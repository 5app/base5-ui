import React from 'react';
import PropTypes from 'prop-types';

import {mergeRefs} from '../utils';
import Arrow from '../Arrow';
import Box from '../Box';
import Portal from '../Portal';

import usePopOver from '../usePopOver';

function PopOver(props) {
	const {
		arrowSize,
		children,
		content,
		distance,
		isOpen,
		matchReferenceWidth,
		offset,
		placement,
		popOverRef,
		positionFixed,
		referenceRef,
		renderer: PopOverRenderer,
	} = props;

	const popOver = usePopOver({
		arrowSize,
		distance,
		matchReferenceWidth,
		offset,
		placement,
		positionFixed,
	});

	return (
		<>
			{children({
				ref: mergeRefs([popOver.referenceRef, referenceRef]),
				update: popOver.update,
			})}
			<PopOverRenderer
				popOverRef={mergeRefs([popOver.ref, popOverRef])}
				{...popOver.props}
				isOpen={isOpen}
				content={content}
				arrow={popOver.arrow}
				onUpdatePopOver={popOver.update}
			/>
		</>
	);
}

function DefaultPopover({
	popOverRef,
	isOpen,
	content,
	arrow,
	onUpdatePopOver,
	...otherProps
}) {
	if (!isOpen) return null;

	return (
		<Portal>
			<Box
				ref={popOverRef}
				background="black"
				color="white"
				borderRadius={3}
				px="s"
				py="xs"
				maxWidth="100%"
				{...otherProps}
			>
				{content}
				{arrow}
			</Box>
		</Portal>
	);
}

PopOver.defaultProps = {
	arrowSize: 12,
	distance: 0,
	offset: 0,
	placement: 'top',
	positionFixed: true,
	renderer: DefaultPopover,
};

PopOver.propTypes = {
	/** Control the popover's arrow size */
	arrowSize: PropTypes.number,
	/** Child function, providing a ref that needs to be passed to the wrapped reference component */
	children: PropTypes.func.isRequired,
	/** Set the content of the popover */
	content: PropTypes.node,
	/** Control the popover's distance from its reference element */
	distance: PropTypes.number,
	/** Control whether the popover is shown or not */
	isOpen: PropTypes.bool,
	/** Shift the popover along the corss-axix */
	offset: PropTypes.number,
	/** One of 'top', 'bottom', 'left', or 'right'. Add an optional suffix '-start' or '-end' to align the popover to the start or end of the chosen direction. */
	placement: PropTypes.oneOf([
		'auto',
		'top',
		'bottom',
		'left',
		'right',
		'auto-start',
		'top-start',
		'bottom-start',
		'left-start',
		'right-start',
		'auto-end',
		'top-end',
		'bottom-end',
		'left-end',
		'right-end',
	]),
	/** Access the popover's element */
	popOverRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
	/** Control whether the popover should be positioned using "position: absolute" or "position: fixed" */
	positionFixed: PropTypes.bool,
	/** Access the reference component's element */
	referenceRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
	/**
	 * Customise popover rendering (e.g. for custom styling, transitions, etc).
	 * Should be a React component that takes the props
	 * `popOverRef`, `isOpen`, `attributes`, `style`, `content`, `arrow`, `onUpdatePopOver`,
	 */
	renderer: PropTypes.elementType,
};

export {Arrow};

// @component
export default PopOver;
