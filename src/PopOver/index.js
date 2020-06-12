import React, {useMemo, useState} from 'react';
import {usePopper, placements} from 'react-popper';
import PropTypes from 'prop-types';

import {mergeRefs} from '../utils';
import Arrow from '../Arrow';
import Box from '../Box';
import Portal from '../Portal';

import {matchWidth} from './modifiers';

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

	const [referenceElement, setReferenceElement] = useState(null);
	const [popperElement, setPopperElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);

	const autoDistance = Number(arrowSize) / 2 + Number(distance);

	const modifiers = useMemo(
		() =>
			[
				{name: 'arrow', options: {element: arrowElement}},
				{name: 'offset', options: {offset: [offset, autoDistance]}},
				{name: 'computeStyles', options: {gpuAcceleration: false}},
				matchReferenceWidth ? matchWidth : null,
			].filter(Boolean),
		[autoDistance, offset, arrowElement, matchReferenceWidth]
	);

	const {styles, state, attributes, update} = usePopper(
		referenceElement,
		popperElement,
		{
			strategy: positionFixed ? 'fixed' : 'absolute',
			placement,
			modifiers,
		}
	);

	const arrow = arrowSize > 0 && (
		<Arrow
			ref={setArrowElement}
			size={arrowSize}
			placement={state?.placement}
			style={styles.arrow}
		/>
	);

	return (
		<>
			{children({
				ref: mergeRefs([setReferenceElement, referenceRef]),
				update,
			})}
			<PopOverRenderer
				popOverRef={mergeRefs([setPopperElement, popOverRef])}
				style={styles.popper}
				attributes={attributes.popper}
				isOpen={isOpen}
				content={content}
				arrow={arrow}
				onUpdatePopOver={update}
			/>
		</>
	);
}

function DefaultPopover({
	popOverRef,
	isOpen,
	style,
	attributes,
	content,
	arrow,
	resizeWatcher,
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
				{...attributes}
				style={style}
			>
				{content}
				{arrow}
				{resizeWatcher}
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
	placement: PropTypes.oneOf(placements),
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
