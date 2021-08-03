import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {fillParent} from '../mixins';

import Box from '../Box';
import VisuallyHidden from '../VisuallyHidden';
import useUniqueId from '../useUniqueId';

const Wrapper = styled(Box).withConfig({
	shouldForwardProp: prop => prop !== 'scale',
})`
	position: relative;
	display: inline-block;
	width: 1em;
	height: 1em;
	vertical-align: middle;

	font-size: calc(${p => p.scale || '1'} * 1rem);
`;

const InnerHalf = styled.span.withConfig({
	shouldForwardProp: prop => !['value', 'right'].includes(prop),
})`
	${fillParent}
	width: 50%;
	${p =>
		p.right &&
		css`
			left: 50%;
		`}
	overflow: hidden;

	&::before {
		content: '';
		${fillParent}
		border-radius: ${p => (p.right ? '0 20em 20em 0' : '20em 0 0 20em')};
		background-color: currentColor;
		transform-origin: center ${p => (p.right ? 'left' : 'right')};
		transform: rotate(${getRotation});
	}
`;

function getRotation({value, right}) {
	let multiplier = value;

	if (right) {
		if (value < 0.5) {
			return '180deg';
		}
		multiplier = value - 0.5;
	}

	return `${Math.max(0, 180 - multiplier * 360)}deg`;
}

function ProgressCircle({
	color,
	value,
	role,
	scale,
	a11yLabel,
	id,
	...otherProps
}) {
	const labelId = useUniqueId(id);
	return (
		<Wrapper
			as="span"
			{...otherProps}
			role={role}
			aria-valuenow={role !== 'none' ? value * 100 : null}
			aria-labelledby={role !== 'none' ? labelId : null}
			color={color}
			scale={scale}
		>
			<InnerHalf value={value} />
			<InnerHalf right value={value} />
			<VisuallyHidden id={labelId}>{a11yLabel}</VisuallyHidden>
		</Wrapper>
	);
}

ProgressCircle.defaultProps = {
	color: 'highlight',
	role: 'progressbar',
	scale: 1,
};

ProgressCircle.propTypes = {
	/**
	 * A number between 0 and 1
	 */
	value: PropTypes.number.isRequired,
	/**
	 * An accessible label describing the nature of the value
	 */
	a11yLabel: PropTypes.string.isRequired,
	/**
	 * Set the circle's color, either a valid CSS color or the
	 * name of a color block from the theme
	 */
	color: PropTypes.string,
	/**
	 * The role of the element. By default, it's a progressbar.
	 * Change it to 'meter' or 'none', depending on your use case.
	 */
	role: PropTypes.oneOf(['none', 'progressbar', 'meter']),
	/**
	 * Adjust the size of the component using this scaling factor.
	 * A value of 2 will make the circle twice as large.
	 */
	scale: PropTypes.number,
};

export default ProgressCircle;
