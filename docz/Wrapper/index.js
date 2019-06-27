import React from 'react';
import ThemeSection from '../../src/ThemeSection';

import theme from '../../src/theme';

const Wrapper = ({children}) => (
	<ThemeSection name="page" baseTheme={theme}>
		{children}
	</ThemeSection>
);

export default Wrapper;
