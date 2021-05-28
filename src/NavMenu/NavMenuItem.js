import React, {useContext, useRef} from 'react';
import PropTypes from 'prop-types';

import mergeCallbacks from '../utils/mergeCallbacks';

import * as MenuListUI from '../MenuList';

import {NavMenuContext} from './NavMenu';

function NavMenuItem({as, children, text, icon, ...otherProps}) {
	const itemRef = useRef();
	const {itemList} = useContext(NavMenuContext);
	const {select, highlight, useHighlighted, clearHighlightedItem} =
		itemList.useItem({
			ref: itemRef,
			text: text || children,
			value: text || children,
		});

	if (typeof children !== 'string' && !text) {
		console.warn(
			'NavMenuItem: The type of the children prop is not "string". Please provide a string-only label to the menu item via the "text" prop.',
			children
		);
	}

	return (
		<MenuListUI.Item>
			<MenuListUI.Link
				{...otherProps}
				ref={itemRef}
				forwardedAs={as}
				isHighlighted={useHighlighted()}
				onClick={mergeCallbacks(select, otherProps.onClick)}
				onFocus={mergeCallbacks(highlight, otherProps.onFocus)}
				onMouseEnter={mergeCallbacks(
					highlight,
					otherProps.onMouseEnter
				)}
				onMouseLeave={mergeCallbacks(
					clearHighlightedItem,
					otherProps.onMouseLeave
				)}
			>
				{icon && <MenuListUI.ItemIcon name={icon} />}
				{children}
			</MenuListUI.Link>
		</MenuListUI.Item>
	);
}

NavMenuItem.propTypes = {
	/**
	 * Change the menu item's element.
	 * Defaults to 'button', but you can change it to e.g. `a` or `Link`
	 */
	as: PropTypes.elementType,
	/**
	 * Define the label of the menu item
	 */
	children: PropTypes.node.isRequired,
	/**
	 * If the `children` prop is not a plain string, a text-only label must be provided
	 * to enable navigating the menu by typing the first letters of the item's label
	 */
	text: PropTypes.string,
	/**
	 * Define an icon for the menu item
	 */
	icon: PropTypes.string,
};

// @component
export default NavMenuItem;
