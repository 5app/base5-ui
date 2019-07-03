import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../helper/wrapper';
import {ThemeSectionError} from '../../src/ThemeSection';
import Portal from '../../src/Portal';

describe('Portal', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Portal />).toThrow(ThemeSectionError);
		});
	});
});
