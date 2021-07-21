import {useState} from 'react';

function sortBy(property, order = 'asc') {
	const orderAsNumber = {
		asc: 1,
		desc: -1,
	};

	const prop = property.toLowerCase();

	return function (a, b) {
		const result = a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0;
		return result * orderAsNumber[order];
	};
}

function DemoTableState({data, initialSelectedItems = [], children}) {
	const [order, setOrder] = useState('asc');
	const [sortedColumn, setSortedColumn] = useState('Name');
	const [selectedItems, setSelectedItems] = useState(initialSelectedItems);

	function handleSort(newOrder) {
		setOrder(newOrder.order);
		setSortedColumn(newOrder.column);
	}

	const orderedData = data?.sort(sortBy(sortedColumn, order)) || [];

	return children({
		data: orderedData,
		sort: {
			order,
			column: sortedColumn,
		},
		handleSort,
		selectedItems,
		handleSelectionChange: setSelectedItems,
	});
}

export default DemoTableState;
