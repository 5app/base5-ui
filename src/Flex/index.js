import styled from 'styled-components';
import PropTypes from 'prop-types';

import {marginProps, paddingProps} from '../styleProps';
import {alignMap} from '../styleProps/flexProps';

import Box from '../Box';

const Flex = styled.div`
	display: flex;

	${p =>
		p.wrap &&
		`
		flex-wrap: wrap;
	`}

	${p =>
		p.column &&
		`
		flex-direction: column;
		align-items: stretch;

		height: 100%;
	`}

	align-items: ${p => alignMap[p.alignItems] || p.alignItems};

	${marginProps}
	${paddingProps}
`;

Flex.defaultProps = {
	align: 'center',
};

Flex.propTypes = {
	/** Align children on the cross axis */
	alignItems: PropTypes.oneOf(['top', 'left', 'center', 'bottom', 'right']),
	/** Arrange children in a column instead of a row.
	 * Setting this also sets the wrapper's height to `100%` */
	column: PropTypes.bool,
	/** Allow children to take up more than one row */
	wrap: PropTypes.bool,
};

export {Box};

export default Flex;
