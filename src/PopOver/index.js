import React, {useState} from 'react';
import {Manager, Reference, Popper, placements} from 'react-popper';
import PropTypes from 'prop-types';

import Arrow from '../Arrow';
import Portal from '../Portal';

import ResizeAware from './ResizeAware';

function PopOver(props) {
	const {
		arrowSize,
		children,
		content,
		distance,
		innerRef,
		isOpen,
		offset,
		placement,
		positionFixed,
		renderer: PopOverRenderer,
	} = props;

	const autoDistance = +arrowSize / 2 + +distance;

	const [refMeasurements, setRefMeasurements] = useState({});

	const getRefModifier = {
		enabled: true,
		order: 950,
		fn: data => {
			if (data.offsets && data.offsets.reference) {
				setRefMeasurements(data.offsets.reference);
			}
			return data;
		},
	};

	return (
		<Manager>
			<Reference innerRef={innerRef}>{children}</Reference>
			<Popper
				positionFixed={positionFixed}
				placement={placement}
				modifiers={{
					offset: {offset: `${offset}, ${autoDistance}`},
					computeStyle: {gpuAcceleration: false},
					flip: {flipVariations: true, flipVariationsByContent: true},
					getRefModifier,
				}}
			>
				{({ref, style, placement, arrowProps, scheduleUpdate}) => {
					const arrow = arrowSize > 0 && (
						<Arrow
							size={arrowSize}
							placement={placement}
							ref={arrowProps.ref}
							style={arrowProps.style}
						/>
					);

					const resizeWatcher = (
						<ResizeAware onResize={scheduleUpdate} />
					);

					return (
						<PopOverRenderer
							popOverRef={ref}
							style={style}
							isOpen={isOpen}
							content={content}
							arrow={arrow}
							refMeasurements={refMeasurements}
							resizeWatcher={resizeWatcher}
						/>
					);
				}}
			</Popper>
		</Manager>
	);
}

function DefaultPopover({
	popOverRef,
	isOpen,
	style,
	content,
	arrow,
	resizeWatcher,
}) {
	if (!isOpen) return null;

	return (
		<Portal targetElement={document.body}>
			<span
				ref={popOverRef}
				style={{
					background: 'black',
					color: 'white',
					borderRadius: '3px',
					padding: '5px 10px',
					maxWidth: '100%',
					...style,
				}}
			>
				{content}
				{arrow}
				{resizeWatcher}
			</span>
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
	/** Access the reference component's ref */
	innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
	/** Control whether the popover is shown or not */
	isOpen: PropTypes.bool,
	/** Shift the popover along the corss-axix */
	offset: PropTypes.number,
	/** One of 'top', 'bottom', 'left', or 'right'. Add an optional suffix '-start' or '-end' to align the popover to the start or end of the chosen direction. */
	placement: PropTypes.oneOf(placements),
	/** Control whether the popover should be positioned using "position: absolute" or "position: fixed" */
	positionFixed: PropTypes.bool,
	/**
	 * Customise popover rendering (e.g. for custom styling, transitions, etc).
	 * Should be a React component that takes the props
	 * `popOverRef`, `isOpen`, `style`, `content`, `arrow`, `resizeWatcher`,
	 * and `refMeasurements`
	 */
	renderer: PropTypes.elementType,
};

export {Arrow};

export default PopOver;
