import {useContext} from 'react';

import {BreakpointsContext, BreakpointsProvider} from './BreakpointsProvider';

function useBreakpoints(breakpointsToWatch) {
	const breakpoints = useContext(BreakpointsContext);

	let currentBreakpoint;

	if (breakpointsToWatch && breakpointsToWatch.length) {
		currentBreakpoint = 'base';

		breakpointsToWatch.forEach(bp => {
			if (breakpoints[bp]) {
				currentBreakpoint = bp;
			}
		});
	}

	return {
		...breakpoints,
		currentBreakpoint,
	};
}

export {BreakpointsContext, BreakpointsProvider};
export default useBreakpoints;
