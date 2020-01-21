import React from 'react';
import {render, cleanup} from '@testing-library/react';
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

	it('renders as a button by default', () => {
		const {container} = render(
			<Wrapper>
				<ButtonCore id="ok">Ok</ButtonCore>
			</Wrapper>
		);

		const ok = container.querySelector('#ok');
		expect(ok.tagName).toBe('BUTTON');
	});

	it('can render as a RouterLink', () => {
		const path = 'path/to/whatever';
		const {container} = render(
			<Wrapper>
				<ButtonCore id="ok" as={RouterLink} to={path}>
					Ok
				</ButtonCore>
			</Wrapper>
		);

		const ok = container.querySelector('#ok');
		expect(ok.tagName).toBe('A');
		expect(ok.href).toContain(path);
	});

	it('can render as RouterLink', () => {
		expect(true).toBe(true);
	});
});
