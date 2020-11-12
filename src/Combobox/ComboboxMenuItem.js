import React, {useRef, useContext} from 'react';

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

export default ComboboxMenuItem;
