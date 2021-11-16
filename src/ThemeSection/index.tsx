import React, {useCallback} from 'react';
import {ThemeProvider} from 'styled-components';

import ThemeSectionError from './error';
import getThemeSection from './getThemeSection';

import {ThemeConfig, LocalThemeSection} from '../theme/types';

type ThemeSectionName = string;

interface ThemeSectionProps {
	/**
	 * The key (name) of the theme section, as defined in `baseTheme.sections`,
	 * or a color block from e.g. `baseTheme.globals.colorBlocks`
	 */
	name: ThemeSectionName;
	/**
	 * Theme object to use as the base for all nested
	 * ThemeSections. Usually this prop only needs to be
	 * used once per app, to define its global theme.
	 */
	baseTheme?: ThemeConfig;
	/**
	 * Enable this to make theme section properties safe for use with a
	 * background image. It will set text and link colours to white, and shade
	 * to black, with a high shadeStrength value.
	 */
	withBackgroundImage?: boolean;
	children: React.ReactNode;
}

function ThemeSection(props: ThemeSectionProps): React.ReactElement {
	const {name, baseTheme, withBackgroundImage, children} = props;

	const constructLocalTheme = useCallback(
		(parentTheme = baseTheme): LocalThemeSection => {
			const localThemeSection = getThemeSection({
				theme: parentTheme,
				name,
				withBackgroundImage,
			});
			const parentThemeSectionName = parentTheme.currentThemeSectionName;

			return {
				...parentTheme,
				...localThemeSection,
				currentThemeSectionName: name,
				parent: parentTheme.sections[parentThemeSectionName],
				parentThemeSectionName,
			};
		},
		[baseTheme, name, withBackgroundImage]
	);

	return (
		<ThemeProvider theme={constructLocalTheme}>{children}</ThemeProvider>
	);
}

export {ThemeSectionError};

export default ThemeSection;
