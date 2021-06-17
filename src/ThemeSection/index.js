import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import ThemeSectionError from './error';

import getReadableColorblock from './getReadableColorblock';

function ThemeSection(props) {
	const {baseTheme, children, colorBlock, hasBgImage, name} = props;

	const constructLocalTheme = useCallback(
		(parentTheme = baseTheme) => {
			const usedName = colorBlock ? 'colorBlock' : name;
			const localThemeSection = parentTheme.sections[usedName];
			const parentThemeSectionName = parentTheme.currentThemeSectionName;
			const colorBlockOverrides = getReadableColorblock(
				colorBlock,
				parentTheme,
				hasBgImage
			);

			return {
				...parentTheme,
				...localThemeSection,
				...colorBlockOverrides,
				currentThemeSectionName: usedName,
				parent: parentTheme.sections[parentThemeSectionName],
				parentThemeSectionName,
			};
		},
		[baseTheme, colorBlock, hasBgImage, name]
	);

	return (
		<ThemeProvider theme={constructLocalTheme}>{children}</ThemeProvider>
	);
}

ThemeSection.propTypes = {
	/**
	 * Theme object to use as the base for all nested
	 * ThemeSections. Usually this prop only needs to be
	 * used once per app, to define its global theme.
	 */
	baseTheme: PropTypes.shape({
		globals: PropTypes.object.isRequired,
		sections: PropTypes.object.isRequired,
	}),
	/**
	 * The key (name) of the theme section, as defined in `baseTheme.sections`
	 */
	name: PropTypes.string.isRequired,
	/**
	 * The key (name) of a colorBlock that you want to use
	 * to define foreground and background colours for the section.
	 * Your colorBlock definitions must be located at `baseTheme.globals.colorBlock`
	 */
	colorBlock: PropTypes.string,
	/**
	 * Enable this prop when defining a color block with a background
	 * image. This will force its text colour to white, instead of a
	 * calculated colour that contrasts with the color block (as that
	 * colour will be covered by the image).
	 * Make sure to give your images a dark wash or gradient to ensure
	 * readability
	 */
	hasBgImage: PropTypes.bool,
};

export {ThemeSectionError};

export default ThemeSection;
