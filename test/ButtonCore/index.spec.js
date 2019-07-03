import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../helper/wrapper';
import {ThemeSectionError} from '../../src/ThemeSection';
import ButtonCore from '../../src/ButtonCore';

describe('ButtonCore', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<ButtonCore />).toThrow(ThemeSectionError);
		});
	});
});
