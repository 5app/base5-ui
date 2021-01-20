import React, {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import findInHistoryStack from './findInHistoryStack';
import getBackLinks from './getBackLinks';

const BackLinkContext = createContext(false);

function BackLinkProvider({
	children,
	location,
	track,
	getLocationLevel,
	getLocationId,
}) {
	const [historyStack, setHistoryStack] = useState([]);

	useEffect(() => {
		const locationLevel = getLocationLevel(location);
		const wrappedLocation = {
			location,
			id: getLocationId(track),
		};
		const locationInHistory = findInHistoryStack(
			wrappedLocation,
			historyStack
		);

		if (!locationInHistory) {
			setHistoryStack(prevHistory => {
				let newHistory = [...prevHistory];
				if (newHistory[locationLevel]) {
					newHistory[locationLevel] = [
						...newHistory[locationLevel],
						wrappedLocation,
					];
				} else {
					newHistory[locationLevel] = [wrappedLocation];
					newHistory = newHistory.slice(0, locationLevel + 1);
				}
				return newHistory;
			});
		} else {
			const [levelIndex, entryIndex] = locationInHistory;
			setHistoryStack(prevHistory => {
				let newHistory = [...prevHistory];
				newHistory[levelIndex] = newHistory[levelIndex].slice(
					0,
					entryIndex + 1
				);
				newHistory = newHistory.slice(0, levelIndex + 1);
				return newHistory;
			});
		}
	}, track); // eslint-disable-line react-hooks/exhaustive-deps

	const backLinks = getBackLinks(historyStack);

	return (
		<BackLinkContext.Provider value={backLinks}>
			{children}
		</BackLinkContext.Provider>
	);
}

BackLinkProvider.defaultProps = {
	getLocationLevel: () => 0,
	getLocationId: track => track.join(','),
};

BackLinkProvider.propTypes = {
	/**
	 * A string or object identifying the current location on your site.
	 * This is what will be returned from the `useBackLink` hook,
	 * so make sure you can construct a proper link URL from it.
	 */
	location: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
		.isRequired,
	/**
	 * A "dependency array" of values that tell the component whether or
	 * not the current location should be added to the history array.
	 * All requirements & limitations of `React.useEffect` dependency arrays apply here, too.
	 */
	track: PropTypes.array.isRequired,
	/**
	 * A function that's called with the current location and should
	 * return a "hierarchy level" for the location
	 */
	getLocationLevel: PropTypes.func,
	/**
	 * A function that's called with the `track` array and should
	 * return a unique ID from those values
	 */
	getLocationId: PropTypes.func,
};

export {BackLinkContext};

// @component
export default BackLinkProvider;
