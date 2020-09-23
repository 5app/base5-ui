import React, {createContext, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useItemList} from 'use-item-list';

import {KEY_CODES} from '../constants';

import useEventListener from '../useEventListener';
import useOnClickOutside from '../useOnClickOutside';
import usePopover from '../usePopover';
import usePopoverState from '../usePopoverState';

import Button from '../Button';
import * as MenuListUI from '../MenuList';
import PopoverCard from '../PopoverCard';

const SelectContext = createContext();

function Select({
	id,
	labelledById,
	onChange,
	value,
	menuPlacement = 'bottom-start',
	menuPositionFixed,
	as: ButtonComponent = Button,
	children,
	...otherProps
}) {
	const buttonRef = useRef();
	const popoverRef = useRef();
	const [selectedItem, setSelectedItem] = useState();

	const popover = usePopover({
		ref: popoverRef,
		referenceRef: buttonRef,
		placement: menuPlacement,
		positionFixed: menuPositionFixed,
		adaptivePositioning: true,
	});

	const {isOpen, open, close, toggle} = usePopoverState({
		onOpen: popover.update,
	});

	const itemList = useItemList({
		id,
		selected: value,
		onSelect: value => {
			onChange(value);
			close();
		},
	});

	function handleGlobalMenuKeyEvents(event) {
		if (event.keyCode === KEY_CODES.ESC) {
			event.preventDefault();
			close();
		}
	}

	function handleButtonKeyEvents(event) {
		if (event.keyCode === KEY_CODES.ARROW_UP) {
			event.preventDefault();
			if (isOpen) {
				itemList.moveHighlightedItem(-1);
			} else {
				open();
			}
		}
		if (event.keyCode === KEY_CODES.ARROW_DOWN) {
			event.preventDefault();
			if (isOpen) {
				itemList.moveHighlightedItem(1);
			} else {
				open();
			}
		}
		if (event.keyCode === KEY_CODES.TAB) {
			if (isOpen) {
				itemList.selectHighlightedItem();
				close();
			}
		}
		if (
			event.keyCode === KEY_CODES.SPACE ||
			event.keyCode === KEY_CODES.ENTER
		) {
			event.preventDefault();
			if (isOpen) {
				close();
				itemList.selectHighlightedItem();
			} else {
				open();
			}
		}
		if (isOpen) {
			itemList.highlightItemByString(event);
		}
	}

	// Handle global keyboard events when the menu is open
	useEventListener('keydown', handleGlobalMenuKeyEvents, {
		isEnabled: isOpen,
	});

	// Close the menu when clicking outside of it
	useOnClickOutside(popoverRef, close, isOpen);

	const highlightedItemId = itemList.useHighlightedItemId();

	return (
		<SelectContext.Provider
			value={{
				itemList,
				setSelectedItem,
			}}
		>
			<ButtonComponent
				{...otherProps}
				iconRight="chevron"
				as="div"
				role="combobox"
				ref={popover.setReferenceRef}
				id={itemList.controllerId}
				tabIndex="0"
				aria-labelledby={labelledById}
				aria-haspopup="listbox"
				aria-autocomplete="none"
				aria-controls={itemList.listId}
				aria-activedescendant={isOpen ? highlightedItemId : null}
				aria-expanded={isOpen ? 'true' : 'false'}
				onKeyDown={handleButtonKeyEvents}
				onClick={toggle}
			>
				{selectedItem?.text}
			</ButtonComponent>
			<PopoverCard
				renderWhenClosed
				renderInPlace
				isOpen={isOpen}
				{...popover.props}
				ref={popover.setRef}
				arrow={popover.arrow}
				onUpdatePopover={popover.update}
			>
				<MenuListUI.Wrapper
					role="listbox"
					tabIndex="-1"
					id={itemList.listId}
					aria-labelledby={itemList.controllerId}
				>
					{children}
				</MenuListUI.Wrapper>
			</PopoverCard>
		</SelectContext.Provider>
	);
}

Select.defaultProps = {
	menuPlacement: 'bottom',
};

Select.propTypes = {
	/**
	 * Unique ID for the menu
	 */
	id: PropTypes.string.isRequired,
	/**
	 * Unique ID for the menu
	 */
	labelledById: PropTypes.string.isRequired,
	/**
	 * Function that's called when a new item is selected.
	 * Will be called with the `value` of the selected list item
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * Value of the currently selected item
	 */
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	/**
	 * Customise the base component used to render the Select button.
	 * Note that this must either support an `as` prop to customise
	 * the underlying rendered element, or render  a `div` element by default
	 */
	as: PropTypes.elementType,
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

export {SelectContext};

// @component
export default Select;
