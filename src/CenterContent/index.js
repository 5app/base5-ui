import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {
	pxToRem,
	getLength,
	getPropNamesFromPropDefinition,
	getPropFilter,
	createStyleFunction,
} from '../utils';

import {paddingProps, paddingPropsDef} from '../styleProps';

import {ie11Hack} from '../mixins';

const responsiveWidthProp = createStyleFunction([
	{
		styleProp: 'width',
		getValue: getLength,
	},
]);

const wrapperPropsToFilter = [
	'fillParent',
	'width',
	'height',
	'spacing',
	'disableIE11Hack',
];

const paddingPropsToFilter = getPropNamesFromPropDefinition(paddingPropsDef);

const shouldForwardProp = getPropFilter([
	...wrapperPropsToFilter,
	...paddingPropsToFilter,
]);

const Wrapper = styled('div').withConfig({
	shouldForwardProp,
})`
	display: flex;
	flex: 1 1 auto;

	${p =>
		p.height &&
		css`
			min-height: ${pxToRem(p.height)};
		`}

	${({spacing, p, ...otherProps}) =>
		paddingProps({
			p: spacing || p,
			...otherProps,
		})}

	${p =>
		p.fillParent &&
		css`
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			min-height: 100%;

			${p =>
				!p.disableIE11Hack &&
				`
				@media ${ie11Hack} {
					height: 100%;
				}
			`}
		`}
	
	box-sizing: border-box;

	${p =>
		!p.disableIE11Hack &&
		`
		/*
		* On IE11 we're using this method of centering
		* which doesn't play as nice with overflowing content,
		* but at least centres the content vertically
		*/
		@media ${ie11Hack} {
			align-items: center;
		}
	`}
`;

const Content = styled('div').withConfig({
	shouldForwardProp,
})`
	${responsiveWidthProp}
	max-width: 100%;

	/* Needed for IE11 to contain large items: https://stackoverflow.com/a/42494339 */
	flex-shrink: 0;

	/* This does the centering magic (except on IE11): */
	margin: auto;
`;

function CenterContent(props) {
	const {
		breakpoints,
		contentWidth,
		fillParent,
		height,
		spacing,
		children,
		...otherProps
	} = props;

	return (
		<Wrapper
			fillParent={fillParent}
			height={height}
			spacing={spacing}
			breakpoints={breakpoints}
			{...otherProps}
		>
			<Content width={contentWidth} breakpoints={breakpoints}>
				{children}
			</Content>
		</Wrapper>
	);
}

CenterContent.defaultProps = {
	spacing: 'm',
	disableIE11Hack: false,
};

CenterContent.propTypes = {
	/**
	 * Define the maximum width for the centred content.
	 * Supports responsive values when used with the breakpoints prop.
	 */
	contentWidth: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	/**
	 * Disable the vertical centering method used for IE11, as it can lead
	 * to cut-off/inaccessible content when the height of the centred content
	 * increases beyond the height of the parent container.
	 * Use this whenever the content is known to be long enough to cause scrolling,
	 * or when the content is dynamic and may grow.
	 */
	disableIE11Hack: PropTypes.bool,
	/**
	 * Make the component grow to match the width and height of its direct parent.
	 * When using this, make sure the container has a position other than static
	 * (e.g. relative, absolute, or fixed), and is not set to overflow: hidden as
	 * that could lead to longer content being cut off.
	 */
	fillParent: PropTypes.bool,
	/**
	 * Define a minimum height for the component to take up.
	 */
	height: PropTypes.number,
	/**
	 * Define the inner spacing between the centred content and its container.
	 * Alternatively you can also use the common style props `p`, `pl`, `pb`, etc.
	 */
	spacing: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
	]),
};

export default CenterContent;
