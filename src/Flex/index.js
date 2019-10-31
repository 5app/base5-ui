import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
	positionProps,
	borderProps,
	marginProps,
	paddingProps,
	textProps,
} from '../styleProps';

import {alignMap} from '../styleProps/flexProps';

import Box from '../Box';

const Flex = styled.div`
	${positionProps}
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
		height: 100%;
	`}

	align-items: ${p => alignMap[p.align] || p.align};

	${marginProps}
	${paddingProps}
	${borderProps}
	${textProps}
`;

Flex.defaultProps = {
	align: 'center',
};

Flex.propTypes = {
	/** Align children on the cross axis */
	align: PropTypes.oneOf([
		'top',
		'left',
		'center',
		'bottom',
		'right',
		'stretch',
	]),
	/** Arrange children in a column instead of a row.
	 * Setting this also sets the wrapper's height to `100%` */
	column: PropTypes.bool,
	/** Allow children to take up more than one row */
	wrap: PropTypes.bool,
};

export {Box};

// @component
export default Flex;
