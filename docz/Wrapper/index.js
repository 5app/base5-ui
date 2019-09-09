import React from 'react';
import {createGlobalStyle} from 'styled-components';
import ThemeSection from '../../src/ThemeSection';

import theme from '../../src/theme';

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
`;

const Wrapper = ({children}) => (
	<>
		<GlobalStyle />
		<ThemeSection name="page" baseTheme={theme}>
			{children}
		</ThemeSection>
	</>
);

export default Wrapper;
