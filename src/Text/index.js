import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	displayProps,
	textProps,
	marginProps,
	paddingProps,
} from '../styleProps';

const Text = styled.span`
	${displayProps}
	${props =>
		textProps({
			...props,
			textAlign: props.align || props.textAlign,
			fontSize: props.size || props.fontSize,
		})}
	${marginProps}
	${paddingProps}
`;

Text.propTypes = {
	bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
	caps: PropTypes.oneOfType([
		PropTypes.oneOf(['all', 'first', 'none']),
		PropTypes.array,
	]),
	dimmed: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
	display: PropTypes.oneOfType([
		PropTypes.oneOf(['block', 'inline', 'inline-block']),
		PropTypes.array,
	]),
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
export default Text;
