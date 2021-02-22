import React, {createContext, memo, useContext, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const PageTitleAnnouncerContext = createContext();

function Provider({pathname, children}) {
	const hasNavigationOccuredRef = useRef(false);
	useEffect(() => {
		// Track whether any navigation has occured, as we
		// don't want to move user focus on initial page load
		return () => {
			hasNavigationOccuredRef.current = true;
		};
	}, [pathname]);

	return (
		<PageTitleAnnouncerContext.Provider value={hasNavigationOccuredRef}>
			{children}
		</PageTitleAnnouncerContext.Provider>
	);
}

// Memoise the component to make sure the component is only ever
// re-rendered when the `pathname` prop changes
const PageTitleAnnouncer = memo(
	Provider,
	(prevProps, nextProps) => prevProps.pathname === nextProps.pathname
);

PageTitleAnnouncer.propTypes = {
	pathname: PropTypes.string,
};

function usePageTitleAnnouncer(pageTitle) {
	const focusablePageTitleRef = useRef();
	const hasNavigationOccuredRef = useContext(PageTitleAnnouncerContext);

	useEffect(() => {
		if (pageTitle && hasNavigationOccuredRef.current) {
			focusablePageTitleRef.current?.focus();
		}
	}, [pageTitle, hasNavigationOccuredRef]);

	return focusablePageTitleRef;
}

export {PageTitleAnnouncer, usePageTitleAnnouncer};
