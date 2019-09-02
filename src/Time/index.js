import React, {useReducer, useRef} from 'react';
import PropTypes from 'prop-types';

import useInterval from '../useInterval';
import {date, getDateString} from './getDateString';

function useForceUpdate() {
	const [, forceUpdate] = useReducer(e => e + 1, 0);
	return forceUpdate;
}

function Time({dateTime, systemTime, locale}) {
	const forceUpdate = useForceUpdate();

	// Offset system time with local time...
	const systemOffset = useRef(
		date(systemTime) ? date(systemTime).getTime() - Date.now() : 0
	);

	// Get the date string and the delay before running the next loop
	const [dateString, delay] = getDateString({
		dateTime,
		locale,
		systemOffset: systemOffset.current,
	});

	// Set the datestring
	useInterval(forceUpdate, delay);

	const title = date(dateTime);

	return (
		<time dateTime={dateTime} title={title && title.toLocaleString()}>
			{dateString || 'n/a'}
		</time>
	);
}

Time.propTypes = {
	/** Any Date string recognized by `Date.parse()`.
	 * Suffix with `Z` to define the date as a UTC value or offset. */
	dateTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]).isRequired,
	systemTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]),
};

export default Time;
