import React, {useRef, useContext} from 'react';
import PropTypes from 'prop-types';

import * as MenuListUI from '../MenuList';

import {ComboboxContext} from './Combobox';

function ComboboxMenuItem({value, text, icon, isDisabled, children}) {
	const itemRef = useRef();
	const {itemList} = useContext(ComboboxContext);
	const {
		id,
		select,
		selected,
		highlight,
		useHighlighted,
		clearHighlightedItem,
	} = itemList.useItem({
		ref: itemRef,
		value: value ?? children,
		text: text || children,
		disabled: isDisabled,
	});

	return (
		<MenuListUI.Item
			ref={itemRef}
			id={id}
			role="option"
			aria-selected={selected ? 'true' : null}
			aria-disabled={isDisabled ? 'true' : null}
			onClick={select}
			onMouseEnter={highlight}
			onMouseLeave={clearHighlightedItem}
		>
			<MenuListUI.Link
				forwardedAs="span"
				isActive={selected}
				isDisabled={isDisabled}
				isHighlighted={useHighlighted()}
			>
				{icon && <MenuListUI.ItemIcon name={icon} />}
				{children}
			</MenuListUI.Link>
		</MenuListUI.Item>
	);
}

ComboboxMenuItem.propTypes = {
	/**
	 * The value associated with this menu item.
	 * If not specified, the content of the `children`
	 * prop will be used if it is a simple string.
	 */
	value: PropTypes.string,
	/**
	 * The rendered label of the menu item. Can include
	 * other React components or text formatting, in which
	 * case a plain-text representation must be passed to
	 * the `text` prop.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * If the content of the `children` prop is more complex
	 * than a simple string, a string-only label must be passed
	 * to this prop to enable type-to-select
	 */
	text: PropTypes.string,
	/**
	 * Name of the icon to render to the left of the menu item
	 */
	icon: PropTypes.string,
	/**
	 * When set to `true`, prevents the menu item from being selected.
	 */
	isDisabled: PropTypes.bool,
};

export default ComboboxMenuItem;
