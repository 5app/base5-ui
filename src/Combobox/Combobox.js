import React, {useEffect, useRef, createContext} from 'react';
import PropTypes from 'prop-types';
import {useItemList} from 'use-item-list';

import {KEY_CODES} from '../constants';
import {mergeCallbacks} from '../utils';

import useEventListener from '../useEventListener';
import useOnClickOutside from '../useOnClickOutside';
import usePopover from '../usePopover';
import usePopoverState from '../usePopoverState';
import useUniqueId from '../useUniqueId';

import Portal from '../Portal';
import Status from '../Status';
import VisuallyHidden from '../VisuallyHidden';

function defaultGetA11yStatusMessage({resultCount, inputValue}) {
	if (inputValue?.length && !resultCount) {
		return 'No suggestions available';
	}

	if (resultCount > 0) {
		return [
			resultCount,
			'suggestions available.',
			'Use up and down arrow keys to navigate. Press Enter key to select.',
		].join(' ');
	}

	return '';
}

const ComboboxContext = createContext();

function Combobox({
	id: idProp,
	inputValue,
	resultCount,
	onSelect,
	getStatusMessage,
	shouldShowStatusMessage,
	children,
}) {
	const inputRef = useRef();
	const popoverRef = useRef();
	const id = useUniqueId(idProp);
	const statusMessage = getStatusMessage({resultCount, inputValue});

	const popover = usePopover({
		ref: popoverRef,
		referenceRef: inputRef,
		placement: 'bottom-start',
		positionFixed: false,
		adaptivePositioning: true,
		matchReferenceWidth: true,
		arrowSize: 0,
	});

	const {isOpen, open, close, toggle} = usePopoverState();

	const canMenuBeOpen =
		(shouldShowStatusMessage && Boolean(statusMessage)) ||
		Boolean(resultCount);
	const isMenuOpen = canMenuBeOpen && isOpen;

	const itemList = useItemList({
		id,
		selected: inputValue,
		initialHighlightedIndex: 0,
		onSelect: handleSelect,
	});

	const shouldOpenOnValueChange = useRef(true);

	function handleSelect(selectedItem) {
		// Normally, the dropdown menu is opened whenever
		// the input value changes. However we don't want that
		// if the value was changed as the result of a selection
		// as it would re-open the menu
		shouldOpenOnValueChange.current = false;
		onSelect(selectedItem);
		close();
	}

	useEffect(() => {
		if (inputValue.length && shouldOpenOnValueChange.current) {
			open();
		}
		shouldOpenOnValueChange.current = true;
	}, [inputValue]); // eslint-disable-line react-hooks/exhaustive-deps

	function handleGlobalMenuKeyEvents(event) {
		if (event.keyCode === KEY_CODES.ESC) {
			event.preventDefault();
			close();
		}
	}

	function handleInputKeyEvents(event) {
		if (shouldShowStatusMessage) {
			return;
		}

		if (event.keyCode === KEY_CODES.ARROW_UP) {
			event.preventDefault();
			if (isMenuOpen) {
				itemList.moveHighlightedItem(-1);
			} else {
				open();
			}
		}
		if (event.keyCode === KEY_CODES.ARROW_DOWN) {
			event.preventDefault();
			if (isMenuOpen) {
				itemList.moveHighlightedItem(1);
			} else {
				open();
			}
		}
		if (event.keyCode === KEY_CODES.TAB) {
			if (isMenuOpen) {
				itemList.selectHighlightedItem();
				close();
			}
		}
		if (event.keyCode === KEY_CODES.ENTER) {
			event.preventDefault();
			if (isMenuOpen) {
				close();
				itemList.selectHighlightedItem();
			}
		}
	}

	// Handle global keyboard events when the menu is open
	useEventListener('keydown', handleGlobalMenuKeyEvents, {
		isEnabled: isMenuOpen,
	});

	// Close the menu when clicking outside of the input
	useOnClickOutside([inputRef, popoverRef], close, isMenuOpen);

	const highlightedItemId = itemList.useHighlightedItemId();

	const getInputProps = ({onFocus, onKeyDown}) => ({
		id,
		value: inputValue,
		role: 'combobox',
		'aria-controls': itemList.listId,
		'aria-expanded': isMenuOpen ? 'true' : 'false',
		'aria-haspopup': 'true',
		'aria-activedescendant': isMenuOpen ? highlightedItemId : null,
		'aria-autocomplete': 'list',
		autoComplete: 'off',
		spellCheck: 'false',
		onKeyDown: mergeCallbacks(onKeyDown, handleInputKeyEvents),
		onFocus: mergeCallbacks(onFocus, () => {
			if (!isMenuOpen) {
				open();
			}
		}),
	});

	return (
		<ComboboxContext.Provider
			value={{
				popover: {
					...popover,
					isOpen: isMenuOpen,
					toggle,
					open,
					close,
				},
				getInputProps,
				itemList,
				statusMessage,
				shouldShowStatusMessage,
			}}
		>
			{children}
			<Portal>
				<Status as={VisuallyHidden} id={`${id}-a11y-hints`}>
					{isMenuOpen && statusMessage}
				</Status>
			</Portal>
		</ComboboxContext.Provider>
	);
}

Combobox.defaultProps = {
	shouldShowStatusMessage: false,
	getStatusMessage: defaultGetA11yStatusMessage,
};

Combobox.propTypes = {
	/**
	 * Unique ID for the combobox that will be passed to the input element
	 * and used as the basis for the IDs of other associated elements.
	 * Will be automatically generated if not provided.
	 */
	id: PropTypes.string,
	/**
	 * The value of the input field. Will also be passed on to the wrapped
	 * input field automatically
	 */
	inputValue: PropTypes.string.isRequired,
	/**
	 * The number of rendered autocomplete suggestions, i.e. menu items
	 * that are rendered using the ComboboxMenuItem component
	 */
	resultCount: PropTypes.number.isRequired,
	/**
	 * Callback to provide custom status messages which will be used
	 * for screenreader announcements and in the UI when the `shouldShowStatusMessage`
	 * option is enabled.
	 * The passed function is called with an object containing `resultCount` and
	 * `inputValue`, and should return suitable strings to notify users of the number
	 * of results and how to navigate the combobox.
	 */
	getStatusMessage: PropTypes.func,
	/**
	 * Set this to true to make the status message returned from `getStatusMessage`
	 * visible in the dropdown menu, e.g. to display "No suggestions available" when
	 * there are no results. Never set this to `true` when there _are_ results, and always
	 * make it dependent on e.g. the number of results or the length of `inputValue`,
	 * as it will replace the options in the menu.
	 */
	shouldShowStatusMessage: PropTypes.bool,
	/**
	 * Function to be called when a menu option was selected by the user.
	 * Will be called with an object containing the option's `value` and `text`.
	 */
	onSelect: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export {ComboboxContext};

// @component
export default Combobox;
