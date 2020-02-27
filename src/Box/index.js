import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
	positionProps,
	displayProps,
	flexProps,
	sizeProps,
	marginProps,
	paddingProps,
	borderProps,
	textProps,
} from '../styleProps';

const Box = styled.div`
	${positionProps}
	${displayProps}
	${flexProps}
	${sizeProps}
	${marginProps}
	${paddingProps}
	${borderProps}
	${textProps}
`;

Box.propTypes = {
	position: PropTypes.oneOfType([
		PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed']),
		PropTypes.array,
	]),
	display: PropTypes.oneOfType([
		PropTypes.oneOf(['block', 'inline', 'inline-block']),
		PropTypes.array,
	]),
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	maxWidth: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	minWidth: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	maxHeight: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	minHeight: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	border: PropTypes.oneOfType([
		PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
		PropTypes.array,
	]),
	flexAlign: PropTypes.oneOfType([
		PropTypes.oneOf(['top', 'left', 'center', 'bottom', 'right']),
		PropTypes.array,
	]),
	basis: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	grow: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
		PropTypes.array,
	]),
	shrink: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
		PropTypes.array,
	]),
	bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
	caps: PropTypes.oneOfType([
		PropTypes.oneOf(['all', 'first']),
		PropTypes.array,
	]),
	dimmed: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
	fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
	overflow: PropTypes.oneOfType([
		PropTypes.oneOf(['ellipsis', 'wrap']),
		PropTypes.array,
	]),
	textAlign: PropTypes.oneOfType([
		PropTypes.oneOf(['left', 'center', 'right']),
		PropTypes.array,
	]),
};

// @component
export default Box;
