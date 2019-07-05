import React from 'react';
import {render, cleanup} from '@testing-library/react';
import {ThemeSectionError} from '..//ThemeSection';
import Box from '.';

describe('Box', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Box />).toThrow(ThemeSectionError);
		});
	});
});
