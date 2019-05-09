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
`;

const Wrapper = ({children}) => (
	<>
		<GlobalStyle />
		<ThemeSection
			name="page"
			baseTheme={theme}
		>
			{children}
		</ThemeSection>
	</>
);

export default Wrapper;
