import React, {
	createContext,
	memo,
	useContext,
	useRef,
	useMemo,
	useState,
	useEffect,
} from 'react';
import PropTypes from 'prop-types';

const PageTitleContext = createContext();

function usePageTitleAnnouncer({deferAnnouncementWhile = false} = {}) {
	const {pageTitleRef, setDeferFocus} = useContext(PageTitleContext);

	useEffect(() => {
		setDeferFocus(deferAnnouncementWhile);
	}, [deferAnnouncementWhile, setDeferFocus]);

	return pageTitleRef;
}

function Provider({pathname, children}) {
	const focusablePageTitleRef = useRef();
	const [deferFocus, setDeferFocus] = useState(false);
	const [initialPathname] = useState(pathname);

	useEffect(() => {
		// Only ever move focus to the page title if the pathname
		// has actually changed, never on first render, where focus
		// should stay at the beginning of the page
		if (initialPathname !== pathname) {
			// Using a zero timeout makes focusing the
			// heading on the new page a bit more reliable
			setTimeout(() => {
				!deferFocus && focusablePageTitleRef.current?.focus();
			}, 0);
		}
	}, [pathname, deferFocus, initialPathname]);

	const contextValue = useMemo(
		() => ({
			pageTitleRef: focusablePageTitleRef,
			setDeferFocus,
		}),
		[focusablePageTitleRef, setDeferFocus]
	);

	return (
		<PageTitleContext.Provider value={contextValue}>
			{children}
		</PageTitleContext.Provider>
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

export {usePageTitleAnnouncer, PageTitleAnnouncer};
