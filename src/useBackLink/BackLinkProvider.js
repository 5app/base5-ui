import React, {createContext, useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';

import findInHistoryStack from './findInHistoryStack';
import getBackLinks from './getBackLinks';

const BackLinkContext = createContext(false);

function removePreviousEntry(history, indexes) {
	if (!indexes) {
		return history;
	}
	const newHistory = [...history];
	const [x, y] = indexes;
	if (newHistory[x]) {
		newHistory[x].splice(y, 1);
		if (newHistory[x].length === 0) {
			newHistory[x] = undefined;
		}
	}
	return newHistory;
}

function BackLinkProvider({
	children,
	location,
	track,
	getLocationLevel,
	getLocationId,
	wasRedirected,
}) {
	const [historyStack, setHistoryStack] = useState([]);
	const indexOfPreviousEntry = useRef(null);

	useEffect(() => {
		const wrappedLocation = {
			location,
			id: getLocationId(track),
		};
		const locationInHistory = findInHistoryStack(
			wrappedLocation,
			historyStack
		);
		const locationLevel = locationInHistory
			? locationInHistory[0]
			: getLocationLevel(location);

		setHistoryStack(prevHistory => {
			let newHistory = [...prevHistory];
			if (!locationInHistory) {
				if (newHistory[locationLevel]) {
					// If entries exist at the location's level, append it
					newHistory[locationLevel] = [
						...newHistory[locationLevel],
						wrappedLocation,
					];
				} else {
					// If no entries exist, create a new level
					newHistory[locationLevel] = [wrappedLocation];
				}
			} else {
				// The location already exists somewhere in the history stack,
				// so we discard any entries after it.
				const entryIndex = locationInHistory[1];

				newHistory[locationLevel] = newHistory[locationLevel].slice(
					0,
					entryIndex + 1
				);
			}

			// Discard any higher levels
			newHistory = newHistory.slice(0, locationLevel + 1);

			// If we were redirected to this location, discard
			// the previous entry so we can skip the redirect
			if (wasRedirected) {
				newHistory = removePreviousEntry(
					newHistory,
					indexOfPreviousEntry.current
				);
				// Set to null so we don't try to remove it again
				indexOfPreviousEntry.current = null;
			} else {
				indexOfPreviousEntry.current = [
					locationLevel,
					newHistory[locationLevel].length - 1,
				];
			}

			return newHistory;
		});
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
	/**
	 * Indicate that the current location was the result of a redirect.
	 * This will cause the history entry that initiated the redirect
	 * (i.e. the previous one) to be discarded.
	 */
	wasRedirected: PropTypes.bool,
};

export {BackLinkContext};

// @component
export default BackLinkProvider;
