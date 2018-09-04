import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Item = styled.li`
	display: inline-block;
	max-width: 100%;
`;

const Wrapper = styled.ul`
	list-style: none;
	margin: 0;
    padding: 0;
	margin-left: 0;

	${p => p.spacing && css`
		/* Compensate for Item's padding */
		margin-left: -${p => p.theme.globals.spacing[p.spacing]};
		margin-bottom: -${p => p.theme.globals.spacing[p.spacing]};
	`}

	& > ${Item} {
		vertical-align: ${p => p.align || 'top'};

		${p => p.spacing && css`
			padding-left: ${p => p.theme.globals.spacing[p.spacing]};
			padding-bottom: ${p => p.theme.globals.spacing[p.spacing]};
		`}

		${p => p.splitByComma && css`
			&:not(:last-of-type)::after {
				content: ',';
				margin-right: 0.3em;
			}
		`}

		${p => p.splitByDot && css`
			&:not(:last-of-type)::after {
				content: '·';
				margin: 0 0.35em;
			}
		`}
	}
`;
Wrapper.propTypes = {
	align: PropTypes.string,
	spacing: PropTypes.string,
	splitByComma: PropTypes.bool,
	splitByDot: PropTypes.bool,
};

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

InlineList.Wrapper = Wrapper;
InlineList.Item = Item;

export default InlineList;
