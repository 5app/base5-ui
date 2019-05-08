import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
	positionProps,
	flexProps,
	spacingProps,
	borderProps,
	textProps,
} from 'src/styleProps';

const Wrapper = styled.div`
	${positionProps}
	${flexProps}
	${spacingProps}
	${borderProps}
	${textProps}
`;

// This JSX wrapper is only needed to make
// the Docz <Props /> table parsing work.
// It should be removed when the related
// Docz issue has been resolved:
// https://github.com/pedronauck/docz/issues/568

function Box(props) {
	return (
		<Wrapper {...props} />
	);
}

Box.propTypes = {
	position: PropTypes.oneOf([
		'static',
		'relative',
		'absolute',
		'fixed',
	]),
	border: PropTypes.oneOf([
		'top',
		'right',
		'bottom',
		'left',
	]),
	flexAlign: PropTypes.oneOf([
		'top',
		'left',
		'center',
		'bottom',
		'right',
	]),
	basis: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	grow: PropTypes.bool,
	shrink: PropTypes.bool,
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

export default Box;