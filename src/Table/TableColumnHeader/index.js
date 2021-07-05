import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Text';
import {TableCell} from '../styles';
import {getColumnName} from '../utils';
import ClickableHeader from './ClickableHeader';

const ARIA_SORT_LABEL = {
	asc: 'ascending',
	desc: 'descending',
};

function TableColumnHeader({
	children,
	column,
	sort,
	orderLabels,
	onRequestSort,
}) {
	const {hideBelowBreakpoint, subtitle, width} = column;

	const columnName = getColumnName(column);
	const isColumnOrderedBy = sort && columnName === sort.column;

	return (
		<TableCell
			as="th"
			scope="col"
			width={width}
			hideBelowBreakpoint={hideBelowBreakpoint}
			aria-sort={isColumnOrderedBy ? ARIA_SORT_LABEL[sort.order] : null}
		>
			<ClickableHeader
				isActive={isColumnOrderedBy}
				column={column}
				order={sort && sort.order}
				orderLabels={orderLabels}
				onRequestSort={onRequestSort}
			>
				{children}
			</ClickableHeader>
			{subtitle && (
				<Text dimmed size="xs" display="block">
					{subtitle}
				</Text>
			)}
		</TableCell>
	);
}

TableColumnHeader.propTypes = {
	children: PropTypes.node,
	column: PropTypes.shape({
		cellRenderer: PropTypes.func,
		defaultOrder: PropTypes.oneOf(['asc', 'desc']),
		hideBelowBreakpoint: PropTypes.string,
		name: PropTypes.string,
		sortable: PropTypes.bool,
		subtitle: PropTypes.string,
		title: PropTypes.string.isRequired,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}),
	sort: PropTypes.object,
	orderLabels: PropTypes.object,
	onRequestSort: PropTypes.func,
};

export default TableColumnHeader;
