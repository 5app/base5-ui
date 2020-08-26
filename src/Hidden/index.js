import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../Box';

const propsToFilter = ['above', 'below'];

const InnerHidden = styled(Box).withConfig({
	shouldForwardProp: prop => !propsToFilter.includes(prop),
})`
	${p =>
		p.below &&
		`
		@media (max-width: ${p.theme?.globals?.breakpoints?.[p.below] || p.below}) {
			display: none;
		}
	`}
	${p =>
		p.above &&
		`
		@media (min-width: ${p.theme?.globals?.breakpoints?.[p.above] || p.above}) {
			display: none;
		}
	`}
`;

const Hidden = forwardRef((props, ref) => {
	const {above, below, as, inline, children, ...otherProps} = props;

	if (!above && !below) {
		console.warn(
			'The Hidden component must be called with either one (or both) of the `above` or `below` props'
		);
	}

	return (
		<InnerHidden
			{...otherProps}
			ref={ref}
			as={inline ? 'span' : as}
			above={above}
			below={below}
		>
			{children}
		</InnerHidden>
	);
});

Hidden.displayName = 'Hidden';

Hidden.propTypes = {
	/**
	 * Breakpoint above which the component's content
	 * should be hidden
	 */
	above: PropTypes.string,
	/**
	 * Breakpoint below which the component's content
	 * should be hidden
	 */
	below: PropTypes.string,
	/**
	 * Render the element as a `span` instead of the default `div`.
	 * Use the `as` prop for more control.
	 */
	inline: PropTypes.bool,
};

// @component
export default Hidden;
