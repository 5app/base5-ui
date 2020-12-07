import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {alpha} from '../utils/colors';
import {pxToRem} from '../utils/units';
import {fillParent, ellipsis, overflowWrap} from '../mixins';
import {
	getPropFilter,
	getPropNamesFromPropDefinition,
} from '../utils/styleProps';

import positionProps, {positionPropsDef} from '../styleProps/positionProps';
import marginProps, {marginPropsDef} from '../styleProps/marginProps';
import {alignMap} from '../styleProps/flexProps';

import ButtonCore from '../ButtonCore';
import Icon from '../Icon';

import 'focus-visible';

const stylePropNames = getPropNamesFromPropDefinition([
	...positionPropsDef,
	...marginPropsDef,
]);

const shouldForwardProp = getPropFilter([
	'round',
	'square',
	'fullWidth',
	'color',
	'size',
	'align',
	...stylePropNames,
]);

const Wrapper = styled(ButtonCore).withConfig({
	shouldForwardProp,
})`
	/* Structure, size & spacing */

	${positionProps}

	${p =>
		p.fullWidth &&
		css`
			display: block;
			width: 100%; /* needed for button element */
		`}
	padding: ${pxToRem(12)};
	${marginProps}

	font-size: ${p => p.theme.globals.typeScale.m};
	font-weight: 600;
	line-height: 1;
	text-align: ${p => p.align || 'center'};
	text-decoration: none;

	${p =>
		!p.square &&
		css`
			border-radius: ${p.round
				? '2rem'
				: pxToRem(p.theme.globals.borderRadius.buttons)};
		`}

	${p =>
		p.size === 'large' &&
		css`
			padding: ${pxToRem(19)};
		`}

	${p =>
		p.size === 'medium' &&
		css`
			padding: ${pxToRem(8)};
			font-size: ${p => p.theme.globals.typeScale.s};
		`}

	${p =>
		p.size === 'small' &&
		css`
			padding: ${pxToRem(5)};
			font-size: ${p => p.theme.globals.typeScale.xs};
		`}

	/* Colours */

	${p =>
		(p.color === 'default' ||
			p.color === 'primary' ||
			p.color === 'important') &&
		css`
			color: ${p => p.theme.globals.buttons[p.color].text};
			background-color: ${p =>
				p.theme.globals.buttons[p.color].background};
		`}

	${p =>
		p.color === 'transparent' &&
		css`
			color: ${p => p.theme.links};
			background-color: transparent;
		`}

	${p =>
		p.color === 'shaded' &&
		css`
			color: ${p => p.theme.links};
			background-color: ${p =>
				alpha(p.theme.shade, p.theme.shadeStrength)};
		`}

	/* Add a border to default button */
	${p =>
		p.color === 'default' &&
		css`
			&::before {
				content: '';
				${fillParent}
				border-radius: inherit;
				border: 1px solid
					${p => alpha(p.theme.shade, p.theme.lineStrength)};
			}
		`}

	&.focus-visible {
		/* Override the default focus indicator of ButtonCore
		 * Actual focus styles are applied using the FocusRing
		 * component further below */
		outline: none;
	}

	&.is-disabled {
		color: white;
		background-color: ${alpha('black', 0.3)};
		border-color: transparent;
		opacity: 0.3;
		text-shadow: 0 1px 3px black;
		cursor: not-allowed;

		${p =>
			(p.color === 'transparent' || p.color === 'shaded') &&
			css`
				color: ${p => p.theme.text};
				background-color: transparent;
				border-color: transparent;
				text-shadow: none;
			`}
	}
`;

const _3px = pxToRem(3);

const FocusRing = styled.span.withConfig({
	shouldForwardProp: prop => prop !== 'color',
})`
	${fillParent}
	border-radius: inherit;

	box-shadow: 0 0 0 ${_3px}
		${p => alpha(p.theme.shade, p.theme.lineStrength + 0.05)};

	opacity: 0;
	transition: opacity 250ms linear;
	will-change: opacity;

	${Wrapper}.focus-visible > & {
		top: -${_3px};
		left: -${_3px};
		bottom: -${_3px};
		right: -${_3px};

		box-shadow: 0 0 0 ${_3px}
			${p =>
				p.color === 'primary' || p.color === 'important'
					? p.theme.globals.buttons[p.color].background
					: p.theme.links};

		opacity: 1;
		transition-duration: 50ms;
	}
	/* prettier-ignore */
	${Wrapper}:not(.is-disabled):active > & {
		opacity: 1;
		transition-duration: 50ms;
	}
`;

