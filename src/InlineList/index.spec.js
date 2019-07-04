import React from 'react';
import {render, cleanup} from '@testing-library/react';
// import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import InlineList from '.';

describe('InlineList', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<InlineList />).toThrow(ThemeSectionError);
		});
	});
});
