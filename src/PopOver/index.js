import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Manager, Reference, Popper, placements} from 'react-popper';
import useResizeAware from 'react-resize-aware';
import PropTypes from 'prop-types';
import {useTransition, interpolate} from 'react-spring';

import Arrow from './Arrow';

const Portal = ({targetElement, children}) => {
	if (!targetElement) return children;

	return ReactDOM.createPortal(children, targetElement);
};

function ResizeAware({onResize}) {
	const [resizeListener, {width, height}] = useResizeAware();

	useEffect(() => {
		onResize();
	}, [width, height]);

	return resizeListener;
}

function PopOver(props) {
	const {
		arrowSize,
		children,
		content,
		distance,
		innerRef,
		// isOpen,
		offset,
		placement,
		positionFixed,
		targetElement,
		renderer,
	} = props;

	const autoDistance = +arrowSize / 2 + +distance;
	const [isOpen, setOpen] = React.useState(true);

	const transition = useTransition(isOpen, null, {
		from: {opacity: 0, top: -5, left: 0},
		enter: {opacity: 1, top: 0, left: 0},
		leave: {opacity: 0, top: -5, left: 0},
		config: {mass: 1, tension: 500, friction: 20},
	});

	return (
		<Manager>
			<button type="button" onClick={() => setOpen(!isOpen)}>
				<Reference innerRef={innerRef}>
					{children}
				</Reference>
			</button>
			{transition.map(({item: open, key, props: transitionStyle}) => open &&
				<Portal key={key} targetElement={targetElement}>
					<Popper
						positionFixed={positionFixed}
						placement={placement}
						modifiers={{
							offset: {offset: `${offset}, ${autoDistance}`},
							computeStyle: {gpuAcceleration: false},
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

							const combinedStyle = {
								position: style.position,
								top: 0,
								left: 0,
								opacity: transitionStyle.opacity,
								transform: interpolate([transitionStyle.left, transitionStyle.top], (left, top) => `translate3d(${style.left + left}px, ${style.top + top}px, 0)`),
							};

							const resizeWatcher = <ResizeAware onResize={scheduleUpdate} />;

							return renderer({
								ref,
								style: combinedStyle,
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

function DefaultPopover({ref, style, content, arrow, resizeWatcher}) {
	return (
		<span ref={ref} style={style}>
			{content}
			{arrow}
			{resizeWatcher}
		</span>
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
};

PopOver.propTypes = {
	arrowSize: PropTypes.number,
	children: PropTypes.func.isRequired,
	content: PropTypes.node,
	distance: PropTypes.number,
	innerRef: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
	]),
	isOpen: PropTypes.bool,
	offset: PropTypes.number,
	/** One of 'top', 'bottom', 'left', or 'right'. Add an optional suffix '-start' or '-end' to align the popover to the start or end of the chosen direction. */
	placement: PropTypes.oneOf(placements),
	positionFixed: PropTypes.bool,
	renderer: PropTypes.func,
	targetElement: PropTypes.object,
};

PopOver.Arrow = Arrow;

export default PopOver;
