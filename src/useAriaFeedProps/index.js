import {useRef} from 'react';

/**
 * A React hook helper for implementing the WAI-ARIA 'Feed' pattern.
 * See https://www.w3.org/TR/wai-aria-practices-1.1/#feed for reference.
 *
 * Spread the result of the returned prop getter functions onto the wrapper
 * and item elements of the feed to apply the needed props.
 *
 * @param {object} options
 * @param {bool} options.isLoading - Indicate whether new items are being added to the feed
 * @param {bool} options.totalItemCount - Provide the total number of available items in the feed
 * @returns {Function} props.getWrapperProps
 * @returns {Function} props.getItemProps
 */

function useAriaFeedProps({isLoading, totalItemCount = -1}) {
	const feedItemsRef = useRef([]);

	function registerItemRef(index) {
		return element => {
			feedItemsRef.current[index] = element;
		};
	}

	function getFocusedItemIndex() {
		const focusedItem = document.activeElement;
		const index = feedItemsRef.current.findIndex(
			element => element === focusedItem || element.contains(focusedItem)
		);
		return index;
	}

	function moveFocusToItem(index) {
		if (feedItemsRef.current[index]) {
			feedItemsRef.current[index].focus();
		}
	}

	function moveFocusBy(offset) {
		const currentIndex = getFocusedItemIndex();
		if (currentIndex === -1) return;
		moveFocusToItem(currentIndex + offset);
	}

	function focusFirstItem() {
		moveFocusToItem(0);
	}

	function focusLastItem() {
		moveFocusToItem(feedItemsRef.current.length - 1);
	}

	function handleKeyPress(event) {
		switch (event.key) {
			case 'PageDown':
				event.preventDefault();
				moveFocusBy(1);
				break;
			case 'PageUp':
				event.preventDefault();
				moveFocusBy(-1);
				break;
			case 'Home':
				if (event.ctrlKey) {
					event.preventDefault();
					focusFirstItem();
				}
				break;
			case 'End':
				if (event.ctrlKey) {
					event.preventDefault();
					focusLastItem();
				}
				break;
			default:
		}
	}

	const getWrapperProps = ({labelledBy}) => ({
		role: 'feed',
		'aria-labelledby': labelledBy,
		'aria-busy': isLoading ? 'true' : 'false',
		onKeyDown: handleKeyPress,
	});

	const getItemProps = ({index, labelledBy, describedBy}) => ({
		role: 'article',
		'aria-posinset': index + 1,
		'aria-setsize': `${totalItemCount}`,
		'aria-labelledby': labelledBy,
		'aria-describedby': describedBy,
		tabIndex: '-1',
		ref: registerItemRef(index),
	});

	return {getWrapperProps, getItemProps};
}

export default useAriaFeedProps;
