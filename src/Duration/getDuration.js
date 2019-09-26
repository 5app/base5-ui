function getZeroPaddedRest(value, base) {
	const remaining = value % base;
	if (remaining < 10) {
		return String(remaining).padStart(2, '0');
	} else return remaining;
}

function getDuration(durationInSeconds) {
	const hours = Math.floor(durationInSeconds / (60 * 60));
	let minutes = Math.floor(durationInSeconds / 60);
	minutes = hours ? getZeroPaddedRest(minutes, 60) : minutes;
	const seconds = getZeroPaddedRest(Math.round(durationInSeconds), 60);

	return {
		hours,
		minutes,
		seconds,
	};
}

export default getDuration;
