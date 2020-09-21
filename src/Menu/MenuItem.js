import React, {useContext, useRef} from 'react';
import PropTypes from 'prop-types';

import mergeCallbacks from '../utils/mergeCallbacks';

import * as MenuListUI from '../MenuList';

import {MenuContext} from './Menu';

function MenuItem({icon, isDisabled, onClick, children}) {
	const itemRef = useRef();
	const {itemList} = useContext(MenuContext);
	const {
		id,
		select,
		highlight,
		useHighlighted,
		clearHighlightedItem,
	} = itemList.useItem({
		ref: itemRef,
		text: children,
		value: children,
	});

	return (
		<MenuListUI.Item
			ref={itemRef}
			id={id}
			role="menuitem"
			aria-disabled={isDisabled ? 'true' : null}
			onClick={mergeCallbacks(select, onClick)}
			onMouseEnter={highlight}
			onMouseLeave={clearHighlightedItem}
		>
			<MenuListUI.Link
				forwardedAs="span"
				isDisabled={isDisabled}
				isHighlighted={useHighlighted()}
			>
				{icon && <MenuListUI.ItemIcon name={icon} />}
				{children}
			</MenuListUI.Link>
		</MenuListUI.Item>
	);
}

MenuItem.propTypes = {
	/**
	 * Define the label of the menu item
	 */
	children: PropTypes.string.isRequired,
	/**
	 * Define the action to be performed when
	 * the item is selected
	 */
	onClick: PropTypes.func.isRequired,
	/**
	 * Define an icon for the menu item
	 */
	icon: PropTypes.string,
	/**
	 * Disable the menu item
	 */
	isDisabled: PropTypes.bool,
};

// @component
export default MenuItem;
