import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import Text from '.';
import 'jest-dom/extend-expect';

describe('Text', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Text />).toThrow(ThemeSectionError);
		});
	});

	it('renders styled text', () => {
		const {getByText} = render(
			<Wrapper>
				<Text as="div" bold>
					Hello, World!
				</Text>
			</Wrapper>
		);

		const text = getByText('Hello, World!');
		expect(text).toHaveStyle('font-weight: bold');
		expect(text.tagName).toBe('DIV');
	});
});
