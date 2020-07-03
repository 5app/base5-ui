import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Hidden from '../Hidden';

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

function invertPrimitive(spacing) {
	if (!spacing) return null;
	if (typeof spacing === 'number') {
		return spacing * -1;
	} else return `-${spacing}`;
}

function getNegativeSpacing(spacing) {
	if (Array.isArray(spacing)) {
		return spacing.map(invertPrimitive);
	} else {
		return invertPrimitive(spacing);
	}
}

function Stack({children, spacing, breakpoints, as, ...otherProps}) {
	const wrapperAs = roles[as]?.wrapper;
	const itemAs = roles[as]?.item;
	return (
		<Box
			{...otherProps}
			mb={getNegativeSpacing(spacing)}
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
						pb={spacing}
						breakpoints={breakpoints}
					>
						{hiddenChildProps ? hiddenChildProps.children : child}
					</Component>
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
