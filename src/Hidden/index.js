import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import Box from '../Box';
import {visuallyHidden} from '../mixins';

const propsToFilter = ['above', 'below', 'accessible'];

function getBreakpoint(key, props) {
	return props.theme?.globals?.breakpoints?.[key] || key;
}

const InnerHidden = styled(Box).withConfig({
	shouldForwardProp: prop => !propsToFilter.includes(prop),
})`
	${p =>
		p.below &&
		css`
			@media (max-width: ${getBreakpoint(p.below, p)}) {
				${p.accessible ? visuallyHidden : `display: none;`}
			}
		`}
	${p =>
		p.above &&
		css`
			@media (min-width: ${getBreakpoint(p.above, p)}) {
				${p.accessible ? visuallyHidden : `display: none;`}
			}
		`}
`;

const Hidden = forwardRef((props, ref) => {
	const {above, below, as, accessible, inline, children, ...otherProps} =
		props;

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
			accessible={accessible}
		>
			{children}
		</InnerHidden>
	);
});

Hidden.displayName = 'Hidden';

Hidden.propTypes = {
	/**
	 * Keep the hidden content accessible to users
	 * of screen readers
	 */
	accessible: PropTypes.bool,
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
