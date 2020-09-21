import React, {createContext, useRef} from 'react';
import PropTypes from 'prop-types';
import {useItemList} from 'use-item-list';

import {KEY_CODES} from '../constants';

import useEventListener from '../useEventListener';
import usePopover from '../usePopover';
import usePopoverState from '../usePopoverState';
import useOnNavigateAway from '../useOnNavigateAway';

const NavMenuContext = createContext();

function NavMenu({id, menuPlacement, menuPositionFixed, children}) {
	const buttonRef = useRef();
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
		onHighlight,
		initialHighlightedIndex: null,
	});

	const {isOpen, open, close, toggle} = usePopoverState({
		onClose: () => {
			itemList.clearHighlightedItem();

			// If focus is on or within the popover when it's closed,
			// we need to move it back to the button.
			// Otherwise we do nothing & preserve user focus.
			if (
				popoverRef.current === document.activeElement ||
				popoverRef.current?.contains(document.activeElement)
			) {
				buttonRef.current?.focus();
			}
		},
	});

	function onHighlight(item) {
		item?.ref.current?.focus();
	}

	function onSelect() {
		close();
	}

	function handleGlobalMenuKeyEvents(event) {
		if (event.keyCode === KEY_CODES.ESC) {
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
				const item = itemList.getHighlightedItem();
				if (item) {
					event.preventDefault();
					if (!event.ctrlKey && !event.metaKey) {
						item.ref.current?.click();
					}
					itemList.selectHighlightedItem();
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

	// Close the menu when clicking outside of it,
	// otherwise just clear the menu highlighting
	useOnNavigateAway(
		popoverRef,
		event => {
			if (event.type === 'click') {
				close();
			}
			itemList.clearHighlightedItem();
		},
		isOpen
	);

	const menuButtonProps = {
		ref: popover.setReferenceRef,
		id: itemList.controllerId,
		'aria-haspopup': 'menu',
		'aria-controls': itemList.listId,
		'aria-expanded': isOpen ? 'true' : 'false',
		onKeyDown: handleButtonKeyEvents,
		onClick: toggle,
	};

	return (
		<NavMenuContext.Provider
			value={{
				popover: {
					...popover,
					isOpen,
					toggle,
					open,
					close,
				},
				menuButtonProps,
				itemList,
			}}
		>
			{children}
		</NavMenuContext.Provider>
	);
}

NavMenu.defaultProps = {
	menuPlacement: 'bottom',
};

NavMenu.propTypes = {
	/**
	 * Unique ID for the menu
	 */
	id: PropTypes.string.isRequired,
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

export {NavMenuContext};

// @component
export default NavMenu;
