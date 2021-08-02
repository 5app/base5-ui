import React, {createContext, useContext, useMemo, forwardRef} from 'react';

import {getPropFilter} from '../../utils';

const TableContext = createContext({});

export const TABLE_CONTEXT_PROP_NAMES = [
	'mobileViewBreakpoint',
	'stickyHeaderOffset',
	'rowMinHeight',
	'shadedHeader',
	'pl',
	'pr',
];

export const tableContextPropFilter = getPropFilter(TABLE_CONTEXT_PROP_NAMES);

function TableContextProvider({
	children,
	mobileViewBreakpoint,
	stickyHeaderOffset,
	rowMinHeight,
	shadedHeader,
	pl,
	pr,
}) {
	const contextValue = useMemo(
		() => ({
			mobileViewBreakpoint,
			stickyHeaderOffset,
			rowMinHeight,
			shadedHeader,
			pl,
			pr,
		}),
		[
			mobileViewBreakpoint,
			stickyHeaderOffset,
			rowMinHeight,
			shadedHeader,
			pl,
			pr,
		]
	);
	return (
		<TableContext.Provider value={contextValue}>
			{children}
		</TableContext.Provider>
	);
}

function useTableContext() {
	return useContext(TableContext);
}

function withTableContext(Component) {
	const WrappedComponent = forwardRef((props, ref) => {
		const contextProps = useTableContext();
		return <Component ref={ref} {...props} {...contextProps} />;
	});
	WrappedComponent.displayName = `${Component.displayName}WithTableContext`;
	return WrappedComponent;
}

export {TableContextProvider, useTableContext, withTableContext};
