import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {getSpacing} from '../utils/spacing';
import {pxToRem, pxToEm} from '../utils/units';

import iconMap from './iconMap';

const iconSize = 18;

const sizeMap = {
	unscaled: pxToRem(iconSize),
	default: pxToEm(iconSize),
	medium: pxToEm(iconSize * 1.5),
	big: pxToEm(iconSize * 3),
	huge: pxToEm(iconSize * 6),
};

const Wrapper = styled.span`
	display: inline-block;
	vertical-align: middle;

	flex: 0 0 auto;
	/* Using ems makes the icon scale along with the surrounding font size */
	width: 1em;
	height: 1em;

	${p => p.spacingLeft && css`
		margin-left: ${getSpacing(p.spacingLeft)};
	`}
	${p => p.spacingRight && css`
		margin-right: ${getSpacing(p.spacingRight)};
	`}

	font-size: ${p => sizeMap[p.size || 'default']};

	${p => p.vAlign && css`
		/* Use to align icons with surrounding body text */
		position: relative;
		top: -0.12em;
	`}

	& > svg {
		vertical-align: top;
		fill: currentColor;
	}
`;

const Icon = ({name, size, vAlign, spacingLeft, spacingRight, ...otherProps}) => {
	const Glyph = iconMap[name] || iconMap.x;

	return (
		<Wrapper
			size={size}
			vAlign={vAlign}
			spacingLeft={spacingLeft}
			spacingRight={spacingRight}
			role="presentation"
			{...otherProps}
		>
			<Glyph />
		</Wrapper>
	);
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.string,
	vAlign: PropTypes.bool,
	spacingLeft: PropTypes.string,
	spacingRight: PropTypes.string,
};

export default Icon;
