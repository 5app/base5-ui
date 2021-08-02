import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';

const TabIndexContextValue = createContext(null);

function TabIndexContext({disabled, children}) {
	return (
		<TabIndexContextValue.Provider value={disabled}>
			{children}
		</TabIndexContextValue.Provider>
	);
}

TabIndexContext.propTypes = {
	disabled: PropTypes.bool.isRequired,
};

function useTabIndexContext() {
	const isTabIndexDisabled = useContext(TabIndexContextValue);
	if (isTabIndexDisabled === null) {
		return null;
	}
	return isTabIndexDisabled ? '-1' : '0';
}

export {useTabIndexContext};

export default TabIndexContext;
