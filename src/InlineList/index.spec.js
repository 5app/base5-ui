import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import InlineList from '.';
import theme from '../theme';
import 'jest-dom/extend-expect';

describe('InlineList', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<InlineList />).toThrow(ThemeSectionError);
		});
	});

	it('can layout children with optional spacing', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<InlineList id="regular">
						<span>1</span>
						<span>2</span>
						<span>3</span>
					</InlineList>
					<InlineList id="spaced" spacing="m">
						<span>1</span>
						<span>2</span>
						<span>3</span>
					</InlineList>
				</div>
			</Wrapper>
		);

		const regular = container.querySelector('#regular');
		const spaced = container.querySelector('#spaced');

		const style = `margin-left: -${theme.globals.spacing.m};`;

		expect(spaced).toHaveStyle(style);
		expect(regular).not.toHaveStyle(style);
	});

	it.skip('can split children with a comma', () => {
		const {container} = render(
			<Wrapper>
				<InlineList id="comma" splitBy="comma">
					<span>1</span>
					<span>2</span>
					<span>3</span>
				</InlineList>
			</Wrapper>
		);

		const li = container.querySelector('#comma').firstChild;
		const pseudoStyle = window.getComputedStyle(li, ':after');

		expect(li.tagName).toBe('LI');
		expect(pseudoStyle.content).toBe(','); // FIXME
	});

	it.skip('can split children with a dot', () => {
		const {container} = render(
			<Wrapper>
				<InlineList id="dot" splitBy="dot">
					<span>1</span>
					<span>2</span>
					<span>3</span>
				</InlineList>
			</Wrapper>
		);

		const li = container.querySelector('#dot').firstChild;
		const pseudoStyle = window.getComputedStyle(li, ':after');

		expect(li.tagName).toBe('LI');
		expect(pseudoStyle.content).toBe('·'); // FIXME
	});
});
