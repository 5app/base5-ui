import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import TextLink from '.';
import 'jest-dom/extend-expect';

describe('TextLink', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<TextLink />).toThrow(ThemeSectionError);
		});
	});

	it('renders as a link by default', () => {
		const path = '/path/to/whatever';
		const {getByText} = render(
			<Wrapper>
				<TextLink href={path}>Click!</TextLink>
			</Wrapper>
		);

		const link = getByText('Click!');
		expect(link).toBeInTheDocument();
		expect(link.tagName).toBe('A');
		expect(link.href).toContain(path);
	});

	it('can render as a button', () => {
		const {getByText} = render(
			<Wrapper>
				<TextLink as="button">Click!</TextLink>
			</Wrapper>
		);

		const link = getByText('Click!');
		expect(link).toBeInTheDocument();
		expect(link.tagName).toBe('BUTTON');
	});
});
