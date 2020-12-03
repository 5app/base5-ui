import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {
	getPropFilter,
	getPropNamesFromPropDefinition,
	getDimmedTextColor,
} from '../utils';

import {
	positionProps,
	positionPropsDef,
	marginProps,
	marginPropsDef,
} from '../styleProps';

import ButtonCore from '../ButtonCore';

const stylePropNames = getPropNamesFromPropDefinition([
	...positionPropsDef,
	...marginPropsDef,
]);

const textLinkProps = ['bold', 'stealthy'];

const shouldForwardProp = getPropFilter([...textLinkProps, ...stylePropNames]);

function getLinkColor({stealthy, disabled, isDisabled, theme}) {
	if (disabled || isDisabled) {
		return getDimmedTextColor(theme);
	} else if (stealthy) {
		return 'inherit';
	} else {
		return theme.links;
	}
}

const textLinkStyles = css`
	${p =>
		p.bold &&
		`
		font-weight: bold;
	`}

	text-align: inherit;
	text-decoration: none;
	transition: color 0.25s ease-in;
	color: ${getLinkColor};

	&:not(.is-disabled):hover,
	&:not(.is-disabled):focus,
	&:not(.is-disabled):active {
		${p =>
			p.stealthy &&
			`
			color: ${p.theme.links};
		`}
		text-decoration: underline;
		transition-timing-function: ease-out;
	}
`;

const Wrapper = styled(ButtonCore).withConfig({
	shouldForwardProp,
})`
	${positionProps}
	display: inline;
	vertical-align: baseline;
	${marginProps}

	${textLinkStyles}
`;

const TextLink = forwardRef((props, ref) => {
	const {as, ...otherProps} = props;

	return <Wrapper {...otherProps} ref={ref} forwardedAs={as} />;
});

TextLink.displayName = 'TextLink';

TextLink.defaultProps = {
	as: 'a',
};

TextLink.propTypes = {
	as: PropTypes.elementType,
	bold: PropTypes.bool,
	stealthy: PropTypes.bool,
};

// Allow components to re-use simple text link styles
export {textLinkStyles, textLinkProps};

// @component
export default TextLink;
