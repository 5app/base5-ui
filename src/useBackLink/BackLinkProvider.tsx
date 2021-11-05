import React, {createContext, useEffect, useState, useRef} from 'react';

interface LocationObject {
	readonly [name: string]: unknown;
}

export type Location = string | LocationObject;

interface HistoryEntry {
	readonly id: string;
	readonly location: Location;
}

type TrackedVariables = unknown[];

interface BackLinkProviderProps {
	children: React.ReactNode;
	/**
	 * A string or object identifying the current location on your site.
	 * This is what will be returned from the `useBackLink` hook,
	 * so make sure you can construct a proper link URL from it.
	 */
	location: Location;
	/**
	 * A "dependency array" of values that tell the component whether or
	 * not a new entry should be added for the current location.
	 * A new entry will be added only if one or more of the array's items have changed.
	 * All requirements & limitations of `React.useEffect` dependency arrays apply here, too.
	 */
	track: TrackedVariables;
	/**
	 * A function that's called with the `track` array and should
	 * return a unique ID from those values
	 */
	getLocationId?: (track: TrackedVariables) => string;
	/**
	 * A function that's called with a location and should
	 * return the pathname string
	 */
	getLocationPathname?: (location: Location) => string;
	/**
	 * Indicate that the current location was the result of a redirect.
	 * This will cause the history entry that initiated the redirect
	 * (i.e. the previous one) to be discarded.
	 */
	wasRedirected?: boolean;
}

interface HistoryContext {
	historyStack: HistoryEntry[];
	getLocationPathname: (location: Location) => string;
}

export const BackLinkContext = createContext<HistoryContext>({
	historyStack: [],
	getLocationPathname: null,
});

function BackLinkProvider({
	children,
	location,
	track,
	getLocationId,
	getLocationPathname,
	wasRedirected,
}: BackLinkProviderProps): React.ReactNode {
	const [historyStack, setHistoryStack] = useState<HistoryEntry[]>([]);

	const previousLocationIndex = useRef<number>(null);
	const haveTrackedDependenciesChanged = useRef(false);

	// We track dependencies in this separate effect because
	// the main effect needs to run every time the location changes.
	// This allows us to only create _new_ history entries when
	// a tracked dependency changes, but to also keep the current
	// location entry up to date with all changes, tracked or not.
	useEffect(() => {
		haveTrackedDependenciesChanged.current = true;
	}, track); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const wrappedLocation = {
			location,
			id: getLocationId(track),
		};
		let locationIndex = historyStack.findIndex(
			entry => entry.id === wrappedLocation.id
		);

		setHistoryStack(prevHistory => {
			let newHistory = [...prevHistory];

			if (locationIndex === -1) {
				// If this is a new location, add it as a new entry
				newHistory = [...newHistory, wrappedLocation];
				locationIndex = newHistory.length - 1;
			} else {
				// If the tracked dependencies haven't changed, we only
				// update the current location with its latest state, so
				// that going back always restores the last viewed URL state
				if (!haveTrackedDependenciesChanged.current) {
					newHistory[locationIndex] = wrappedLocation;

					return newHistory;
				}

				// The location already exists in the history stack,
				// so we discard any entries after it
				newHistory = newHistory.slice(0, locationIndex + 1);
			}

			const previousIndex = previousLocationIndex.current;

			// If we were redirected to this location, discard
			// the previous entry so we can skip the redirect
			if (
				wasRedirected &&
				previousIndex !== null &&
				newHistory[previousIndex]
			) {
				newHistory.splice(previousIndex, 1);

				// Set to null so we don't try to remove it again
				previousLocationIndex.current = null;
			} else {
				previousLocationIndex.current = locationIndex;
			}

			return newHistory;
		});

		return () => {
			haveTrackedDependenciesChanged.current = false;
		};
	}, [location]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<BackLinkContext.Provider value={{historyStack, getLocationPathname}}>
			{children}
		</BackLinkContext.Provider>
	);
}

BackLinkProvider.defaultProps = {
	getLocationId: track => track.join(','),
	getLocationPathname: location => location?.pathname || location,
};

export default BackLinkProvider;
