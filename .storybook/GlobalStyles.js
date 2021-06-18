import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

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

	input {
		margin: 0;
		padding: 0;
	}

	ul, ol {
		list-style: none;
	}

	body {
		font-family: 'Open Sans', sans-serif;
	}
`;

export default GlobalStyles;
