import React from 'react';
import PropTypes from 'prop-types';
import getDuration from './getDuration';

function zeroPad(number) {
	if (number < 10) {
		return String(number).padStart(2, '0');
	} else return number;
}

const addPluralS = count => (count === 1 ? '' : 's');

function getDefaultLabel(minutes, hours) {
	const readableMins = `${minutes} minute${addPluralS(minutes)}`;
	if (hours) {
		return `${hours} hour${addPluralS(hours)}, ${readableMins}`;
	} else return readableMins;
}

function getDefaultChildren(duration) {
	const {hours, minutes, seconds} = duration;

	const durationFragments = hours
		? [hours, zeroPad(minutes), zeroPad(seconds)]
		: [minutes, zeroPad(seconds)];

	return durationFragments.join(':');
}

function Duration(props) {
	const {children, value, getLabel, as: Component, ...otherProps} = props;
	const duration = getDuration(value);

	return (
		<Component
			{...otherProps}
			aria-label={getLabel(duration.minutes, duration.hours)}
		>
			{children(duration)}
		</Component>
	);
}

Duration.defaultProps = {
	as: 'span',
	children: getDefaultChildren,
	getLabel: getDefaultLabel,
	value: 0,
};

Duration.propTypes = {
	/** Change the element rendered by the component */
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
	/**
	 * Render function to customise the duration readout.
	 * Is passed an object with the fields hours, minutes, seconds,
	 * fullHours, and fullMinutes
	 */
	children: PropTypes.func,
	/** Customise the accessible label, i.e. for localisation */
	getLabel: PropTypes.func,
	/** Duration in seconds */
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export {getDuration};

export default Duration;
