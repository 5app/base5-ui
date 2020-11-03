import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import ThemeSectionError from './error';

import getReadableColorblock from './getReadableColorblock';

function ThemeSection(props) {
	const {baseTheme, children, colorBlock, hasBgImage, name} = props;

	const constructLocalTheme = useCallback(
		(parentTheme = baseTheme) => {
			const localThemeSection = parentTheme.sections[name];
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
				currentThemeSectionName: name,
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
	baseTheme: PropTypes.shape({
		globals: PropTypes.object.isRequired,
		sections: PropTypes.object.isRequired,
	}),
	colorBlock: PropTypes.string,
	hasBgImage: PropTypes.bool,
	name: PropTypes.string.isRequired,
};

export {ThemeSectionError};

// @component
export default ThemeSection;
