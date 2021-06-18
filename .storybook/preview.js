import React from 'react';
import {Canvas} from '@storybook/addon-docs/blocks';

import 'focus-visible';

import ThemeSection from '../src/ThemeSection';
import theme from '../src/theme';

import GlobalStyles from './GlobalStyles';

export const decorators = [
	Story => (
		<ThemeSection name="page" baseTheme={theme}>
			<GlobalStyles />
			{Story()}
		</ThemeSection>
	),
];

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
				<ThemeSection name="page" baseTheme={theme}>
					<Canvas {...props}>{children}</Canvas>
				</ThemeSection>
			),
		},
	},
};
