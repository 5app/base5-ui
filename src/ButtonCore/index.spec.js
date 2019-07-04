import React from 'react';
import {render, cleanup} from '@testing-library/react';
// import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import ButtonCore from '.';

describe('ButtonCore', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<ButtonCore />).toThrow(ThemeSectionError);
		});
	});
});
