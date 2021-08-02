import React, {forwardRef} from 'react';

import Box from '../../Box';

import {useTableContext} from './TableContext';
import TableCell from './TableCell';
import {Wrapper as ColumnHeaderCell} from './TableColumnHeader';

const TableCheckboxCell = forwardRef(
	({children, isHeader, ...otherProps}, ref) => {
		const {mobileViewBreakpoint} = useTableContext();
		if (isHeader) {
			return (
				<ColumnHeaderCell
					{...otherProps}
					isCheckbox
					ref={ref}
					scope="col"
					width={20}
				>
					<Box display="flex">{children}</Box>
				</ColumnHeaderCell>
			);
		}
		return (
			<TableCell isCheckbox {...otherProps} ref={ref}>
				<Box
					display="flex"
					alignItems={['top', 'center']}
					height="100%"
					breakpoints={mobileViewBreakpoint}
				>
					{children}
				</Box>
			</TableCell>
		);
	}
);

TableCheckboxCell.displayName = 'TableCheckboxCell';

export default TableCheckboxCell;
