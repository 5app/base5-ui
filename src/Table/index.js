import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {useSize} from 'react-hook-size';

import {pxToRem} from 'base5-ui/utils/units';
import {alpha} from 'base5-ui/utils/colors';
import {borderValue} from 'base5-ui/mixins';
import {positionProps, marginProps} from 'base5-ui/styleProps';
import {getSpacing} from 'base5-ui/utils/spacing';

import Box from 'base5-ui/Box';
import Text from 'base5-ui/Text';

import getColumnsToHide from './getColumnsToHide';
import getColumnConfigFromChildren from './getColumnConfigFromChildren';

const StyledTable = styled.table`
	position: relative;
	${positionProps}
	display: table;
	table-layout: fixed;
	border-spacing: 0;

	${marginProps}

	width: 100%;

	tr:hover {
		background-color: ${p => alpha(p.theme.shade, p.theme.shadeStrength)};
	}

	td,
	th {
		font-weight: inherit;
		text-align: left;
		height: ${p => pxToRem(p.rowMinHeight)};
		padding: 0 ${p => p.theme.globals.spacing.xs};
	}

	thead th {
		position: sticky;
		top: 0;
		z-index: ${p => p.theme.globals.z.raised};
		background-color: ${p => p.theme.background};
		border-bottom: ${p => borderValue(p.theme)};
	}

	${p =>
		p.pl &&
		css`
			th:first-child,
			td:first-child {
				padding-left: ${getSpacing(p.pl, p.theme)};
			}
		`}

	${p =>
		p.pr &&
		css`
			th:last-child,
			td:last-child {
				padding-right: ${getSpacing(p.pr, p.theme)};
			}
		`}
`;

const defaultHeaderRenderer = column => <Text bold>{column.name}</Text>;

// Uses either the column's name or its cellRenderer
// to access a cell's data. If no cellRenderer is proviced,
// the name of the column is used.
function getCellContent(item, key) {
	if (typeof key === 'string') {
		return item[key] || item[key.toLowerCase()] || 'No entry found';
	}
	return key(item);
}

function Table({
	children,
	columns: columnsProp,
	data,
	headerRenderer = defaultHeaderRenderer,
	rowMinHeight,
	...otherProps
}) {
	const ref = useRef();
	const {width: tableWidth} = useSize(ref);
	const columns = children
		? getColumnConfigFromChildren(children)
		: columnsProp;

	const hiddenColumns = getColumnsToHide(columns, tableWidth);

	return (
		<div ref={ref}>
			<StyledTable rowMinHeight={rowMinHeight} {...otherProps}>
				<thead>
					<tr>
						{columns.map(column => {
							return (
								<th
									hidden={hiddenColumns.includes(column.name)}
									key={column.name}
									scope="col"
									style={
										column.width
											? {width: column.width}
											: null
									}
								>
									{headerRenderer(column)}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{data.map(item => (
						<tr key={item.id}>
							{columns.map(column => {
								const elementToRender = column.isHeading
									? 'th'
									: 'td';
								const isHidden = hiddenColumns.includes(
									column.name
								);
								return (
									<Box
										key={column.name}
										hidden={isHidden}
										as={elementToRender}
										scope={column.isHeading ? 'row' : null}
										overflow={
											column.allowLineBreaks
												? 'wrap'
												: 'ellipsis'
										}
									>
										{getCellContent(
											item,
											column.cellRenderer || column.name
										)}
									</Box>
								);
							})}
						</tr>
					))}
				</tbody>
			</StyledTable>
		</div>
	);
}

Table.defaultProps = {
	rowMinHeight: 45,
};

Table.propTypes = {
	rowMinHeight: PropTypes.number,
	data: PropTypes.array.isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape(columnPropsShape)),
};

const columnPropsShape = {
	isHeading: PropTypes.bool,
	name: PropTypes.string.isRequired,
	cellRenderer: PropTypes.func,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	minWidth: PropTypes.number,
	allowLineBreaks: PropTypes.bool,
};

function Column() {
	return null;
}
Column.displayName = 'Column';
Column.propTypes = columnPropsShape;

export {Column};
export default Table;
