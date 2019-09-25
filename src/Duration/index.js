import React from 'react';
import PropTypes from 'prop-types';
import getDuration from './getDuration';

function getDefaultLabel(minutes, hours) {
	const addPluralS = count => (count === 1 ? '' : 's');

	const readableMins = `${minutes} minute${addPluralS(minutes)}`;
	if (hours) {
		return `${hours} hour${addPluralS(minutes)}, ${readableMins}`;
	} else return readableMins;
}

function Duration(props) {
	const {value, getLabel, as: Component, ...otherProps} = props;
	const {hours, minutes, seconds} = getDuration(value);

	const duration = hours ? [hours, minutes, seconds] : [minutes, seconds];

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
};

Duration.propTypes = {
	/** Change the element rendered by the component */
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
	/** Customise the accessible label, i.e. for localisation */
	getLabel: PropTypes.func,
	/** Duration in seconds */
	value: PropTypes.number.isRequired,
};

export {getDuration};

export default Duration;
