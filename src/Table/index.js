import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {useSize} from 'react-hook-size';

import {pxToRem} from '../utils/units';
import {alpha, mix} from '../utils/colors';
import {borderValue, overflowWrap} from '../mixins';
import {positionProps, marginProps} from '../styleProps';
import {getSpacing} from '../utils/spacing';

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

	${p =>
		!p.isMobileView &&
		css`
			/* Highlight table row on hover and focus within */
			tr:hover {
				background-color: ${p =>
					alpha(p.theme.shade, Number(p.theme.shadeStrength) / 2)};
			}
			tr:focus-within {
				background-color: ${p =>
					alpha(p.theme.shade, Number(p.theme.shadeStrength) / 2)};
			}
		`}

	td,
	th {
		font-weight: inherit;
		text-align: left;
		height: ${p => pxToRem(p.rowMinHeight)};
		padding: ${p => p.theme.globals.spacing.xxs}
			${p => p.theme.globals.spacing.s};
		padding-right: 0;

		${overflowWrap}
	}

	thead th {
		position: sticky;
		top: ${p => p.stickyHeaderOffset};
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
		!p.isMobileView &&
		css`
			th:first-child,
			td:first-child {
				padding-left: ${getSpacing(p.pl, p.theme)};
			}
		`}

	${p =>
		p.pr &&
		!p.isMobileView &&
		css`
			th:last-child,
			td:last-child {
				padding-right: ${getSpacing(p.pr, p.theme)};
			}
		`}

	${p =>
		p.isMobileView &&
		css`
			/* Hide the column headers. We'll add them back
			 * in inside of each (non-header) cell. */
			thead {
				display: none;
			}

			/* Remove table layout. */
			table,
			tbody,
			th,
			td {
				display: block;
			}

			tr {
				/* Using flex allows us to modify the order of children
				 * so we can display the row's header at the top */
				display: flex;
				flex-direction: column;

				/* Add some padding for nicer spacing in the content area */
				padding-bottom: ${p => p.theme.globals.spacing.xs};
				background-color: ${p =>
					mix(p.theme.shade)(
						p.theme.background,
						p.theme.shadeStrength
					)};
				border-top: ${p => borderValue(p.theme)};
			}

			th {
				display: flex;
				align-items: center;
				font-weight: bold;
				background-color: ${p => p.theme.background};
				/* Make sure to display the header at the top */
				order: -1;
				/* Visually, this is the top spacing of the content area */
				margin-bottom: ${p => p.theme.globals.spacing.xs};
			}

			td {
				/* Don't use the specified row height in mobile view */
				height: auto;
				display: flex;
				font-weight: bold;

				/* Add columns headers as inline labels
				 * The parent's display: flex ensures clean
				 * content line breaks */
				&::before {
					content: attr(data-columnheader) ': ';
					margin-right: ${p => p.theme.globals.spacing.xs};
					font-weight: normal;
					white-space: nowrap;
				}
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

// Note about roles: The table is marked up using roles
// that are seemingly redundant. This is done so that the
// styles of the mobile view don't remove the table's semantics,
// which they'd otherwise do. Explicit roles ensure that
// semantics aren't affected by the styles.

function Table({
	children,
	columns: columnsProp,
	data,
	headerRenderer,
	stickyHeaderOffset,
	canHideColumns,
	minWidth,
	rowMinHeight,
	shadedHeader,
	...otherProps
}) {
	const ref = useRef();
	const {width} = useSize(ref);
	const columns = children
		? getColumnConfigFromChildren(children)
		: columnsProp;

	const hiddenColumns = getColumnsToHide(columns, width);
	const isMobileView =
		width < minWidth || (!canHideColumns && hiddenColumns.length > 0);

	return (
		<div ref={ref}>
			<StyledTable
				stickyHeaderOffset={stickyHeaderOffset}
				isMobileView={isMobileView}
				rowMinHeight={rowMinHeight}
				shadedHeader={shadedHeader}
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
									hidden={
										!isMobileView &&
										hiddenColumns.includes(name)
									}
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
								const {cellRenderer, isHeading, name} = column;

								const Element = isHeading ? 'th' : 'td';
								const isHidden =
									!isMobileView &&
									hiddenColumns.includes(name);

								return (
									<Element
										key={name}
										hidden={isHidden}
										role={isHeading ? 'rowheader' : 'cell'}
										scope={isHeading ? 'row' : null}
										data-columnheader={name}
									>
										{getCellContent(
											item,
											cellRenderer || name
										)}
									</Element>
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
	minWidth: 500,
	headerRenderer: defaultHeaderRenderer,
	stickyHeaderOffset: 0,
	rowMinHeight: 45,
};

Table.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.shape(columnPropsShape)),
	data: PropTypes.array.isRequired,
	/**
	 * Specify how far from the top the sticky header should be placed.
	 * Use to make sure it's not covered by a navigation bar
	 */
	stickyHeaderOffset: PropTypes.number,
	/**
	 * Specify below which width the mobile view should kick in
	 */
	minWidth: PropTypes.number,
	pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rowMinHeight: PropTypes.number,
	shadedHeader: PropTypes.bool,
};

const columnPropsShape = {
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
