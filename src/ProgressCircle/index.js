import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {fillParent} from '../mixins';
import {alpha} from '../utils';

import Box from '../Box';
import VisuallyHidden from '../VisuallyHidden';
import useUniqueId from '../useUniqueId';

const Wrapper = styled(Box).withConfig({
	shouldForwardProp: prop => !['value', 'scale'].includes(prop),
})`
	position: relative;
	display: inline-block;
	vertical-align: middle;
	width: 1em;
	height: 1em;
	overflow: hidden;

	font-size: calc(${p => p.scale || '1'} * 1rem);
	border-radius: 100%;

	${p =>
		p.value < 0.25 &&
		css`
			background-color: ${alpha(
				p.theme.shade,
				p.theme.shadeStrength - p.theme.shadeStrength * p.value * 4
			)};
		`}
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

	let a11yProps;
	if (role !== 'none') {
		a11yProps = {
			role,
			'aria-valuenow': value * 100,
			'aria-labelledby': labelId,
		};
	}

	return (
		<Wrapper
			as="span"
			{...otherProps}
			{...a11yProps}
			color={color}
			scale={scale}
			value={value}
		>
			{value > 0 && (
				<>
					<InnerHalf value={value} />
					<InnerHalf right value={value} />
				</>
			)}
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
