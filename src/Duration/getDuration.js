function getZeroPaddedRest(value, base) {
	const remaining = value % base;
	if (remaining < 10) {
		return String(remaining).padStart(2, '0');
	} else return remaining;
}

function getDuration(durationInSeconds) {
	const hours = parseInt(durationInSeconds / (60 * 60));
	let minutes = parseInt(durationInSeconds / 60);
	minutes = hours ? getZeroPaddedRest(minutes, 60) : minutes;
	const seconds = getZeroPaddedRest(durationInSeconds, 60);

	return {
		hours,
		minutes,
		seconds,
	};
}

export default getDuration;
