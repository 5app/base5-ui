import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';

import getReadableColorblock from './getReadableColorblock';

function ThemeSection(props) {

	const constructLocalTheme = (parentTheme = props.baseTheme) => {

		const colorBlockOverrides = getReadableColorblock(
			parentTheme,
			props.colorBlock,
			props.hasBgImage
		);
		
		return {
			...parentTheme,
			...parentTheme.sections[props.name],
			...colorBlockOverrides,
		};
	}

	return (
		<ThemeProvider theme={constructLocalTheme}>
			{props.children}
		</ThemeProvider>
	);
}

ThemeSection.propTypes = {
	baseTheme: PropTypes.object,
	colorBlock: PropTypes.string,
	hasBgImage: PropTypes.bool,
	name: PropTypes.string.isRequired,
};

export default ThemeSection;