const HoverShade = styled.span`
	${fillParent}
	border-radius: inherit;

	background-color: ${p =>
		alpha(p.theme.shade, Math.min(p.theme.shadeStrength, 0.12))};

	opacity: 0;
	transition: opacity 250ms linear;
	will-change: opacity;

	${Wrapper}.is-active > & {
		opacity: 0.666;
		box-shadow: inset 0 0 0.25rem rgba(0, 0, 0, 0.5);
	}
	/* prettier-ignore */
	${Wrapper}:not(.is-disabled):hover > & {
		opacity: 1;
		transition-duration: 50ms;
	}
	/* prettier-ignore */
	${Wrapper}:not(.is-disabled):active > & {
		opacity: 0;
		transition-duration: 250ms;
	}
`;

const Content = styled.span`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: ${p => (p.align ? alignMap[p.align] : 'center')};
`;

/**
 * The button label should just have some horinzontal spacing.
 * But if `textOverflow="ellipsis" is set, the Button label
 * will have overflow set to "hidden", which can cause the
 * descenders of some characters (g, y, j) to be cut off.
 * To avoid this, we also give the text label some vertical
 * padding and visually remove it using negative margins.
 */

const ButtonText = styled.span.withConfig({
	shouldForwardProp: prop => prop !== 'textOverflow',
})`
	padding: ${p => p.theme.globals.spacing.xxs};
	margin: -${p => p.theme.globals.spacing.xxs} 0;
	vertical-align: middle;
	${p => (p.textOverflow === 'ellipsis' ? ellipsis : overflowWrap)}
`;

const Button = forwardRef((props, ref) => {
	const {
		align,
		as,
		children,
		color,
		icon,
		iconRight,
		fullWidth,
		title,
		textOverflow,
		...otherProps
	} = props;

	const hasSeparateRightIcon = iconRight && typeof iconRight === 'string';

	return (
		<Wrapper
			ref={ref}
			forwardedAs={as}
			position="relative"
			aria-label={props['aria-label'] || title}
			color={color}
			align={align}
			fullWidth={fullWidth || textOverflow === 'ellipsis'}
			{...otherProps}
		>
			<HoverShade />
			<FocusRing color={color} />
			<Content align={align}>
				{icon && iconRight !== true && (
					<Icon disablePointerEvents name={icon} />
				)}
				{children && (
					<ButtonText textOverflow={textOverflow}>
						{children}
					</ButtonText>
				)}
				{iconRight && (
					<Icon
						disablePointerEvents
						name={hasSeparateRightIcon ? iconRight : icon}
					/>
				)}
			</Content>
		</Wrapper>
	);
});

Button.displayName = 'Button';

Button.defaultProps = {
	color: 'default',
	textOverflow: 'wrap',
};

Button.propTypes = {
	/**
	 * Renders the button in a "pressed" state.
	 * Adds the ARIA attribute `aria-pressed="true"`
	 */
	isActive: PropTypes.bool,
	/**
	 * Renders the button in its disabled state. Uses
	 * `aria-disabled` to make sure the button label
	 * can still be read out by screen readers.
	 */
	isDisabled: PropTypes.bool,
	/**
	 * Choose an icon to display next to the button's label
	 */
	icon: PropTypes.string,
	/**
	 * When passed as a Boolean, the icon defined under `icon`
	 * will be displayed on the right-hand side.
	 * You can also pass a string to display a separate icon
	 * on the right.
	 */
	iconRight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	/**
	 * Render the button with fully rounded corners, useful for
	 * circular icon-only buttons.
	 */
	round: PropTypes.bool,
	/**
	 * Render the button with square corners, ignoring the theme config
	 * values for button border radius
	 */
	square: PropTypes.bool,
	/**
	 * Let the button take up all available width
	 */
	fullWidth: PropTypes.bool,
	/**
	 * Choose between one of 5 available theme variants
	 */
	color: PropTypes.oneOf([
		'default',
		'primary',
		'important',
		'transparent',
		'shaded',
	]),
	/**
	 * Choose between one of 4 available theme variants
	 */
	size: PropTypes.oneOf(['small', 'medium', 'default', 'large']),
	/**
	 * Align the button text
	 */
	align: PropTypes.oneOf(['left', 'right', 'center']),
	/**
	 * Control whether long text labels wrap to a new line
	 * or are truncated with an ellipsis
	 * When set to 'ellipsis', the button will automatically
	 * enable the `fullWidth` prop and render as a block-level
	 * element that takes up all available width.
	 */
	textOverflow: PropTypes.oneOf(['wrap', 'ellipsis']),
};

// @component
export default Button;
