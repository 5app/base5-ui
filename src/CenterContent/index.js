import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {pxToRem} from '../utils/units';

import {paddingProps} from '../styleProps';

const Wrapper = styled.div`
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
		`}
	
	box-sizing: border-box;
`;

const Content = styled.div`
	width: ${p => (p.width ? pxToRem(p.width) : 'auto')};
	max-width: 100%;

	/* Needed for IE11 to contain large items: https://stackoverflow.com/a/42494339 */
	flex-shrink: 0;

	/* This does the centering magic: */
	margin: auto;
`;

function CenterContent(props) {
	const {
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
			{...otherProps}
		>
			<Content width={contentWidth}>{children}</Content>
		</Wrapper>
	);
}

CenterContent.defaultProps = {
	spacing: 'm',
};

CenterContent.propTypes = {
	/**
	 * Define the maximum width for the centred content.
	 */
	contentWidth: PropTypes.number,
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
	spacing: PropTypes.string,
};

// @component
export default CenterContent;
