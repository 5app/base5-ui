import React from 'react';

import Box from '../../Box';

import TableCell from './TableCell';
import {Wrapper as ColumnHeaderCell} from './TableColumnHeader';

function TableCheckboxCell({children, isHeader, ...otherProps}) {
	if (isHeader) {
		return (
			<ColumnHeaderCell {...otherProps} scope="col" width={40}>
				<Box display="flex">{children}</Box>
			</ColumnHeaderCell>
		);
	}
	return (
		<TableCell {...otherProps}>
			<Box display="flex">{children}</Box>
		</TableCell>
	);
}

export default TableCheckboxCell;
