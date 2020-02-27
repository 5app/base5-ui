import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

// These paths are relative to where this file goes after
// docz moves it to .docz/src/gatsby-theme-docz/wrapper.js
// Weird!

import ThemeSection from '../../../src/ThemeSection';
import theme from '../../../src/theme';

import 'focus-visible';

const GlobalStyle = createGlobalStyle`
	*:focus:not(:focus-visible) {
		outline: none;
	}

	*:focus:not(.focus-visible) {
		outline: none;
	}

	html, body, div, span, h1, h2, h3, h4, h5, p, blockquote, pre, a, dl, dt, dd, ol, ul, li, fieldset, form, label, article, aside, header, footer, menu, nav, section, audio, video, figure, figcaption {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
	}

	body {
		font-family: 'Open Sans', sans-serif;
	}

	div[data-testid="playground"] {
		margin-bottom: 22px !important;
	}

	div[data-testid="live-preview"] {
		padding: 22px;
	}
`;

const Content = styled.div`
	font-family: 'Open Sans', sans-serif;
	font-size: ${p => p.theme.globals.typeScale.m};
	line-height: ${p => p.theme.globals.lineHeight};
`;

const Wrapper = ({children}) => (
	<ThemeSection name="page" baseTheme={theme}>
		<GlobalStyle />
		<Content>{children}</Content>
	</ThemeSection>
);

export default Wrapper;
