import React, {forwardRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
	pxToRem,
	alpha,
	getBackgroundShade,
	getColorBlock,
	contrast,
	createStyleFunction,
	getPropFilter,
	getPropNamesFromPropDefinition,
} from '../utils';

import {fillParent, borderValue, ie11Hack} from '../mixins';

import Box from '../Box';
import ButtonCore from '../ButtonCore';
import Button from '../Button';
import Text from '../Text';
import Icon from '../Icon';
import ThemeSection from '../ThemeSection';

import {marginPropsDef} from '../styleProps/marginProps';

const marginProps = createStyleFunction(marginPropsDef);
const marginPropNames = getPropNamesFromPropDefinition(marginPropsDef);

const pillHeight = pxToRem(24);
const iconSpacing = pxToRem(30);
const _3px = pxToRem(3);

const customWrapperProps = [
	...marginPropNames,
	'background',
	'dimmed',
	'isClickable',
	'hasIcon',
	'hasSideButton',
];

const Wrapper = styled.div.withConfig({
	shouldForwardProp: getPropFilter(customWrapperProps),
})`
	position: relative;

	${p =>
		p.hasSideButton
			? `
		flex-shrink: 1;
	`
			: `
		display: inline-block;
		vertical-align: top;
	`}

	max-width: 100%;
	min-width: 0;

	${marginProps}

	padding: 0 ${p => p.theme.globals.spacing.xs};
	${p =>
		p.hasIcon &&
		`
			padding-left: ${iconSpacing};
		`}

	font-size: ${p => p.theme.globals.typeScale.xs};
	font-weight: 600;
	line-height: ${pillHeight};

	color: ${p =>
		p.background
			? contrast(getColorBlock(p.background, p.theme))
			: p.theme.text};
	background-color: ${p =>
		p.background
			? getColorBlock(p.background, p.theme)
			: getBackgroundShade(p.theme)};

	transition: background-color 250ms linear;
	border-radius: 1em;

	${p =>
		p.hasSideButton &&
		`
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			border-right: ${borderValue(p.theme)};
		`}

	${p =>
		p.dimmed &&
		`
			opacity: ${p.theme.textDimStrength};
		`};

	${p =>
		!p.isClickable &&
		`
			cursor: default;
		`};

	&.focus-visible {
		/* Override the default focus indicator of ButtonCore
		 * Actual focus styles are applied using the FocusRing
		 * component further below */
		outline: none;
	}

	/* IE11 won't 'shrink-wrap' contents (stop growing to allow
	 * content to wrap or be truncated) unless overflow is set
	 * to 'hidden'. Who knows why.
	 * Doing this breaks the focus outline, so we restore it
	 * with a simpler (and slightly uglier) implementation. */
	@media ${ie11Hack} {
		overflow: hidden;

		&.focus-visible {
			outline: 3px solid currentColor;
		}
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

		box-shadow: 0 0 0 ${_3px} ${p => p.theme.links};

		opacity: 1;
		transition-duration: 50ms;
	}

	/* prettier-ignore */
	${Wrapper}:not(.is-disabled):active > & {
		opacity: 1;
		transition-duration: 50ms;
	}
`;

const IconWrapper = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${pillHeight};
	height: ${pillHeight};

	font-size: 0.9em;

	color: ${p => p.theme.text};
	background-color: ${p => p.theme.background};

	border-radius: 100%;
`;

const SideButton = styled(Button).withConfig({
	shouldForwardProp: prop => prop !== 'background',
})`
	height: ${pillHeight};
	padding: ${pxToRem(5)};
	border-radius: 0 1em 1em 0;

	color: ${p =>
		p.background
			? contrast(getColorBlock(p.background, p.theme))
			: p.theme.text};
	background-color: ${p =>
		p.background
			? getColorBlock(p.background, p.theme)
			: getBackgroundShade(p.theme)};
