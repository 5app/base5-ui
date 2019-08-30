import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';

const TIME_MINUTE = 60 * 1000;
const TIME_HOUR = 60 * TIME_MINUTE;
const TIME_DAY = 24 * TIME_HOUR;

function Time({dateTime, systemTime, locale}) {
	// Offset system time with local time...
	const systemOffset = useRef(
		date(systemTime) ? date(systemTime).getTime() - Date.now() : 0
	);

	// Get the date string and the delay before running the next loop
	const [dateString, delayValue] = getDateString({
		dateTime,
		locale,
		systemOffset: systemOffset.current,
	});

	// Set the current generated datestring
	const [outputValue, setOutputValue] = useState(dateString);

	// Set the current generated datestring
	const [delay, setDelay] = useState(delayValue);

	// Set the datestring
	useEffect(() => {
		let timer = null;

		if (delay) {
			timer = setInterval(() => {
				// Get the date string and the delay before running the next loop
				const [dateString, delayValue] = getDateString({
					dateTime,
					locale,
					systemOffset: systemOffset.current,
				});

				// Set the output value...
				setOutputValue(dateString);

				// Set delay
				setDelay(delayValue);
			}, delay);
		}

		return () => {
			clearInterval(timer);
		};
	});

	const title = date(dateTime);

	return (
		<time dateTime={dateTime} title={title && title.toLocaleString()}>
			{outputValue || 'n/a'}
		</time>
	);
}

Time.propTypes = {
	dateTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]).isRequired,
	systemTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]),
};

function getDateString({dateTime, locale, systemOffset = 0}) {
	// Define the offset, how old is this...
	const time = date(dateTime);

	if (isNaN(time)) {
		return [];
	}

	// Update the system time
	const systemtime = new Date();
	systemtime.setTime(Date.now() + systemOffset);

	const offset = time && systemtime && systemtime.getTime() - time.getTime();

	const ms_today = Date.now() % TIME_DAY;

	let dateString = 'n/a';

	// Default delay
	let delay = null;

	// A few seconds ago
	if (offset < TIME_MINUTE / 2) {
		delay = TIME_MINUTE / 2 - offset;
		dateString = 'seconds ago';
		// Less than a minute ago
	} else if (offset < TIME_MINUTE) {
		delay = TIME_MINUTE - offset;
		dateString = '< 1 minute ago';
		// A few minutes ago
	} else if (offset < TIME_MINUTE * 10) {
		delay = TIME_MINUTE;

		const mins = parseInt(offset / TIME_MINUTE);

		dateString = `${mins} minute${mins > 1 ? 's' : ''} ago`;
	}
	// Occcured today...
	else if (offset < ms_today) {
		delay = ms_today - offset;

		dateString = new Intl.DateTimeFormat(locale, {
			hour12: true,
			hour: 'numeric',
			minute: 'numeric',
		}).format(time);
	}
	// Occurred this week
	else if (offset < TIME_DAY * 6) {
		delay = TIME_DAY * 6 - offset;

		// Get day
		if (time.getDay() === (systemtime.getDay() - 1 + 7) % 7) {
			dateString = 'Yesterday, ';
			dateString += new Intl.DateTimeFormat(locale, {
				hour12: true,
				hour: 'numeric',
			}).format(time);
		} else {
			dateString = new Intl.DateTimeFormat(locale, {
				weekday: 'short',
				hour12: true,
				hour: 'numeric',
			}).format(time);
		}
	} else if (time.getYear() === systemtime.getYear()) {
		dateString = new Intl.DateTimeFormat(locale, {
			month: 'short',
			day: 'numeric',
		}).format(time);
	} else {
		dateString = new Intl.DateTimeFormat(locale, {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		}).format(time);
	}

	return [dateString, delay];
}

function date(d) {
	if (!d) {
		return null;
	}
	try {
		return new Date(d);
	} catch (e) {
		return null;
	}
}

export default Time;
