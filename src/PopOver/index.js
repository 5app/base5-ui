import React from 'react';
import ReactDOM from 'react-dom';
import {Manager, Reference, Popper, placements} from 'react-popper';
import PropTypes from 'prop-types';

import Arrow from './Arrow';
import ResizeAware from './ResizeAware';

const Portal = ({targetElement, children}) => {
	if (!targetElement) return children;

	return ReactDOM.createPortal(children, targetElement);
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
	} = props;

	const autoDistance = +arrowSize / 2 + +distance;

	return (
		<Manager>
			<Reference innerRef={innerRef}>
				{children}
			</Reference>
			{isOpen &&
				<Portal targetElement={targetElement}>
					<Popper
						positionFixed={positionFixed}
						placement={placement}
						modifiers={{offset: {offset: `${offset}, ${autoDistance}`}}}
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

							const resizeWatcher = <ResizeAware onResize={scheduleUpdate} />;

							return renderer({
								ref,
								style,
								content,
								arrow,
								resizeWatcher,
							});
						}}
					</Popper>
				</Portal>
			}
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
