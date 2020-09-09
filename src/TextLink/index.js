import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {getPropFilter, getPropNamesFromPropDefinition} from '../utils';

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

const textLinkStyles = css`
	${p =>
		p.bold &&
		`
		font-weight: bold;
	`}

	text-align: inherit;
	text-decoration: none;
	transition: color 0.25s ease-in;
	color: ${p => (p.stealthy ? 'inherit' : p.theme.links)};

	&:hover,
	&:active,
	&:focus {
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
