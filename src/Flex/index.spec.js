import React from 'react';
import {render, cleanup} from '@testing-library/react';
// import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '..//ThemeSection';
import Flex from '.';

describe('Flex', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Flex />).toThrow(ThemeSectionError);
		});
	});
});
