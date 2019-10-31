import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {getSpacing} from '../utils/spacing';

const Item = styled.li`
	display: inline-block;
	max-width: 100%;
`;

const getSpacingFromTheme = p => getSpacing(p.spacing, p.theme);

const Wrapper = styled.ul`
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

const InlineList = ({children, ...otherProps}) => {
	return (
		<Wrapper {...otherProps}>
			{React.Children.map(children, (child, i) => {
				if (child) {
					return <Item key={i}>{child}</Item>;
				}
			})}
		</Wrapper>
	);
};
InlineList.propTypes = {
	/**
	 * Vertical alignment of list items
	 */
	align: PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline']),
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
