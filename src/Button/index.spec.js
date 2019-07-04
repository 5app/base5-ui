import React from 'react';
import {render, cleanup} from '@testing-library/react';
// import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import Button from '.';

describe('Button', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Button />).toThrow(ThemeSectionError);
		});
	});
});
