import React, {createContext, useContext, useRef} from 'react';
import PropTypes from 'prop-types';
import {useItemList} from 'use-item-list';

import mergeCallbacks from '../utils/mergeCallbacks';
import {KEY_CODES} from '../constants';

import Button from '../Button';
import PopoverCard from '../PopoverCard';
import * as MenuListUI from '../MenuList';

import useEventListener from '../useEventListener';
import usePopover from '../usePopover';
import usePopoverState from '../usePopoverState';
import useOnClickOutside from '../useOnClickOutside';

const MenuContext = createContext();

function Menu({id, menuPlacement = 'bottom', menuPositionFixed, children}) {
	const buttonRef = useRef();
	const menuListRef = useRef();
	const popoverRef = useRef();

	const popover = usePopover({
		ref: popoverRef,
		referenceRef: buttonRef,
		placement: menuPlacement,
		positionFixed: menuPositionFixed,
		adaptivePositioning: true,
	});

	const itemList = useItemList({
		id,
		onSelect,
	});

	const {isOpen, open, close, toggle} = usePopoverState({
		onOpen: () => {
			menuListRef.current?.focus();
			itemList.setHighlightedItem(0);
		},
		onClose: () => {
			// If focus is on or within the popover when it's closed,
			// we move it back to the button.
			if (
				popoverRef.current === document.activeElement ||
				popoverRef.current?.contains(document.activeElement)
			) {
				buttonRef.current?.focus();
			}
		},
	});

	function onSelect() {
		itemList.clearHighlightedItem();
		close();
	}

	function handleGlobalMenuKeyEvents(event) {
		if (
			event.keyCode === KEY_CODES.ESC ||
			event.keyCode === KEY_CODES.TAB
		) {
			event.preventDefault();
			close();
		}

		const isFocusInMenuOrOnButton =
			buttonRef.current === document.activeElement ||
			popoverRef.current === document.activeElement ||
			popoverRef.current.contains(document.activeElement);

		if (isFocusInMenuOrOnButton) {
			if (event.keyCode === KEY_CODES.ARROW_UP) {
				event.preventDefault();
				itemList.moveHighlightedItem(-1);
			}
			if (event.keyCode === KEY_CODES.ARROW_DOWN) {
				event.preventDefault();
				itemList.moveHighlightedItem(1);
			}
			if (
				event.keyCode === KEY_CODES.SPACE ||
				event.keyCode === KEY_CODES.ENTER
			) {
				if (itemList.highlightedIndex.current !== null) {
					event.preventDefault();
					// Trigger a click on the highlighted item
					// to select it (unless it's disabled)
					const item =
						itemList.items.current[
							itemList.highlightedIndex.current
						];
					if (item && !item.ref.current.ariaDisabled) {
						item.ref.current.click();
					}
				}
			}
			itemList.highlightItemByString(event);
		}
	}

	function handleButtonKeyEvents(event) {
		if (event.keyCode === KEY_CODES.ARROW_DOWN) {
			event.preventDefault();
			open(event);
		}
	}

	// Handle global keyboard events when the menu is open
	useEventListener('keydown', handleGlobalMenuKeyEvents, {
		isEnabled: isOpen,
	});

	// Close the menu when clicking outside of it
	useOnClickOutside(popoverRef, close, isOpen);

	const highlightedItemId = itemList.useHighlightedItemId();

	const menuListProps = {
		ref: menuListRef,
		role: 'menu',
		tabIndex: '-1',
		id: itemList.listId,
		'aria-activedescendant': isOpen ? highlightedItemId : null,
		'aria-labelledby': itemList.controllerId,
	};

	const menuButtonProps = {
		ref: popover.setReferenceRef,
		id: itemList.controllerId,
		'aria-haspopup': 'true',
		'aria-controls': itemList.listId,
		'aria-expanded': isOpen ? 'true' : 'false',
		onKeyDown: handleButtonKeyEvents,
		onClick: toggle,
	};

	return (
		<MenuContext.Provider
			value={{
				popover: {
					...popover,
					isOpen,
					toggle,
					open,
					close,
				},
				menuListProps,
				menuButtonProps,
				itemList,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
}

Menu.propTypes = {
	id: PropTypes.string.isRequired,
	menuPlacement: PropTypes.string,
	menuPositionFixed: PropTypes.bool,
};

function MenuList({children}) {
	const {popover, menuListProps} = useContext(MenuContext);

	return (
		<PopoverCard
			renderWhenClosed
			renderInPlace={false}
			isOpen={popover.isOpen}
			{...popover.props}
			ref={popover.setRef}
			arrow={popover.arrow}
			onUpdatePopover={popover.update}
		>
			<MenuListUI.Wrapper {...menuListProps}>
				{children}
			</MenuListUI.Wrapper>
		</PopoverCard>
	);
}

function MenuButton({as: Component = Button, forwardedAs, ...otherProps}) {
	const {menuButtonProps} = useContext(MenuContext);

	return <Component {...otherProps} as={forwardedAs} {...menuButtonProps} />;
}

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

export {MenuContext, Menu, MenuButton, MenuList, MenuItem};
