import React from 'react';
import styled, {css} from 'styled-components';

import ButtonCore from '../ButtonCore';

const textLinkStyles = css`
	${p => p.bold && `
		font-weight: bold;
	`}

	text-align: inherit;
	text-decoration: none;
	transition: color 0.25s ease-in;
	color: ${p => (p.stealthy ? 'inherit' : p.theme.links)};

	&:hover,
	&:active,
	&:focus {
		${p => p.stealthy && `
			color: ${p.theme.links};
		`}
		text-decoration: underline;
		transition-timing-function: ease-out;
	}
`;

const TextLink = styled(({bold, stealthy, ...otherProps}) =>
	<ButtonCore as="a" {...otherProps} />
)`
	display: inline;
	vertical-align: baseline;

	${textLinkStyles}
`;

// Allow components to re-use simple text link styles
export {textLinkStyles};
export default TextLink;
