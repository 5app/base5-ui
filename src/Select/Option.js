import React, {useContext, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import * as MenuListUI from '../MenuList';

import {SelectContext} from './Select';

function Option({value, icon, children}) {
	const itemRef = useRef();
	const {itemList, setSelectedItem} = useContext(SelectContext);
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
		text: children,
		// disabled: isDisabled,
	});

	useEffect(() => {
		if (selected) {
			setSelectedItem({
				ref: itemRef,
				text: children,
				value,
			});
		}
	}, [selected, children, value, setSelectedItem]);

	return (
		<MenuListUI.Item
			ref={itemRef}
			id={id}
			role="option"
			aria-selected={selected ? 'true' : null}
			// aria-disabled={isDisabled ? 'true' : null}
			onClick={select}
			onMouseEnter={highlight}
			onMouseLeave={clearHighlightedItem}
		>
			<MenuListUI.Link
				forwardedAs="span"
				// isDisabled={isDisabled}
				isHighlighted={useHighlighted()}
			>
				{icon && <MenuListUI.ItemIcon name={icon} />}
				{children}
			</MenuListUI.Link>
		</MenuListUI.Item>
	);
}

Option.propTypes = {
	/**
	 * Define the option's value. If not defined, the
	 * `children` prop will be used instead.
	 */
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/**
	 * Define the option's readable label
	 */
	children: PropTypes.string.isRequired,
	/**
	 * Define an icon for the option
	 */
	icon: PropTypes.string,
	/**
	 * Disable the option
	 */
	// isDisabled: PropTypes.bool,
};

// @component
export default Option;