`;

function ConditionalFlexWrapper({wrap, children}) {
	if (!wrap) {
		return children;
	}

	return (
		<Box display="inline-flex" alignItems="center" maxWidth="100%">
			{children}
		</Box>
	);
}

function defaultIconRenderer({iconName, iconColor}) {
	if (!iconName) {
		return null;
	}

	return (
		<ThemeSection name="colorBlock" colorBlock={iconColor || iconName}>
			<IconWrapper>
				<Icon name={iconName} data-iconname={iconName} />
			</IconWrapper>
		</ThemeSection>
	);
}

const Pill = forwardRef((props, ref) => {
	const {
		as,
		background,
		children,
		deleteLabel,
		dimmed,
		forwardedAs,
		icon,
		iconColor,
		iconRenderer,
		id,
		onDelete,
		...otherProps
	} = props;

	const isClickable =
		otherProps.onClick ||
		otherProps.to ||
		otherProps.href ||
		otherProps.isClickable;

	const hasSideButton = Boolean(onDelete);
	const token = iconRenderer({iconName: icon, iconColor});

	if (hasSideButton && !deleteLabel) {
		console.warn(
			`Pill: No 'deleteLabel' prop was supplied to a Pill component ${
				typeof children === 'string' ? `'${children}'` : null
			} with an 'onDelete' prop. Please supply a label for screen reader users.`
		);
	}

	return (
		<ConditionalFlexWrapper wrap={hasSideButton}>
			<Wrapper
				{...otherProps}
				ref={ref}
				as={isClickable ? ButtonCore : as}
				forwardedAs={isClickable ? as : forwardedAs}
				id={id ? `${id}_wrapper` : null}
				isClickable={isClickable}
				dimmed={dimmed}
				hasIcon={Boolean(token)}
				hasSideButton={hasSideButton}
				background={background}
			>
				{isClickable && (
					<>
						<HoverShade />
						<FocusRing />
					</>
				)}
				{token && (
					<Box position="absolute" top left>
						{token}
					</Box>
				)}
				<Text display="block" overflow="ellipsis">
					{children}
				</Text>
			</Wrapper>
			{hasSideButton && (
				<SideButton
					round
					icon="x"
					id={id ? `${id}_side_button` : null}
					size="small"
					color="shaded"
					background={background}
					onClick={onDelete}
					aria-label={deleteLabel}
				/>
			)}
		</ConditionalFlexWrapper>
	);
});

Pill.displayName = 'Pill';

Pill.defaultProps = {
	iconRenderer: defaultIconRenderer,
};

Pill.propTypes = {
	/**
	 * Name of the icon to be shown
	 */
	icon: PropTypes.string,
	/**
	 * Set the color of the icon. Can be a primitive colour value or the name of a colorBlock.
	 * If there's a colorBlock of the same name as the chosen icon, it will automatically be used.
	 */
	iconColor: PropTypes.string,
	/**
	 * Customise the way the icons are rendered. Will be called with an object containing
	 * the properties `iconName` and `iconColor`.
	 */
	iconRenderer: PropTypes.func,
	/**
	 * Set the background color of the pill.
	 */
	background: PropTypes.string,
	/**
	 * Dims the whole component slightly. Use sparingly and ONLY to
	 * indicate e.g. partial matches in a group of items.
	 */
	dimmed: PropTypes.bool,
	/**
	 * When an ID is passed, it will be applied to the main pill element with the suffix
	 * "_wrapper", and to the delete button with the suffix "_side_button"
	 */
	id: PropTypes.string,
	/**
	 * Make the pill's main body clickable.
	 */
	onClick: PropTypes.func,
	/**
	 * Callback that's run when the delete button is activated.
	 * Hides the delete button, if not provided. Remember to provide a "deleteLabel" prop.
	 */
	onDelete: PropTypes.func,
	/**
	 * Accessible label for the delete button.
	 */
	deleteLabel: PropTypes.string,
};

export default Pill;
