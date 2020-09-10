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
import useOnNavigateAway from '../useOnNavigateAway';

const NavMenuContext = createContext();

function NavMenu({id, menuPlacement = 'bottom', menuPositionFixed, children}) {
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

	function onHighlight(index) {
		const highlightedItem = itemList.items.current[index];
		if (highlightedItem) {
			highlightedItem.ref.current.focus();
		}
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
				if (itemList.highlightedIndex.current !== null) {
					event.preventDefault();
					const item =
						itemList.items.current[
							itemList.highlightedIndex.current
						];
					if (item) {
						item.ref.current.click();
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

NavMenu.propTypes = {
	id: PropTypes.string.isRequired,
	menuPlacement: PropTypes.string,
	menuPositionFixed: PropTypes.bool,
};

function NavMenuList({children}) {
	const {popover, itemList} = useContext(NavMenuContext);

	return (
		<PopoverCard
			renderInPlace
			renderWhenClosed
			isOpen={popover.isOpen}
			{...popover.props}
			ref={popover.setRef}
			id={itemList.listId}
			arrow={popover.arrow}
			onUpdatePopover={popover.update}
		>
			<MenuListUI.Wrapper>{children}</MenuListUI.Wrapper>
		</PopoverCard>
	);
}

function NavMenuButton({as: Component = Button, forwardedAs, ...otherProps}) {
	const {menuButtonProps} = useContext(NavMenuContext);

	return <Component {...otherProps} as={forwardedAs} {...menuButtonProps} />;
}

function NavMenuItem({as, children, icon, ...otherProps}) {
	const itemRef = useRef();
	const {itemList} = useContext(NavMenuContext);
	const {
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

export {NavMenuContext, NavMenu, NavMenuButton, NavMenuList, NavMenuItem};
