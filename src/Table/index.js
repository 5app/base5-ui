import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {useSize} from 'react-hook-size';

import {pxToRem} from '../utils/units';
import {alpha} from '../utils/colors';
import {borderValue} from '../mixins';
import {positionProps, marginProps} from '../styleProps';
import {getSpacing} from '../utils/spacing';

import Box from '../Box';
import Text from '../Text';

import getColumnsToHide from './getColumnsToHide';
import getColumnConfigFromChildren from './getColumnConfigFromChildren';

const StyledTable = styled.table`
	position: relative;
	${positionProps}
	display: table;
	table-layout: fixed;
	border-spacing: 0;
	line-height: 1.3;

	${marginProps}

	width: 100%;

	tr:hover {
		background-color: ${p =>
			alpha(p.theme.shade, Number(p.theme.shadeStrength) / 2)};
	}

	td,
	th {
		font-weight: inherit;
		text-align: left;
		height: ${p => pxToRem(p.rowMinHeight)};
		padding: ${p => p.theme.globals.spacing.xxs}
			${p => p.theme.globals.spacing.xs};
	}

	thead th {
		position: sticky;
		top: 0;
		z-index: ${p => p.theme.globals.z.raised};
		background-color: ${p => p.theme.background};

		/**
		* MS Edge shows glitchy rendering when using a normal
		* border on sticky table headers, so we're using a
		* pseudo-element instead
		*/
		&::after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: ${p => p.theme.globals.z.below};
			border-bottom: ${p => borderValue(p.theme)};
			${p =>
				p.shadedHeader &&
				css`
					background-color: ${alpha(
						p.theme.shade,
						p.theme.shadeStrength
					)};
				`}
		}
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
	shadedHeader,
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
			<StyledTable
				shadedHeader={shadedHeader}
				rowMinHeight={rowMinHeight}
				role="table"
				{...otherProps}
			>
				{/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
				<thead role="rowgroup">
					<tr role="row">
						{columns.map(column => {
							const {name, subtitle, width} = column;
							return (
								<th
									hidden={hiddenColumns.includes(name)}
									key={name}
									scope="col"
									role="columnheader"
									style={width ? {width} : null}
								>
									{headerRenderer(column)}
									{subtitle && (
										<Text dimmed size="xs" display="block">
											{subtitle}
										</Text>
									)}
								</th>
							);
						})}
					</tr>
				</thead>
				{/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
				<tbody role="rowgroup">
					{data.map(item => (
						<tr key={item.id} role="row">
							{columns.map(column => {
								const {
									allowLineBreaks,
									cellRenderer,
									isHeading,
									name,
								} = column;

								const element = isHeading ? 'th' : 'td';
								const isHidden = hiddenColumns.includes(name);
								return (
									<Box
										key={name}
										hidden={isHidden}
										as={element}
										role={isHeading ? 'rowheader' : 'cell'}
										scope={isHeading ? 'row' : null}
										overflow={
											allowLineBreaks
												? 'wrap'
												: 'ellipsis'
										}
									>
										{getCellContent(
											item,
											cellRenderer || name
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
	columns: PropTypes.arrayOf(PropTypes.shape(columnPropsShape)),
	data: PropTypes.array.isRequired,
	pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rowMinHeight: PropTypes.number,
	shadedHeader: PropTypes.bool,
};

const columnPropsShape = {
	allowLineBreaks: PropTypes.bool,
	cellRenderer: PropTypes.func,
	isHeading: PropTypes.bool,
	minWidth: PropTypes.number,
	name: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

function Column() {
	return null;
}
Column.displayName = 'Column';
Column.propTypes = columnPropsShape;

export {Column};
export default Table;
