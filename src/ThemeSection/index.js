import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';

import getReadableColorblock from './getReadableColorblock';

function ThemeSection(props) {
	function constructLocalTheme(parentTheme = props.baseTheme) {
		const colorBlockOverrides = getReadableColorblock(
			parentTheme.globals.colorBlocks,
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
	baseTheme: PropTypes.shape({
		globals: PropTypes.object.isRequired,
		sections: PropTypes.object.isRequired,
	}),
	colorBlock: PropTypes.string,
	hasBgImage: PropTypes.bool,
	name: PropTypes.string.isRequired,
};

export default ThemeSection;
