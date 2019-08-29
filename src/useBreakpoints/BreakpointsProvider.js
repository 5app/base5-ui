import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

const BreakpointsContext = React.createContext({});

const defaultBreakpoints = {
	base: true,
};

function BreakpointsProvider({breakpoints: breakpointsToWatch, children}) {
	const [breakpoints, setBreakpoints] = useState(defaultBreakpoints);
	const mediaQueriesRef = useRef({});

	useEffect(() => {
		if (typeof window !== 'object') return;

		const mediaQueries = mediaQueriesRef.current;

		function updateMatches(bp) {
			return () => {
				setBreakpoints(prevState => ({
					...prevState,
					[bp]: mediaQueries[bp].matches,
				}));
			};
		}

		// Create a list `mediaQueries` of matchMedia watchers for the breakpoints
		// passed to the component
		Object.keys(breakpointsToWatch).forEach(bp => {
			mediaQueries[bp] = window.matchMedia(
				`(min-width: ${breakpointsToWatch[bp]})`
			);
			mediaQueries[bp].addListener(updateMatches(bp));
			updateMatches(bp)();
		});

		return function cleanUp() {
			Object.keys(breakpointsToWatch).forEach(bp => {
				mediaQueries[bp].removeListener(updateMatches(bp));
			});
		};
	}, [breakpointsToWatch, mediaQueriesRef]);

	return (
		<BreakpointsContext.Provider value={breakpoints}>
			{children}
		</BreakpointsContext.Provider>
	);
}

BreakpointsProvider.propTypes = {
	breakpoints: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
	).isRequired,
};

export {BreakpointsContext, BreakpointsProvider};
