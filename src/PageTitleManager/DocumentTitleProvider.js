import React, {createContext, useContext, useRef, useEffect} from 'react';

const DocumentTitleContext = createContext();

function DocumentTitleProvider({baseTitle = '', isDisabled = false, children}) {
	return (
		<DocumentTitleContext.Provider value={{baseTitle, isDisabled}}>
			{children}
		</DocumentTitleContext.Provider>
	);
}

function useSetDocumentTitle(pageTitle, {isDisabled = false} = {}) {
	const prevTitleRef = useRef(document.title);
	const {baseTitle, isDisabled: globalIsDisabled} =
		useContext(DocumentTitleContext);

	const disabled = isDisabled || globalIsDisabled;

	useEffect(() => {
		if (disabled || !pageTitle || typeof pageTitle !== 'string') {
			return;
		}

		if (pageTitle !== prevTitleRef.current) {
			prevTitleRef.current = document.title;
			const newTitle = baseTitle
				? `${pageTitle} - ${baseTitle}`
				: pageTitle;
			document.title = newTitle;

			return () => {
				document.title = prevTitleRef.current;
			};
		}
	}, [baseTitle, pageTitle, disabled]);
}

export {useSetDocumentTitle, DocumentTitleProvider};
