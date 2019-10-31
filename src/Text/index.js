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
	bold: PropTypes.bool,
	caps: PropTypes.oneOfType([
		PropTypes.oneOf(['all', 'first']),
		PropTypes.bool,
	]),
	dimmed: PropTypes.bool,
	display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
	fontSize: PropTypes.string,
	lineHeight: PropTypes.number,
	overflow: PropTypes.oneOf(['ellipsis', 'wrap']),
	textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

// @component
export default Text;
