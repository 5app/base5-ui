import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {getSpacing, createStyleFunction} from '../utils';

import Box from '../Box';
import Hidden from '../Hidden';

export const spacingCompensationProp = createStyleFunction([
	{
		styleProp: 'compensateSpacing',
		properties: ['marginBottom'],
		getValue: (value, theme) => `-${getSpacing(value, theme)}`,
	},
]);

/**
 * Using a pseudo element to compensate for the spacing
 * between items (instead of negative margin) to allow
 * for the wrapper to seamlessly accept any `Box` props.
 * E.g., if a negative margin-top was used instead, it would
 * clash with the `mt` prop.
 */
const Wrapper = styled(Box).withConfig({
	shouldForwardProp: prop => prop !== 'compensateSpacing',
})`
	&::before {
		content: '';
		display: block;
		height: 0;
		${spacingCompensationProp}
	}
`;

const roles = {
	default: {
		wrapper: 'div',
		item: 'div',
	},
	list: {
		wrapper: 'ul',
		item: 'li',
	},
};

function getHiddenChildProps(child) {
	if (typeof child === 'object' && child.type === Hidden) {
		return child.props;
	} else return null;
}

function Stack({children, spacing, breakpoints, as, ...otherProps}) {
	const wrapperAs = roles[as]?.wrapper;
	const itemAs = roles[as]?.item;
	return (
		<Wrapper
			{...otherProps}
			compensateSpacing={spacing}
			as={wrapperAs}
			breakpoints={breakpoints}
		>
			{React.Children.map(children, child => {
				if (!child) return null;

				const hiddenChildProps = getHiddenChildProps(child);

				const Component = hiddenChildProps ? Hidden : Box;

				return (
					<Component
						as={itemAs}
						above={hiddenChildProps?.above}
						below={hiddenChildProps?.below}
						pt={spacing}
						breakpoints={breakpoints}
					>
						{hiddenChildProps ? hiddenChildProps.children : child}
					</Component>
				);
			})}
		</Wrapper>
	);
}

Stack.defaultProps = {
	as: 'default',
};

Stack.propTypes = {
	/**
	 * Control the spacing between Stack items. Can be an array
	 * of responsive values when used alongside the `breakpoints` prop
	 */
	spacing: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
	]),
	/**
	 * Breakpoints to use when responsive spacing values are provided
	 */
	breakpoints: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
	]),
	/**
	 * Control the HTML elements to be used for the Stack item.
	 * Defaults to `div`, choose `list` to use `ul` and `li`
	 */
	as: PropTypes.oneOf(['list', 'default']),
};

// @component
export default Stack;
