import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {getColorBlock} from '../utils/colors';

import VisuallyHidden from '../VisuallyHidden';

function getMeterColor({value, low, high, min, max, theme}) {
	if (value === null) {
		return null;
	}
	if (value <= low || value === min) {
		return getColorBlock('negative', theme);
	} else if (value >= high || value === max) {
		return getColorBlock('positive', theme);
	} else {
		return getColorBlock('neutral', theme);
	}
}

function getMeterWidth({value, min = 0, max = 1, visualMin = 0}) {
	if (value === null || value === undefined) return '0%';

	const difference = max - min;
	const clampedValue = Math.max(value, visualMin);
	const fraction = (clampedValue - min) / difference;

	return `${fraction * 100}%`;
}

const Wrapper = styled.div.attrs({
	role: 'presentation',
})`
	width: 100%;
	height: 0.3rem;
	background-color: rgba(0, 0, 0, 0.1);
`;

const MockMeter = styled.div.attrs({
	role: 'presentation',
	'aria-hidden': 'true',
})`
	width: ${getMeterWidth};
	height: 0.3rem;

	background: ${p =>
		p.color ? getColorBlock(p.color, p.theme) : getMeterColor(p)};
	transition: width 300ms ease-out;
`;

const Meter = ({...props}) => {
	return (
		<Wrapper>
			<MockMeter {...props} />
			<VisuallyHidden as="meter" {...props} />
		</Wrapper>
	);
};

Meter.propTypes = {
	color: PropTypes.string,
	high: PropTypes.number,
	low: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
	optimum: PropTypes.number,
	value: PropTypes.number,
	visualMin: PropTypes.number,
};

export default Meter;
