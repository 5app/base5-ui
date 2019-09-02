const TIME_MINUTE = 60 * 1000;
const TIME_HOUR = 60 * TIME_MINUTE;
const TIME_DAY = 24 * TIME_HOUR;

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

	// Get the number of milliseconds since midnight in the local tz
	const ms_today =
		(Date.now() - new Date().getTimezoneOffset() * 1000 * 60) % TIME_DAY;
	let dateString = 'n/a';

	// Default delay
	let delay = null;

	// A few seconds ago
	if (offset < TIME_MINUTE / 2) {
		delay = TIME_MINUTE / 2 - offset;
		dateString = 'seconds ago';
	}
	// Less than a minute ago
	else if (offset < TIME_MINUTE) {
		delay = TIME_MINUTE - offset;
		dateString = '< 1 minute ago';
	}
	// A few minutes ago
	else if (offset < TIME_MINUTE * 10) {
		delay = TIME_MINUTE;
		const mins = parseInt(offset / TIME_MINUTE);
		dateString = `${mins} minute${mins > 1 ? 's' : ''} ago`;
	}
	// Occcured today...
	else if (offset < ms_today) {
		// Number of ms until end of the day...
		delay = TIME_DAY - ms_today;
		dateString = new Intl.DateTimeFormat(locale, {
			hour12: true,
			hour: 'numeric',
			minute: 'numeric',
		}).format(time);
	}
	// Occurred this week
	else if (offset < TIME_DAY * 6) {
		// Delay a day...
		delay = TIME_DAY;
		// Get day
		dateString = new Intl.DateTimeFormat(locale, {
			weekday: 'short',
			hour12: true,
			hour: 'numeric',
		}).format(time);
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

export {date, getDateString};
