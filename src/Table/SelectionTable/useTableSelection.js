import {useRef, useEffect} from 'react';

import {KEY_CODES} from '../../constants';
import useEventListener from '../../useEventListener';

export const NONE_SELECTED = 'none';
export const SOME_SELECTED = 'some';
export const ALL_SELECTED = 'all';

function getSelectAllState(rowIds, selectedItems) {
	if (selectedItems.length === 0) {
		return NONE_SELECTED;
	}
	const itemIsSelected = itemId => selectedItems.includes(itemId);
	const areAllSelected = rowIds.every(itemIsSelected);
	if (areAllSelected) {
		return ALL_SELECTED;
	}
	const areSomeSelected = rowIds.some(itemIsSelected);
	return areSomeSelected ? SOME_SELECTED : NONE_SELECTED;
}

function useTableSelection({
	rowIds,
	highlightedRowIndex,
	selectedItems,
	onChange,
}) {
	const metaKeyPressedRef = useRef(false);
	const shiftKeyPressedRef = useRef(false);

	function captureModifierKeys(event) {
		metaKeyPressedRef.current = event.metaKey || event.ctrlKey;
		shiftKeyPressedRef.current = event.shiftKey;
	}

	useEventListener('keyup', captureModifierKeys);
	useEventListener('keydown', captureModifierKeys);
	useEventListener('selectstart', event => {
		// Prevent range selection on Shift + Click
		if (shiftKeyPressedRef.current) {
			event.preventDefault();
		}
	});

	// Track the last item that was single-selected
	// for range selection
	const lastSelectedItem = useRef();

	useEffect(() => {
		// If there's no last selected item, initialise it
		// with the topmost selected item
		if (!lastSelectedItem.current && selectedItems.length) {
			const topMostSelectedItem = rowIds.find(itemId =>
				selectedItems.includes(itemId)
			);
			lastSelectedItem.current = topMostSelectedItem;
		}
	}, [rowIds, selectedItems]);

	function trackLastSelectedRow(itemId) {
		lastSelectedItem.current = itemId;
	}

	const selectAllState = getSelectAllState(rowIds, selectedItems);

	function getIsRowSelected(itemId) {
		return (
			selectAllState === ALL_SELECTED || selectedItems.includes(itemId)
		);
	}

	function removeFromSelection(itemIds) {
		onChange(
			selectedItems.filter(
				selectedItem => !itemIds.includes(selectedItem)
			)
		);
	}

	function addToSelection(itemIds) {
		onChange([...selectedItems, ...itemIds]);
	}

	function toggleSingleRow(itemId) {
		if (getIsRowSelected(itemId)) {
			removeFromSelection([itemId]);
		} else {
			addToSelection([itemId]);
		}
	}

	function handleRangeSelection(itemId) {
		if (shiftKeyPressedRef.current && lastSelectedItem.current !== itemId) {
			// Range selection when shift is pressed
			const lastClickedIndex = rowIds.findIndex(
				rowId => rowId === lastSelectedItem.current
			);
			if (lastClickedIndex !== -1) {
				const range = rowIds.slice(
					Math.min(highlightedRowIndex, lastClickedIndex),
					Math.max(highlightedRowIndex, lastClickedIndex) + 1
				);
				addToSelection(range);
			}
			return true;
		} else if (metaKeyPressedRef.current) {
			// Toggle selection when cmd/ctrl is pressed
			toggleSingleRow(itemId);
			lastSelectedItem.current = itemId;
			return true;
		}
		return false;
	}

	function getSelectRowHandler(itemId) {
		return () => {
			if (!handleRangeSelection(itemId)) {
				toggleSingleRow(itemId);
				trackLastSelectedRow(itemId);
			}
		};
	}

	function getSelectSingleRowHandler(itemId) {
		return () => {
			if (!handleRangeSelection(itemId)) {
				// Deselect all & select single
				onChange([itemId]);
				trackLastSelectedRow(itemId);
			}
		};
	}

	function toggleSelectAll() {
		if (selectAllState === NONE_SELECTED) {
			onChange(rowIds);
		} else {
			onChange([]);
		}
	}

	function handleGridSelectionKeys(event) {
		const highlightedRowId = rowIds[highlightedRowIndex];
		if (event.keyCode === KEY_CODES.SPACE && event.shiftKey) {
			event.preventDefault();
			toggleSingleRow(highlightedRowId);
		}
		if (event.keyCode === KEY_CODES.ARROW_DOWN && event.shiftKey) {
			event.preventDefault();
			const nextRowId = rowIds[highlightedRowIndex + 1];
			addToSelection([highlightedRowId, nextRowId]);
		}
		if (event.keyCode === KEY_CODES.ARROW_UP && event.shiftKey) {
			event.preventDefault();
			addToSelection([highlightedRowId, rowIds[highlightedRowIndex - 1]]);
		}
		if (event.keyCode === KEY_CODES.PAGE_DOWN && event.shiftKey) {
			event.preventDefault();
			const range = rowIds.slice(highlightedRowIndex);
			addToSelection(range);
		}
		if (event.keyCode === KEY_CODES.PAGE_UP && event.shiftKey) {
			event.preventDefault();
			const range = rowIds.slice(0, highlightedRowIndex + 1);
			addToSelection(range);
		}
		if (event.key === 'a' && event.ctrlKey) {
			event.preventDefault();
			if (selectAllState === ALL_SELECTED) {
				onChange([]);
			} else {
				onChange(rowIds);
			}
		}
	}

	return {
		selectAllState,
		getIsRowSelected,
		getSelectRowHandler,
		getSelectSingleRowHandler,
		toggleSelectAll,
		handleGridSelectionKeys,
	};
}

export default useTableSelection;
