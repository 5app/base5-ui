import React, {createContext, useContext, forwardRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {getSpacing, createStyleFunction, getPropFilter} from '../utils';

import Box from '../Box';
import Divider from '../Divider';
import Hidden from '../Hidden';

const spacingCompensationProp = createStyleFunction([
	{
		styleProp: 'compensateSpacing',
		properties: ['marginBottom'],
		getValue: (value, theme) => `-${getSpacing(value, theme)}`,
	},
]);

const dividerCompensationProp = createStyleFunction([
	{
		styleProp: 'compensateSpacing',
		properties: ['marginBottom'],
		getValue: (value, theme) => {
			const spacing = getSpacing(value, theme);
			if (Number(spacing) === 0) {
				return '-1px';
			} else {
				return `calc(-${spacing} * 2 - 1px)`;
			}
		},
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
	shouldForwardProp: getPropFilter(['compensateSpacing', 'withDividers']),
})`
	${p =>
		p.withDividers &&
		`
		overflow: hidden;
	`}

	&::before {
		content: '';
		display: block;
		height: 0;
		${p =>
			p.withDividers ? dividerCompensationProp : spacingCompensationProp}
	}
`;

function getRoles(as) {
	switch (as) {
		case 'list':
			return ['ul', 'li'];
		case 'ordered-list':
			return ['ol', 'li'];
		default:
			return ['div', 'div'];
	}
}

function getHiddenChildProps(child) {
	if (typeof child === 'object' && child.type === Hidden) {
		return child.props;
	} else return null;
}

function Stack({
	children,
	spacing,
	withDividers,
	breakpoints,
	as,
	...otherProps
}) {
	const [wrapperAs, itemAs] = getRoles(as);

	return (
		<Wrapper
			{...otherProps}
			withDividers={withDividers}
			compensateSpacing={spacing}
			as={wrapperAs}
			breakpoints={breakpoints}
		>
			{React.Children.map(children, child => {
				if (!child) return null;

				const hiddenChildProps = getHiddenChildProps(child);

				const Component = hiddenChildProps ? Hidden : Box;

				if (hiddenChildProps?.inline || hiddenChildProps?.as) {
					console.warn(
						"The props `inline` or `as` are not valid on a Hidden component that's inside of a Stack. The element used will be determined by the Stack."
					);
				}

				return (
					<Component
						as={itemAs}
						above={hiddenChildProps?.above}
						below={hiddenChildProps?.below}
						pt={spacing}
						breakpoints={breakpoints}
					>
						{withDividers && <Divider mb={spacing} />}
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
	 * Add dividers between each Stack item
	 */
	withDividers: PropTypes.bool,
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
	 * Choose `list` or `ordered-list` to use `ul`/`ol` and `li` elements.
	 */
	as: PropTypes.oneOf(['list', 'ordered-list', 'default']),
};

const StandaloneStackContext = createContext();

const StackWrapper = forwardRef(
	(
		{children, as, spacing, withDividers, breakpoints, ...otherProps},
		ref
	) => {
		const [wrapperAs, itemAs] = getRoles(as);
		return (
			<Wrapper
				{...otherProps}
				ref={ref}
				as={wrapperAs}
				compensateSpacing={spacing}
				withDividers={withDividers}
				breakpoints={breakpoints}
			>
				<StandaloneStackContext.Provider
					value={{as: itemAs, spacing, breakpoints, withDividers}}
				>
					{children}
				</StandaloneStackContext.Provider>
			</Wrapper>
		);
	}
);

StackWrapper.displayName = 'StackWrapper';

const StackItem = forwardRef(
	(
		{children, hiddenAbove, hiddenBelow, allowUnknownProps, ...otherProps},
		ref
	) => {
		const {as, spacing, withDividers, breakpoints} = useContext(
			StandaloneStackContext
		);

		const Component = hiddenAbove || hiddenBelow ? Hidden : Box;

		return (
			<Component
				{...(allowUnknownProps ? otherProps : undefined)}
				ref={ref}
				as={as}
				pt={spacing}
				below={hiddenBelow}
				above={hiddenAbove}
				breakpoints={breakpoints}
			>
				{withDividers && <Divider mb={spacing} />}
				{children}
			</Component>
		);
	}
);

StackItem.displayName = 'StackItem';

export {StackWrapper, StackItem};

export default Stack;
