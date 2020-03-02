import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

function Flex({wrap, column, align, children, ...otherProps}) {
	return (
		<Box
			display="flex"
			wrapItems={wrap}
			stackItems={column}
			alignItems={align}
			{...otherProps}
		>
			{children}
		</Box>
	);
}

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
	/** Arrange children in a column instead of a row. */
	column: PropTypes.bool,
	/** Allow children to take up more than one row */
	wrap: PropTypes.bool,
};

export {Box};

// @component
export default Flex;
