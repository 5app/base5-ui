import {useCallback} from 'react';

/**
 * Merges the passed-in react refs.
 * Replaces utils/mergeRefs which could cause too many re-renders
 *
 * @param {object[]|func[]} refs - Array of react refs to merge
 */

function useMergedRefs(refs) {
	return useCallback(current => {
		refs.forEach(ref => {
			if (typeof ref === 'function') {
				ref(current);
			} else if (ref && !Object.isFrozen(ref)) {
				ref.current = current;
			}
		});
		/* The refs must be passed as an array, so it's
		 * safe to directly use them as callback dependencies,
		 * even though eslint can't statically verify it. */
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, refs);
}

export default useMergedRefs;
