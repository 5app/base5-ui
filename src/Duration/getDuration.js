function getRest(value, base) {
	return value % base;
}

function getDuration(durationInSeconds) {
	const fullHours = durationInSeconds / (60 * 60);
	const hours = Math.floor(fullHours);
	const fullMinutes = Math.floor(durationInSeconds / 60);
	const minutes = hours ? getRest(fullMinutes, 60) : fullMinutes;
	const seconds = getRest(Math.round(durationInSeconds), 60);

	return {
		hours,
		minutes,
		seconds,
		// round full hours to single decimal place
		fullHours: Math.round(fullHours * 10) / 10,
		fullMinutes,
	};
}

export default getDuration;
