import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {alpha} from '../utils/colors';
import {pxToRem} from '../utils/units';
import {fillParent, ellipsis} from '../mixins';

import ButtonCore from '../ButtonCore';
import Icon from '../Icon';

const Wrapper = styled(({buttonRef, component, round, square, fullWidth, color, size, align, ...otherProps}) =>
	<ButtonCore ref={buttonRef} as={component} {...otherProps} />
)`
	/* Structure, size & spacing */

	position: relative;

	${p => p.fullWidth && css`
		display: block;
		width: 100%; /* needed for button element */
	`}
	padding: ${pxToRem(12)};

	font-size: ${p => p.theme.globals.typeScale.m};
	font-weight: 600;
	line-height: 1;
	text-align: ${p => p.align || 'center'};
	text-decoration: none;
	text-transform: uppercase;

	${p => !p.square && css`
		border-radius: ${p.round ? '2rem' : pxToRem(p.theme.globals.borderRadius.buttons)};
	`}

	${p => p.size === 'large' && css`
		padding: ${pxToRem(19)};
	`}

	${p => p.size === 'medium' && css`
		padding: ${pxToRem(8)};
		font-size: ${p => p.theme.globals.typeScale.s};
	`}

	${p => p.size === 'small' && css`
		padding: ${pxToRem(5)};
		text-transform: initial;
		font-size: ${p => p.theme.globals.typeScale.xs};
	`}

	/* Colours */

	${p => (p.color === 'default'
		|| p.color === 'primary'
		|| p.color === 'important') && css`
		color: ${p => p.theme.globals.buttons[p.color].text};
		background-color: ${p => p.theme.globals.buttons[p.color].background};
	`}

	${p => p.color === 'transparent' && css`
		color: ${p => p.theme.links};
		background-color: transparent;
	`}

	${p => p.color === 'shaded' && css`
		color: ${p => p.theme.links};
		background-color: ${p => alpha(p.theme.shade, p.theme.shadeStrength)};
	`}

	/* Add a border to default button */
	${p => p.color === 'default' && css`
		&::before {
			content: '';
			${fillParent}
			border-radius: inherit;
			border: 1px solid ${p => alpha(p.theme.shade, p.theme.lineStrength)};
		}
	`}

	&.is-disabled {
		color: white;
		background-color: ${alpha('black', 0.3)};
		border-color: transparent;
		opacity: 0.3;
		text-shadow: 0 1px 3px black;
		cursor: not-allowed;

		${p => (p.color === 'transparent' || p.color === 'shaded') && css`
			color: ${p => p.theme.text};
			background-color: transparent;
			border-color: transparent;
			text-shadow: none;
		`}
	}
`;

const FocusRing = styled.span`
	${fillParent}
	border-radius: inherit;

	${p => !p.color && css`
		border: 1px solid ${p => alpha(p.theme.shade, p.theme.lineStrength)};
	`}

	box-shadow: 0 0 0 ${pxToRem(3)} ${p => alpha(p.theme.shade, p.theme.lineStrength + 0.05)};

	opacity: 0;
	transition: opacity 250ms linear;
	will-change: opacity;

	${Wrapper}.is-focused > &,
	${Wrapper}:not(.is-disabled):active > & {
		opacity: 1;
		transition-duration: 50ms;
	}
`;

const HoverShade = styled.span`
	${fillParent}
	border-radius: inherit;

	background-color: ${p => alpha(p.theme.shade, Math.min(p.theme.shadeStrength, 0.15))};

	opacity: 0;
	transition: opacity 250ms linear;
	will-change: opacity;

	${Wrapper}.is-active > & {
		opacity: 0.666;
		box-shadow: inset 0 0 ${pxToRem(5)} ${alpha('black', 0.5)};
	}

	${Wrapper}:not(.is-disabled):hover > & {
		opacity: 1;
		transition-duration: 50ms;
	}

	${Wrapper}:not(.is-disabled):active > & {
		opacity: 0;
		transition-duration: 250ms;
	}
`;

const Content = styled.span`
	display: block;
	transform: translateZ(0);
`;

const ButtonText = styled.span`
	padding: 0 ${p => p.theme.globals.spacing.xxs};
	vertical-align: middle;
`;

const Subtitle = styled.span`
	display: block;
	padding: ${p => p.theme.globals.spacing.xxxs} ${p => p.theme.globals.spacing.xxs};
	${ellipsis}
	opacity: ${p => p.theme.textDimStrength};

	text-transform: none;

	font-size: ${p => p.theme.globals.typeScale.s};
`;

const Button = React.forwardRef((props, ref) => {
	const {
		as,
		children,
		icon,
		iconRight,
		subline,
		title,
		...otherProps
	} = props;

	const iconEl = icon && <Icon name={icon} />;

	return (
		<Wrapper
			component={as}
			buttonRef={ref}
			aria-label={props['aria-label'] || title}
			{...otherProps}
		>
			<HoverShade />
			<FocusRing />
			<Content>
				{!iconRight && iconEl}
				{children &&
					<ButtonText>{children}</ButtonText>
				}
				{iconRight && iconEl}
				{subline &&
					<Subtitle>
						{subline}
					</Subtitle>
				}
			</Content>
		</Wrapper>
	);
});

Button.defaultProps = {
	color: 'default',
};

Button.propTypes = {
	icon: PropTypes.string,
	iconRight: PropTypes.bool,
	subline: PropTypes.string,

	round: PropTypes.bool,
	square: PropTypes.bool,
	fullWidth: PropTypes.bool,
	color: PropTypes.oneOf([
		'default',
		'primary',
		'important',
		'transparent',
		'shaded',
	]),
	size: PropTypes.oneOf([
		'small',
		'medium',
		'large',
	]),
	align: PropTypes.string,
};

export default Button;
