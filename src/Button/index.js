import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css, keyframes} from 'styled-components';

import {alpha, mix, getSolidBackgroundShade, isDark} from '../utils/colors';
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
import VisuallyHidden from '../VisuallyHidden';

import 'focus-visible';

export const VALID_SIZE_PROPS = ['small', 'medium', 'default', 'large'];

export const VALID_COLOR_PROPS = [
	'default',
	'primary',
	'important',
	'transparent',
	'shaded',
];

export const VALID_ALIGN_PROPS = ['left', 'right', 'center'];
export const VALID_OVERFLOW_PROPS = ['wrap', 'ellipsis'];

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
			&:not(.is-disabled)::before {
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
		${p => {
			const darkColor = mix(p.theme.text)(
				'white',
				p.theme.textDimStrength * 0.75
			);
			const lightColor = getSolidBackgroundShade(p.theme);

			if (p.color === 'primary' || p.color === 'important') {
				const isTextDark = isDark(
					p.theme.globals.buttons[p.color].text
				);
				return `
				color: ${isTextDark ? darkColor : lightColor};
				background-color: ${isTextDark ? lightColor : darkColor};
				`;
			} else {
				return `
				color: ${darkColor};
				background-color: ${lightColor};
				`;
			}
		}}

		cursor: not-allowed;

		${p =>
			(p.color === 'transparent' || p.color === 'shaded') &&
			css`
				background-color: transparent;
				border-color: transparent;
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

	${Wrapper}.focus-visible > && {
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
	${Wrapper}:not(.is-disabled):active > && {
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
	${Wrapper}:not(.is-disabled):hover > && {
		opacity: 1;
		transition-duration: 50ms;
	}
	/* prettier-ignore */
	${Wrapper}:not(.is-disabled):active > && {
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
 * The button label should just have some horizontal spacing.
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

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const SpinningIcon = styled(Icon)`
	animation: ${spin} 0.6s infinite linear both;
`;

const SpinnerDot = () => (
	<SpinningIcon name="spinnerdot" size="small" disablePointerEvents />
);

const Button = forwardRef((props, ref) => {
	const {
		iconOnly,
		align,
		as,
		children,
		color,
		icon,
		iconRight,
		fullWidth,
		title,
		textOverflow,
		isLoading,
		isDisabled,
		loadingLabel,
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
			aria-live={isLoading !== undefined ? 'polite' : 'off'}
			isDisabled={isDisabled || isLoading}
		>
			<HoverShade />
			<FocusRing color={color} />
			<Content align={align}>
				{icon &&
					iconRight !== true &&
					(isLoading && (!iconRight || iconOnly) ? (
						<SpinnerDot />
					) : (
						<Icon disablePointerEvents name={icon} />
					))}
				{children &&
					(iconOnly ? (
						<VisuallyHidden>
							{children}
							{isLoading && loadingLabel}
						</VisuallyHidden>
					) : (
						<>
							<ButtonText textOverflow={textOverflow}>
								{children}
							</ButtonText>
							<VisuallyHidden>
								{isLoading && loadingLabel}
							</VisuallyHidden>
						</>
					))}
				{!iconOnly &&
					iconRight &&
					(isLoading ? (
						<SpinnerDot />
					) : (
						<Icon
							disablePointerEvents
							name={hasSeparateRightIcon ? iconRight : icon}
						/>
					))}
			</Content>
		</Wrapper>
	);
});

Button.displayName = 'Button';

Button.defaultProps = {
	color: 'default',
	textOverflow: 'wrap',
	loadingLabel: 'Loading…',
};

Button.propTypes = {
	/**
	 * Renders the button in a "pressed" state.
	 * Adds the ARIA attribute `aria-pressed="true"`
	 */
	isActive: PropTypes.bool,
	/**
	 * Visually hides the label but uses it for accessibility.
	 */
	iconOnly: PropTypes.bool,
	/**
	 * Renders the button in its disabled state. Uses
	 * `aria-disabled` to make sure the button label
	 * can still be read out by screen readers.
	 */
	isDisabled: PropTypes.bool,
	/**
	 * Renders the button in its loading state.
	 */
	isLoading: PropTypes.bool,
	/**
	 * Renders the hidden loading  label for the button in its loading state.
	 */
	loadingLabel: PropTypes.string,
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
	color: PropTypes.oneOf(VALID_COLOR_PROPS),
	/**
	 * Choose between one of 4 available theme variants
	 */
	size: PropTypes.oneOf(VALID_SIZE_PROPS),
	/**
	 * Align the button text
	 */
	align: PropTypes.oneOf(VALID_ALIGN_PROPS),
	/**
	 * Control whether long text labels wrap to a new line
	 * or are truncated with an ellipsis
	 * When set to 'ellipsis', the button will automatically
	 * enable the `fullWidth` prop and render as a block-level
	 * element that takes up all available width.
	 */
	textOverflow: PropTypes.oneOf(VALID_OVERFLOW_PROPS),
};

export default Button;
