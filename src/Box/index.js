import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
	positionProps,
	displayProps,
	flexProps,
	marginProps,
	paddingProps,
	borderProps,
	textProps,
} from '../styleProps';

const Box = styled.div`
	${positionProps}
	${displayProps}
	${flexProps}
	${marginProps}
	${paddingProps}
	${borderProps}
	${textProps}
`;

Box.propTypes = {
	position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed']),
	display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
	border: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	flexAlign: PropTypes.oneOf(['top', 'left', 'center', 'bottom', 'right']),
	basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	grow: PropTypes.bool,
	shrink: PropTypes.bool,
	bold: PropTypes.bool,
	caps: PropTypes.oneOfType([
		PropTypes.oneOf(['all', 'first']),
		PropTypes.bool,
	]),
	dimmed: PropTypes.bool,
	fontSize: PropTypes.string,
	lineHeight: PropTypes.number,
	overflow: PropTypes.oneOf(['ellipsis', 'wrap']),
	textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

// @component
export default Box;
