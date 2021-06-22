import React from 'react';
import {Canvas} from '@storybook/addon-docs/blocks';

import 'focus-visible';

import ThemeSection from '../src/ThemeSection';
import theme from '../src/theme';

import GlobalStyles from './GlobalStyles';

const ThemeProvider = ({children}) => (
	<ThemeSection name="page" baseTheme={theme}>
		<GlobalStyles />
		{children}
	</ThemeSection>
);

export const decorators = [Story => <ThemeProvider>{Story()}</ThemeProvider>];

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: ['base5-ui', 'Components'],
		},
	},
	backgrounds: {
		disable: true,
		grid: {
			disable: true,
		},
	},
	docs: {
		components: {
			Canvas: ({children, ...props}) => (
				<ThemeProvider>
					<Canvas {...props}>{children}</Canvas>
				</ThemeProvider>
			),
		},
	},
};
