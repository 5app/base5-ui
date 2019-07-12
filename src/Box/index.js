import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
	positionProps,
	flexProps,
	spacingProps,
	borderProps,
	textProps,
} from '../styleProps';

const Box = styled.div`
	${positionProps}
	${flexProps}
	${spacingProps}
	${borderProps}
	${textProps}
`;

Box.propTypes = {
	position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed']),
	border: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	flexAlign: PropTypes.oneOf(['top', 'left', 'center', 'bottom', 'right']),
	basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	grow: PropTypes.bool,
	shrink: PropTypes.bool,
	bold: PropTypes.bool,
	caps: PropTypes.oneOf(['all', 'first']),
	dimmed: PropTypes.bool,
	fontSize: PropTypes.string,
	lineHeight: PropTypes.number,
	overflow: PropTypes.oneOf(['ellipsis', 'wrap']),
	textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Box;
