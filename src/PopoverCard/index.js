import React, {forwardRef} from 'react';
import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';

import Box from '../Box';
import Card from '../Card';
import Portal from '../Portal';

const fadeAndDropIn = keyframes`
	from {
		transform: translateY(-3px);
		opacity: 0;
	}
`;

const AnimatedCard = styled(Card)`
	z-index: ${p => p.theme.globals.z.tooltips};

	animation: ${fadeAndDropIn} 150ms ease-out;
	animation-fill-mode: backwards;

	/*
	 * Hide the popover when the reference
	 * is scrolled out of view, or when
	 * renderWhenClosed is enabled and the
	 * popover is closed
	 */
	&[data-popper-reference-hidden='true'],
	&[data-hidden='true'] {
		visibility: hidden;
		pointer-events: none;
		animation: none;
	}
`;

const PopoverCard = forwardRef((props, ref) => {
	const {
		as: Component,
		isOpen,
		style,
		children,
		arrow,
		theme, // Deprecated, use "variant"
		variant,
		spacing, // Deprecated, use "p"
		p,
		fontSize,
		renderWhenClosed,
		ignorePointerEvents,
		renderInPlace,
		scrollContainerRef,
		...otherProps
	} = props;

	if (!isOpen && !renderWhenClosed) return null;

	return (
		<Portal targetElement={renderInPlace ? null : undefined}>
			<AnimatedCard
				ref={ref}
				forwardedAs={Component}
				variant={variant || theme === 'dark' ? 'inverted' : 'raised'}
				size="small"
				p={p || spacing}
				maxWidth="36rem"
				width="auto"
				data-hidden={renderWhenClosed && !isOpen}
				{...otherProps}
				overflow="visible"
				style={{
					pointerEvents: ignorePointerEvents ? 'none' : null,
					...style,
				}}
			>
				<Box
					ref={scrollContainerRef}
					fontSize={fontSize}
					width="100%"
					maxHeight="inherit"
					// Handle overflow scrolling here (instead of the parent)
					// to prevent the arrow from being cut off
					overflow="auto"
				>
					{children}
				</Box>
				{arrow}
			</AnimatedCard>
		</Portal>
	);
});

PopoverCard.displayName = 'PopoverCard';

PopoverCard.defaultProps = {
	isOpen: false,
	renderWhenClosed: false,
	ignorePointerEvents: false,
	renderInPlace: false,
};

PopoverCard.propTypes = {
	/*
	 * Sets the visibility of the Popover
	 */
	isOpen: PropTypes.bool,
	/*
	 * Pass in an arrow element that will be rendered inside of the card
	 */
	arrow: PropTypes.node,
	/*
	 * Legacy prop, use the "variant" prop instead.
	 * Choose between a light or dark theme. (Uses the 'raised' and 'inverted' variants from the "Card" component.)
	 */
	theme: PropTypes.oneOf(['light', 'dark']),
	/*
	 * Choose between three visual styles for the card.
	 */
	variant: PropTypes.oneOf(['default', 'raised', 'inverted']),
	/*
	 * Legacy prop, use the "p" prop instead. Control the inner spacing of the card
	 */
	spacing: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
	]),
	/*
	 * Control the inner spacing of the card
	 */
	p: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
	]),
	/*
	 * Control the font size of the card contents
	 */
	fontSize: PropTypes.string,
	/*
	 * Control whether the Card should be rendered in the
	 * DOM when the `isOpen` prop is `false`. This might be
	 * needed to meet accessibility requirements.
	 */
	renderWhenClosed: PropTypes.bool,
	/*
	 * Ignore pointer events on the card.
	 */
	ignorePointerEvents: PropTypes.bool,
	/*
	 * By default (if set to `false`), the card will be rendered
	 * into the body of the page via a portal. Set this to `true`
	 * to render it in place like a regular component instead.
	 */
	renderInPlace: PropTypes.bool,
	/*
	 * A function that will recalculate the popover's position.
	 * Must return a promise.
	 */
	onUpdatePopover: PropTypes.func,
	/*
	 * Used to pass a React ref to the scrolling container within
	 * the card.
	 */
	scrollContainerRef: PropTypes.object,
};

// @component
export default PopoverCard;
