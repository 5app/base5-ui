import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import ButtonCore from '.';
import RouterLink from './routerLinkForReadme';
import '@testing-library/jest-dom/extend-expect';

describe('ButtonCore', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<ButtonCore />).toThrow(ThemeSectionError);
		});
	});

	it('renders as a button by default, but can render as a link', () => {
		const path = 'path/to/whatever';

		render(
			<Wrapper>
				<ButtonCore>Button label</ButtonCore>
				<ButtonCore as="a" href={path} target="_blank">
					Regular Link label
				</ButtonCore>
				<ButtonCore as={RouterLink} to={path}>
					Router Link label
				</ButtonCore>
			</Wrapper>
		);

		screen.getByRole('button', {name: /Button label/});

		const regularLink = screen.getByRole('link', {
			name: /Regular Link label/,
		});
		expect(regularLink).toHaveAttribute('href', path);
		expect(regularLink).toHaveAttribute('target', '_blank');

		const routerLink = screen.getByRole('link', {
			name: /Router Link label/,
		});
		expect(routerLink).toHaveAttribute('href', path);
	});

	it('can be disabled both as a button and a link', () => {
		render(
			<Wrapper>
				<ButtonCore isDisabled>Disabled button</ButtonCore>
				<ButtonCore
					isDisabled
					download
					as="a"
					href="http://example.com/download"
					target="_blank"
				>
					Disabled link
				</ButtonCore>
			</Wrapper>
		);

		const button = screen.getByRole('button', {name: /Disabled button/});

		expect(button).toHaveAttribute('aria-disabled');
		expect(button).not.toHaveAttribute('disabled');
		expect(button).toHaveAttribute(
			'class',
			expect.stringContaining('is-disabled')
		);

		const regularLink = screen.getByText(/Disabled link/);
		expect(regularLink).toHaveAttribute(
			'class',
			expect.stringContaining('is-disabled')
		);
		expect(regularLink).not.toHaveAttribute('href');
		expect(regularLink).not.toHaveAttribute('target');
		expect(regularLink).not.toHaveAttribute('download');
	});
});
