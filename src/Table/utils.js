import {Children} from 'react';

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
