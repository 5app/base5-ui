import React from 'react';
import PropTypes from 'prop-types';

import TableCell from './TableCell';
import TableRowHeader from './TableRowHeader';

function TableBodyCell({children, isHeader, title, ...otherProps}) {
	if (isHeader) {
		return <TableRowHeader {...otherProps}>{children}</TableRowHeader>;
	}
	return (
		<TableCell {...otherProps} data-columnheader={title}>
			{children}
		</TableCell>
	);
}

TableBodyCell.propTypes = {
	isHeader: PropTypes.bool,
	title: PropTypes.string.isRequired,
	hideBelowBreakpoint: PropTypes.string,
};

export default TableBodyCell;
