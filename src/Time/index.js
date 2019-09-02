import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';

import {date, getDateString} from './getDateString';

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

export default Time;
