import React from 'react';
import PropTypes from 'prop-types';

import {GroupLabel} from '../MenuList';
import useUniqueId from '../useUniqueId';

const MenuItemGroup = ({label, id, children}) => {
	const uniqueId = useUniqueId(id);

	return (
		<div aria-labelledby={uniqueId} role="group">
			<GroupLabel id={uniqueId}>{label}</GroupLabel>
			{children}
		</div>
	);
};

MenuItemGroup.propTypes = {
	/**
	 * Define the content of the menu item group
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Define a label for the menu item group
	 */
	label: PropTypes.string.isRequired,
	/**
	 *Define an id for the menu item group
	 */
	id: PropTypes.string,
};

export default MenuItemGroup;
