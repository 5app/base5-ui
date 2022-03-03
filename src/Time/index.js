import React, {useReducer, useRef} from 'react';
import PropTypes from 'prop-types';

import useInterval from '../useInterval';
import {date, getDateString} from './getDateString';

function useForceUpdate() {
	const [, forceUpdate] = useReducer(e => e + 1, 0);
	return forceUpdate;
}

function Time({dateTime, systemTime, readoutFunctions, locale, ...otherProps}) {
	const forceUpdate = useForceUpdate();

	// Offset system time with local time...
	const systemOffset = useRef(
		date(systemTime) ? date(systemTime).getTime() - Date.now() : 0
	);

	// Get the date string and the delay before running the next loop
	const [dateString, delay] = getDateString({
		readoutFunctions,
		dateTime,
		locale,
		systemOffset: systemOffset.current,
	});

	// Set the datestring
	useInterval(forceUpdate, delay);

	const title = date(dateTime);

	return (
		<time
			dateTime={dateTime}
			title={title && title.toLocaleString()}
			{...otherProps}
		>
			{dateString || 'n/a'}
		</time>
	);
}

Time.propTypes = {
	/**
	 * Date of the event. Any Date string recognized by `Date.parse()`.
	 * Suffix with `Z` to define the date as a UTC value or offset.
	 */
	dateTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]).isRequired,
	/**
	 * Base time (used in testing)
	 */
	systemTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]),
	/**
	 * Locale of the user, otherwise uses agent default
	 */
	locale: PropTypes.string,
	/**
	 * Object containing callbacks for handling translations.
	 * The functions are called with the count of seconds or
	 * minutes respectively, and should return a string like
	 * 'X minute(s) ago'.
	 */
	readoutFunctions: PropTypes.shape({
		secondsAgoReadout: PropTypes.func,
		minutesAgoReadout: PropTypes.func,
	}),
};

export default Time;
