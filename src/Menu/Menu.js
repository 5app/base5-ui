import React, {createContext, useRef} from 'react';
import PropTypes from 'prop-types';
import {useItemList} from '5app-use-item-list';

import {KEY_CODES} from '../constants';

import useEventListener from '../useEventListener';
import useOnClickOutside from '../useOnClickOutside';
import usePopover from '../usePopover';
import usePopoverState from '../usePopoverState';
import useUniqueId from '../useUniqueId';

const MenuContext = createContext();

function Menu({
	id: idProp,
	menuPlacement = 'bottom',
	menuPositionFixed,
	children,
}) {
	const buttonRef = useRef();
	const menuListRef = useRef();
	const popoverRef = useRef();
	const id = useUniqueId(idProp);

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
			popoverRef.current?.contains(document.activeElement);

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
				const item = itemList.getHighlightedItem();
				if (item) {
					event.preventDefault();
					// Trigger a click on the highlighted item
					// to select it (unless it's disabled)
					if (!item.ref.current?.ariaDisabled) {
						item.ref.current?.click();
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

Menu.defaultProps = {
	menuPlacement: 'bottom',
};

Menu.propTypes = {
	/**
	 * Unique ID for the menu
	 */
	id: PropTypes.string,
	/**
	 * Control the positioning of the popover menu relative to the button.
	 * Takes a Popper.js placement string
	 */
	menuPlacement: PropTypes.oneOf([
		'auto',
		'top',
		'bottom',
		'left',
		'right',
		'auto-start',
		'top-start',
		'bottom-start',
		'left-start',
		'right-start',
		'auto-end',
		'top-end',
		'bottom-end',
		'left-end',
		'right-end',
	]),
	/*
	 * Position the popover using position: fixed.
	 * See the Popper.js docs about strategy: 'fixed' for details about this property
	 */
	menuPositionFixed: PropTypes.bool,
};

export {MenuContext};

// @component
export default Menu;
