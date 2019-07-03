import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../helper/wrapper';
import {ThemeSectionError} from '../../src/ThemeSection';
import TextLink from '../../src/TextLink';

describe('TextLink', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<TextLink />).toThrow(ThemeSectionError);
		});
	});
});
