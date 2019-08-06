import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {pxToRem} from '../utils/units';

import {paddingProps} from '../styleProps';

const Wrapper = styled.div`
	display: flex;
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
	max-width: ${p => (p.width ? pxToRem(p.width) : '100%')};

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
	contentWidth: PropTypes.number,
	fillParent: PropTypes.bool,
	height: PropTypes.number,
	spacing: PropTypes.string,
};

export default CenterContent;