import React, {createContext, useContext, useMemo} from 'react';

const TableContext = createContext({});

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
	return function WrappedComponent(props) {
		const contextProps = useTableContext();
		return <Component {...props} {...contextProps} />;
	};
}

export {TableContextProvider, useTableContext, withTableContext};
