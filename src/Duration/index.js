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

function Duration(props) {
	const {value, getLabel, as: Component, ...otherProps} = props;
	const {hours, minutes, seconds} = getDuration(value);

	const duration = hours
		? [hours, zeroPad(minutes), zeroPad(seconds)]
		: [minutes, zeroPad(seconds)];

	return (
		<Component
			{...otherProps}
			aria-label={getLabel(Number(minutes), Number(hours))}
		>
			{duration.join(':')}
		</Component>
	);
}

Duration.defaultProps = {
	as: 'span',
	getLabel: getDefaultLabel,
	value: 0,
};

Duration.propTypes = {
	/** Change the element rendered by the component */
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
	/** Customise the accessible label, i.e. for localisation */
	getLabel: PropTypes.func,
	/** Duration in seconds */
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export {getDuration};

// @component
export default Duration;
