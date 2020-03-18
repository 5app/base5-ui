import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {getSpacing} from '../utils';

import {positionProps, sizeProps, textProps} from '../styleProps';

const Item = styled.li`
	display: ${p => p.display || 'inline-block'};
	max-width: 100%;
`;
Item.propTypes = {
	display: PropTypes.oneOf(['inline', 'inline-block']),
};

const getSpacingFromTheme = p => getSpacing(p.spacing, p.theme);

const Wrapper = styled.ul`
	${positionProps}
	list-style: none;
	margin: 0;
    padding: 0;

	${p =>
		p.spacing &&
		css`
			/* Compensate for Item's padding */
			margin-left: -${getSpacingFromTheme};
			margin-bottom: -${getSpacingFromTheme};
		`}

	${sizeProps}
	${textProps}

	& > ${Item} {
		vertical-align: ${p => p.align || 'top'};

		${p =>
			p.spacing &&
			css`
				padding-left: ${getSpacingFromTheme};
				padding-bottom: ${getSpacingFromTheme};
			`}

		${p =>
			p.splitBy === 'comma' &&
			css`
				&:not(:last-of-type)::after {
					content: ',';
					margin-right: 0.3em;
				}
			`}

		${p =>
			p.splitBy === 'dot' &&
			css`
				&:not(:last-of-type)::after {
					content: '·';
					margin: 0 0.35em;
				}
			`}
	}
`;

const InlineList = ({as, itemAs, children, display, ...otherProps}) => {
	return (
		<Wrapper as={as} {...otherProps}>
			{React.Children.map(children, (child, i) => {
				if (child) {
					return (
						<Item key={i} as={itemAs} display={display}>
							{child}
						</Item>
					);
				}
			})}
		</Wrapper>
	);
};
InlineList.defaultProps = {
	as: 'ul',
	itemAs: 'li',
};
InlineList.propTypes = {
	/**
	 * Vertical alignment of list items
	 */
	align: PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline']),
	as: PropTypes.elementType,
	itemAs: PropTypes.elementType,
	/**
	 * Change the display prop of each wrapped Item, must be either
	 * 'inline-block' (default) or 'inline'. The latter is useful to
	 * allow line-breaks within items
	 */
	display: PropTypes.oneOf(['inline', 'inline-block']),
	/**
	 * Spacing as t-shirt theme value or number (pixels)
	 */
	spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	splitBy: PropTypes.oneOf(['comma', 'dot']),
};

InlineList.Wrapper = Wrapper;
InlineList.Item = Item;

// @component
export default InlineList;
