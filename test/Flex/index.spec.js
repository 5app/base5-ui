import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../helper/wrapper';
import {ThemeSectionError} from '../../src/ThemeSection';
import Flex from '../../src/Flex';

describe('Flex', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Flex />).toThrow(ThemeSectionError);
		});
	});
});
