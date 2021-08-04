import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import TableCell from './TableCell';
import TableRowHeader from './TableRowHeader';

const TableBodyCell = forwardRef(
	({children, isHeader, title, ...otherProps}, ref) => {
		if (isHeader) {
			return (
				<TableRowHeader {...otherProps} ref={ref}>
					{children}
				</TableRowHeader>
			);
		}
		return (
			<TableCell {...otherProps} ref={ref} data-columnheader={title}>
				{children}
			</TableCell>
		);
	}
);

TableBodyCell.displayName = 'TableBodyCell';

TableBodyCell.propTypes = {
	isHeader: PropTypes.bool,
	title: PropTypes.string.isRequired,
	hideBelowBreakpoint: PropTypes.string,
};

export default TableBodyCell;
