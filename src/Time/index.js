import React, {useReducer, useRef} from 'react';
import PropTypes from 'prop-types';

import useInterval from '../useInterval';
import {date, getDateString} from './getDateString';

function useForceUpdate() {
	const [, forceUpdate] = useReducer(e => e + 1, 0);
	return forceUpdate;
}

/**
 * Relative Time component
 * @param {object} opts - Options
 * @param {string|Date} opts.dateTime - Date of the event
 * @param {string|Date} opts.systemTime - Base time (used in testing)
 * @param {string} opts.locale - Locale of the user, otherwise uses agent default
 * @param {object} opts.readoutFunctions - Object for handling translations
 * @returns {Function} React Hook
 */
function Time({dateTime, systemTime, readoutFunctions, locale, ...props}) {
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
			{...props}
		>
			{dateString || 'n/a'}
		</time>
	);
}

Time.propTypes = {
	/**
	 * Any Date string recognized by `Date.parse()`.
	 * Suffix with `Z` to define the date as a UTC value or offset.
	 */
	dateTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]).isRequired,
	systemTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]),
	readoutFunctions: PropTypes.object,
};

// @component
export default Time;
