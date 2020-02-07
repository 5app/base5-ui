import {useState} from 'react';

function sortBy(property, order = 'asc') {
	const orderAsNumber = {
		asc: 1,
		desc: -1,
	};

	const prop = property.toLowerCase();

	return function(a, b) {
		const result = a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0;
		return result * orderAsNumber[order];
	};
}

function DemoTableState({data, children}) {
	const [order, setOrder] = useState('asc');
	const [orderProp, setOrderProp] = useState('Name');

	function handleSort(newOrder) {
		setOrder(newOrder.order);
		setOrderProp(newOrder.property);
	}

	const orderedData = data.sort(sortBy(orderProp, order));

	return children({
		data: orderedData,
		sort: {
			order,
			property: orderProp,
		},
		handleSort,
	});
}

export default DemoTableState;
