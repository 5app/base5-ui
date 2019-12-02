function getRest(value, base) {
	return value % base;
}

function getDuration(durationInSeconds) {
	const hours = Math.floor(durationInSeconds / (60 * 60));
	let minutes = Math.floor(durationInSeconds / 60);
	minutes = hours ? getRest(minutes, 60) : minutes;
	const seconds = getRest(Math.round(durationInSeconds), 60);

	return {
		hours,
		minutes,
		seconds,
	};
}

export default getDuration;
