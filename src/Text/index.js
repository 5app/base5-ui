import PropTypes from 'prop-types';
import styled from 'styled-components';

import {textProps, spacingProps} from '../styleProps';

const Text = styled.span`
	${props => textProps({
		...props,
		textAlign: props.align,
		fontSize: props.size,
	})}
	${spacingProps}
`;

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
