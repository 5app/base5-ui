import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import Switch from '.';
import 'jest-dom/extend-expect';

describe('Switch', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Switch />).toThrow(ThemeSectionError);
		});
	});

	it('renders with initialized states', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<Switch id="checked" checked readOnly />
					<Switch id="disabled" disabled readOnly />
					<Switch id="unchecked" checked={false} readOnly />
				</div>
			</Wrapper>
		); // readOnly to avoid warning message

		const checked = container.querySelector('#checked');
		const disabled = container.querySelector('#disabled');
		const unchecked = container.querySelector('#unchecked');

		expect(checked.checked).toBe(true);
		expect(disabled.checked).toBe(false);
		expect(disabled.disabled).toBe(true);
		expect(unchecked.checked).toBe(false);
	});
});
