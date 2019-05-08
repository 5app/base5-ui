import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {textProps, spacingProps} from 'src/styleProps';

const Wrapper = styled.span`
	${props => textProps({
		...props,
		textAlign: props.align,
		fontSize: props.size,
	})}
	${spacingProps}
`;

// This JSX wrapper is only needed to make
// the Docz <Props /> table parsing work.
// It should be removed when the related
// Docz issue has been resolved:
// https://github.com/pedronauck/docz/issues/568

function Text(props) {
	return (
		<Wrapper {...props} />
	);
}

Text.propTypes = {
	bold: PropTypes.bool,
	caps: PropTypes.oneOf([
		'all',
		'first',
	]),
	dimmed: PropTypes.bool,
	fontSize: PropTypes.string,
	lineHeight: PropTypes.number,
	overflow: PropTypes.oneOf([
		'ellipsis',
		'wrap',
	]),
	textAlign: PropTypes.oneOf([
		'left',
		'center',
		'right',
	]),
};

export default Text;
