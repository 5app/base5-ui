import {useState, useRef, useEffect} from 'react';
import focusableSelectors from 'focusable-selectors';

import {KEY_CODES} from '../../constants';
import usePrevious from '../../usePrevious';

function isElementVisible(element) {
	return Boolean(
		element.offsetWidth ||
			element.offsetHeight ||
			element.getClientRects().length
	);
}

const TABLE_HIGHLIGHT_KEY_CODES = [
	KEY_CODES.ARROW_UP,
	KEY_CODES.ARROW_DOWN,
	KEY_CODES.ARROW_LEFT,
	KEY_CODES.ARROW_RIGHT,
	KEY_CODES.PAGE_UP,
	KEY_CODES.PAGE_DOWN,
	KEY_CODES.HOME,
	KEY_CODES.END,
];

function findNextVisibleCell({elementList, startIndex, direction}) {
	const cellCount = elementList.length;

	return checkCellVisibility(startIndex);

	function checkCellVisibility(index) {
		const cellElement = elementList[index];
		if (isElementVisible(cellElement)) {
			// If cell is visible, return it
			return cellElement;
		} else {
			// Otherwise check the neighbouring cell instead (left or right)
			const newIndex = index + direction;

			if (newIndex < 0 || newIndex > cellCount - 1) {
				// Bail out if we've reached the edge of the grid
				return null;
			}

			return checkCellVisibility(newIndex);
		}
	}
}

function useGridNavigation({rowIds, getInitialHighlightedRow} = {}) {
	const highlightedRowCellRefs = useRef([]);
	const shouldHandleFocus = useRef(false);

	const [highlightedRowId, setHighlightedRowId] = useState();
	const [highlightedCellIndex, setHighlightedCellIndex] = useState(0);
	const previousHighlightedCellIndex = usePrevious(highlightedCellIndex);
	if (!highlightedRowId) {
		const fallbackRowId = getInitialHighlightedRow();
		if (fallbackRowId) {
			setHighlightedRowId(fallbackRowId);
		}
	}
	const highlightedRowIndex = rowIds.findIndex(
		itemId => highlightedRowId === itemId
	);
	const rowCount = rowIds.length;

	function getIsRowHighlighted(id) {
		return id === highlightedRowId;
	}

	function getRowProps(id) {
		return {
			onMouseEnter: () => setHighlightedRowId(id),
		};
	}

	function getCellProps(rowId, cellIndex) {
		const props = {
			role: 'gridcell',
			onFocus: () => setHighlightedCellIndex(cellIndex),
		};
		// If the row is highlighted, collect refs of its cells
		if (getIsRowHighlighted(rowId)) {
			props.ref = ref => {
				highlightedRowCellRefs.current[cellIndex] = ref;
			};
		}
		return props;
	}

	function handleGridNavigationKeys(event) {
		if (TABLE_HIGHLIGHT_KEY_CODES.includes(event.keyCode)) {
			event.preventDefault();

			shouldHandleFocus.current = true;
			const columnCount = highlightedRowCellRefs.current.length;

			switch (event.keyCode) {
				case KEY_CODES.ARROW_UP:
					setHighlightedRowId(
						rowIds[(highlightedRowIndex || rowCount) - 1]
					);
					break;
				case KEY_CODES.ARROW_DOWN:
					setHighlightedRowId(
						rowIds[(highlightedRowIndex + 1) % rowCount]
					);
					break;
				case KEY_CODES.ARROW_LEFT:
					setHighlightedCellIndex(currentCellIndex =>
						currentCellIndex > 0
							? currentCellIndex - 1
							: currentCellIndex
					);
					break;
				case KEY_CODES.ARROW_RIGHT:
					setHighlightedCellIndex(currentCellIndex =>
						currentCellIndex < columnCount - 1
							? currentCellIndex + 1
							: currentCellIndex
					);
					break;
				case KEY_CODES.PAGE_UP:
					setHighlightedRowId(rowIds[0]);
					break;
				case KEY_CODES.PAGE_DOWN:
					setHighlightedRowId(rowIds[rowCount - 1]);
					break;
				case KEY_CODES.HOME:
					setHighlightedCellIndex(0);
					if (event.ctrlKey) {
						setHighlightedRowId(rowIds[0]);
					}
					break;
				case KEY_CODES.END:
					setHighlightedCellIndex(columnCount - 1);
					if (event.ctrlKey) {
						setHighlightedRowId(rowIds[rowCount - 1]);
					}
					break;
			}
		}
	}

	useEffect(() => {
		// We only move focus when the keyboard was used to navigate the grid
		if (shouldHandleFocus.current) {
			const cellElement = findNextVisibleCell({
				elementList: highlightedRowCellRefs.current,
				startIndex: highlightedCellIndex,
				direction:
					highlightedCellIndex > previousHighlightedCellIndex
						? 1
						: -1,
			});

			if (cellElement) {
				// Find focusable, visible elements within the highlighted cell
				const focusableElements = Array.from(
					cellElement.querySelectorAll(focusableSelectors.join(','))
				).filter(isElementVisible);

				if (focusableElements.length) {
					// If the cell contains focusable elements, move focus to the
					// first one of them
					focusableElements[0].focus();
				} else {
					// Otherwise focus the cell itself
					cellElement.focus();
				}
			}
			shouldHandleFocus.current = false;
		}
	}, [highlightedRowId, highlightedCellIndex, previousHighlightedCellIndex]);

	return {
		highlightedRowId,
		highlightedRowIndex,
		getIsRowHighlighted,
		getRowProps,
		getCellProps,
		handleGridNavigationKeys,
	};
}

export default useGridNavigation;
