import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../helper/wrapper';
import {ThemeSectionError} from '../../src/ThemeSection';
import InlineList from '../../src/InlineList';

describe('InlineList', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<InlineList />).toThrow(ThemeSectionError);
		});
	});
});
