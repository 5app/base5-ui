import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

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

function Stack({children, spacing, breakpoints, as, ...otherProps}) {
	const wrapperAs = roles[as]?.wrapper;
	const itemAs = roles[as]?.item;
	return (
		<Box as={wrapperAs} breakpoints={breakpoints} {...otherProps}>
			{React.Children.map(children, (child, index) => {
				const isFirst = index === 0;
				return (
					<Box
						as={itemAs}
						pt={!isFirst && spacing}
						breakpoints={breakpoints}
					>
						{child}
					</Box>
				);
			})}
		</Box>
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
