import React from 'react';
import {Manager, Reference, Popper, placements} from 'react-popper';
import PropTypes from 'prop-types';
import {animated, useTransition, interpolate} from 'react-spring';

import Portal from 'src/Portal';

import Arrow from './Arrow';
import ResizeAware from './ResizeAware';

import getPrimaryPlacement from './getPrimaryPlacement';

const transitionOrigins = {
	top: {
		top: 3, left: 0
	},
	bottom: {
		top: -3, left: 0
	},
	left: {
		top: 0, left: 3
	},
	right: {
		top: 0, left: -3
	},
};



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
		targetElement,
		renderer,
		withTransition,
	} = props;

	const autoDistance = +arrowSize / 2 + +distance;

	const primaryPlacement = getPrimaryPlacement(placement);

	const transition = useTransition(isOpen, null, {
		from: {opacity: 0, ...transitionOrigins[primaryPlacement]},
		leave: {opacity: 0, ...transitionOrigins[primaryPlacement]},
		enter: {opacity: 1, top: 0, left: 0},
		config: {mass: 1, tension: 700, friction: 30},
	});

	return (
		<Manager>
			<Reference innerRef={innerRef}>
				{children}
			</Reference>
			{transition.map(({item: open, key, props: transitionStyle}) => (withTransition ? open : isOpen) &&
				<Portal key={key} targetElement={targetElement}>
					<Popper
						positionFixed={positionFixed}
						placement={placement}
						modifiers={{
							offset: {offset: `${offset}, ${autoDistance}`},
							computeStyle: {gpuAcceleration: !withTransition},
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

							const computedStyle = withTransition ? {
								position: style.position,
								top: 0,
								left: 0,
								opacity: transitionStyle.opacity,
								transform: interpolate(
									[transitionStyle.left, transitionStyle.top],
									(left, top) =>
										`translate3d(${style.left + left}px, ${style.top + top}px, 0)`
								),
							} : style;

							const resizeWatcher = <ResizeAware onResize={scheduleUpdate} />;

							return renderer({
								Component: withTransition ? animated.span : 'span',
								ref,
								style: computedStyle,
								content,
								arrow,
								resizeWatcher,
							});
						}}
					</Popper>
				</Portal>
			)}
		</Manager>
	);
}

function DefaultPopover({Component, ref, style, content, arrow, resizeWatcher}) {
	return (
		<Component ref={ref} style={style}>
			{content}
			{arrow}
			{resizeWatcher}
		</Component>
	);
}

PopOver.defaultProps = {
	arrowSize: 12,
	distance: 0,
	offset: 0,
	placement: 'top',
	positionFixed: true,
	targetElement: document.body,
	renderer: DefaultPopover,
	withTransition: true,
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
	innerRef: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
	]),
	/** Control whether the popover is shown or not */
	isOpen: PropTypes.bool,
	/** Shift the popover along the corss-axix */
	offset: PropTypes.number,
	/** One of 'top', 'bottom', 'left', or 'right'. Add an optional suffix '-start' or '-end' to align the popover to the start or end of the chosen direction. */
	placement: PropTypes.oneOf(placements),
	/** Control whether the popover should be positioned using "position: absolute" or "position: fixed" */
	positionFixed: PropTypes.bool,
	/** Customise popover rendering (e.g. for custom styling) */
	renderer: PropTypes.func,
	/** Choose the element that popovers should be rendered into. Set to `null` to render directly below the reference element. */
	targetElement: PropTypes.object,
	/** Allows turning off the popover's fade-in animation */
	withTransition: PropTypes.bool,
};

PopOver.Arrow = Arrow;

export default PopOver;
