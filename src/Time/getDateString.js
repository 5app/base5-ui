const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;

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

function getDateString({
	dateTime,
	locale = 'en-GB',
	systemOffset = 0,
	readoutFunctions = {},
	getMinReadoutLabel,
	getSecReadoutLabel,
}) {
	// Default hourCycle value
	let hourCycle = 'h24';
	const hourCycle12Languages = ['en-GB', 'en-US', 'es-ES'];
	if (hourCycle12Languages.includes(locale)) {
		// Set hourCycle to 12 for languages for which we want to display AM / PM
		hourCycle = 'h12';
	}

	// Set default readout functions
	const {
		secondsAgoReadout = count =>
			getSecReadoutLabel
				? getSecReadoutLabel(count)
				: `${count} second${count > 1 ? 's' : ''} ago`,
		minutesAgoReadout = count =>
			getMinReadoutLabel
				? getMinReadoutLabel(count)
				: `${count} minute${count > 1 ? 's' : ''} ago`,
	} = readoutFunctions;

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
		(Date.now() - new Date().getTimezoneOffset() * 1000 * 60) % ONE_DAY;
	let dateString = 'n/a';

	// Default delay
	let delay = null;

	// A few seconds ago
	if (offset < ONE_MINUTE) {
		const FIVE_SECONDS = ONE_SECOND * 5;
		delay = offset % FIVE_SECONDS || FIVE_SECONDS;
		const seconds = parseInt(offset / 1000);
		dateString = secondsAgoReadout(seconds || 1);
	}
	// A few minutes ago
	else if (offset < ONE_MINUTE * 10) {
		delay = offset % ONE_MINUTE || ONE_MINUTE;
		const mins = parseInt(offset / ONE_MINUTE);
		dateString = minutesAgoReadout(mins);
	}
	// Occured today...
	else if (offset < ms_today) {
		// Number of ms until end of the day...
		delay = ONE_DAY - ms_today;
		dateString = new Intl.DateTimeFormat(locale, {
			hourCycle,
			hour: 'numeric',
			minute: 'numeric',
		}).format(time);
	}
	// Occurred this week
	else if (offset < ONE_DAY * 6) {
		// Delay a day...
		delay = ONE_DAY;
		// Get day
		dateString = new Intl.DateTimeFormat(locale, {
			weekday: 'short',
			hourCycle,
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
