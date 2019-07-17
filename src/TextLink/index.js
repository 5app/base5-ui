import React, {forwardRef} from 'react';
import styled, {css} from 'styled-components';

import {positionProps, marginProps} from '../styleProps';

import ButtonCore from '../ButtonCore';

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

const Wrapper = styled(({linkRef, bold, stealthy, ...otherProps}) => (
	<ButtonCore ref={linkRef} {...otherProps} />
))`
	${positionProps}
	display: inline;
	vertical-align: baseline;
	${marginProps}

	${textLinkStyles}
`;

function TextLink(props, ref) {
	const {as, ...otherProps} = props;

	return <Wrapper {...otherProps} linkRef={ref} forwardedAs={as || 'a'} />;
}

// Allow components to re-use simple text link styles
export {textLinkStyles};
export default forwardRef(TextLink);
