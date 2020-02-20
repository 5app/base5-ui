import React, {createContext, memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

export const BackButtonContext = createContext(false);

function Provider({children, pathname}) {
	const hasHistoryRef = useRef(false);

	useEffect(() => {
		// We're using a ref so that we don't trigger a rerender,
		// as the new value should only apply on the next render,
		// i.e. the next time `pathname` has changed
		hasHistoryRef.current = true;
	}, [pathname]);

	return (
		<BackButtonContext.Provider value={hasHistoryRef.current}>
			{children}
		</BackButtonContext.Provider>
	);
}

// Memoise the component to make sure the component is only ever
// re-rendered when the `pathname` prop changes
const BackButtonProvider = memo(
	Provider,
	(prevProps, nextProps) => prevProps.pathname === nextProps.pathname
);

Provider.propTypes = {
	pathname: PropTypes.string.isRequired,
};

export default BackButtonProvider;
