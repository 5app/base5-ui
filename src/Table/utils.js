import {Children} from 'react';
import {css} from 'styled-components';

import {getSolidBackgroundShade, getLength, getSpacing} from '../utils';

/**
 * Get the table's column configuration via JSX from
 * its `children` prop, instead of as a JS object via
 * the `columns` prop
 *
 * @param {Array} children - Table column configuration,
 * must be made of Column components as exported by the
 * Table component
 *
 * @returns {object} Table config as object
 */

export function getColumnConfigFromChildren(children) {
	return Children.map(children, child => {
		if (child && child.type.displayName === 'Column') {
			return child.props;
		} else if (child) {
			console.warn(
				'The Table component only accepts children that are instances of the Column component.'
			);
		}
	}).filter(column => Boolean(column));
}

/**
 * Uses either the column's name or its cellRenderer
 * to access a cell's data. If no cellRenderer is proviced,
 * the name of the column is used.
 *
 * @param {object} item
 * @param {string|Function} key
 */

export function getCellContent(item, key) {
	if (typeof key === 'string') {
		return item[key] || item[key.toLowerCase()] || null;
	}
	return key(item);
}

/**
 * Returns the name or title of the passed column.
 *
 * @param {object} column
 * @param {string} name
 */

export function getColumnName(column) {
	return column.name || column.title;
}

export const headerBackgroundColor = css`
	background-color: ${p =>
		p.shadedHeader ? getSolidBackgroundShade(p.theme) : p.theme.background};
`;

export function getBreakpoint(key) {
	return p => (p[key] ? p.theme.globals.breakpoints[p[key]] : '0px');
}

export const DEFAULT_LEFT_CELL_PADDING = 's';
export const CHECKBOX_CELL_WIDTH = 20;

export function getCheckboxColumnWidth(p) {
	const width = getLength(CHECKBOX_CELL_WIDTH);
	const padding = getSpacing(p.pl || DEFAULT_LEFT_CELL_PADDING, p.theme);
	return `calc(${width} + ${padding})`;
}
