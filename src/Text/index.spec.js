import React from 'react';
import {render, cleanup} from '@testing-library/react';
// import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import Text from '.';

describe('Text', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Text />).toThrow(ThemeSectionError);
		});
	});
});
