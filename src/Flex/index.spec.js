import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '..//ThemeSection';
import Flex from '.';
import 'jest-dom/extend-expect';

describe('Flex', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Flex />).toThrow(ThemeSectionError);
		});
	});

	it('can render wrapped content', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<Flex id="flex">Hello, World!</Flex>
					<Flex id="wrap" wrap="true">
						Hello, World!
					</Flex>
				</div>
			</Wrapper>
		);

		const flex = container.querySelector('#flex');
		const wrap = container.querySelector('#wrap');

		expect(wrap).toHaveStyle('flex-wrap: wrap');
		expect(flex).not.toHaveStyle('flex-wrap: wrap');
	});

	it('can render content as a column', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<Flex id="flex">Hello, World!</Flex>
					<Flex id="column" column>
						Hello, World!
					</Flex>
				</div>
			</Wrapper>
		);

		const flex = container.querySelector('#flex');
		const column = container.querySelector('#column');

		expect(column).toHaveStyle('flex-direction: column');
		expect(flex).not.toHaveStyle('flex-direction: column');
	});
});
