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

function getColumnConfigFromChildren(children) {
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

export default getColumnConfigFromChildren;
