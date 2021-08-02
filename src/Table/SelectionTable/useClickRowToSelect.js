import {useRef} from 'react';

function useClickRowToSelect() {
	const rowSelectButtonRefs = useRef({});

	function getRowSelectButtonRef(rowId) {
		return element => {
			rowSelectButtonRefs.current[rowId] = element;
		};
	}

	function getRowClickHandler(rowId) {
		return event => {
			rowSelectButtonRefs.current[rowId].click(event);
			rowSelectButtonRefs.current[rowId].focus();
		};
	}

	return {
		getRowSelectButtonRef,
		getRowClickHandler,
	};
}

export default useClickRowToSelect;
