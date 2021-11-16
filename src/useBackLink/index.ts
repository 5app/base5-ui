import {useContext} from 'react';
import BackLinkProvider, {BackLinkContext, Location} from './BackLinkProvider';

import {stripSlashFromEnd} from '../utils';

interface BackLinkOptions {
	fallback?: Location;
	basePath?: string | string[];
	shouldSkipLocation?: (location: Location) => boolean;
}

function useBackLink(options: BackLinkOptions = {}): Location | null {
	const {fallback, basePath, shouldSkipLocation} = options;

	const {historyStack, getLocationPathname} = useContext(BackLinkContext);

	if (historyStack.length <= 1) {
		return fallback || null;
	}

	function getShouldSkipLocation(location) {
		const formattedLocation = basePath
			? stripSlashFromEnd(getLocationPathname(location))
			: null;

		const ignoreSubpath = Array.isArray(basePath)
			? basePath.some(path => formattedLocation?.startsWith(path))
			: formattedLocation?.startsWith(basePath);

		const skipLocation = shouldSkipLocation?.(location);

		return ignoreSubpath || skipLocation;
	}

	function getBackLink() {
		// Traverse the history stack in reverse
		// until a suitable backlink is found
		for (let i = historyStack.length - 2; i >= 0; i--) {
			const location = historyStack[i].location;

			if (!getShouldSkipLocation(location)) {
				return location;
			}
		}
	}

	const backLink = getBackLink();

	return backLink || fallback;
}

export {BackLinkProvider, BackLinkContext};

export {slicePathSegments} from '../utils';

export default useBackLink;
