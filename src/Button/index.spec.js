import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import Button from '.';
import {pxToRem} from '../utils/units';
import {alpha} from '../utils/colors';
import theme from '../theme';
import 'jest-dom/extend-expect';

describe('Button', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Button />).toThrow(ThemeSectionError);
		});
	});

	it('renders text buttons by default', () => {
		const {container} = render(
			<Wrapper>
				<Button id="ok">Ok</Button>
			</Wrapper>
		);

		const ok = container.querySelector('#ok');
		expect(ok).toBeInTheDocument();
		expect(ok.tagName).toBe('BUTTON');
	});

	it('can render buttons with text and icons', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<Button icon="ok" id="ok">
						Ok
					</Button>
					<Button id="nope">Nope</Button>
				</div>
			</Wrapper>
		);

		const ok = container.querySelector('#ok');
		const svg = ok.querySelector('svg');
		const nope = container.querySelector('#nope');
		const inexistent = nope.querySelector('svg');

		expect(svg).toBeDefined();
		expect(inexistent).toBeNull();
	});

	it('can render buttons with text and icons on the right side', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<Button icon="ok" id="right" iconRight>
						Ok
					</Button>
					<Button icon="ok" id="regular">
						Ok
					</Button>
				</div>
			</Wrapper>
		);

		const right = container.querySelector('#right');
		const regular = container.querySelector('#regular');
		const rightSvg = right.querySelector('svg');
		const svg = regular.querySelector('svg');

		const rightParent = rightSvg.parentElement;
		const parent = svg.parentElement;

		expect(rightParent.children[0]).not.toBe(rightSvg);
		expect(parent.children[0]).toBe(svg);
	});

	it('can render buttons with subtitles', () => {
		const {getByText} = render(
			<Wrapper>
				<Button id="ok" icon="ok" subline="subline">
					Ok
				</Button>
			</Wrapper>
		);
		const text = getByText('Ok');
		const subline = getByText('subline');
		const parent = text.parentElement;
		const {children} = parent;

		const array = [...children];
		const ixText = array.indexOf(text);
		const ixSubline = array.indexOf(subline);

		expect(ixText).toBeGreaterThan(-1);
		expect(ixSubline).toBeGreaterThan(-1);
		expect(ixText).toBeLessThan(ixSubline);
	});

	it('can render icon only buttons', () => {
		const {container} = render(
			<Wrapper>
				<Button id="ok" icon="ok" />
			</Wrapper>
		);

		const ok = container.querySelector('#ok');
		const svg = ok.querySelector('svg');

		expect(svg).toBeDefined();
	});

	it('can render round buttons', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<Button id="round" round icon="plus" />
					<Button id="regular" />
				</div>
			</Wrapper>
		);

		const round = container.querySelector('#round');
		const regular = container.querySelector('#regular');

		expect(round).toHaveStyle('border-radius: 2rem;');
		expect(regular).not.toHaveStyle('border-radius: 2rem;');
	});

	it('can render large, medium and small sized buttons', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<Button id="regular" />
					<Button id="large" size="large" />
					<Button id="medium" size="medium" />
					<Button id="small" size="small" />
				</div>
			</Wrapper>
		);

		const regular = container.querySelector('#regular');
		const large = container.querySelector('#large');
		const medium = container.querySelector('#medium');
		const small = container.querySelector('#small');
		const {globals} = theme;

		expect(regular).toHaveStyle(`
			padding: ${pxToRem(12)}
			font-size: ${globals.typeScale.m}
		`);
		expect(large).toHaveStyle(`
			padding: ${pxToRem(19)}
			font-size: ${globals.typeScale.m}
		`);
		expect(medium).toHaveStyle(`
			padding: ${pxToRem(8)}
			font-size: ${globals.typeScale.s}
		`);
		expect(small).toHaveStyle(`
			padding: ${pxToRem(5)}
			font-size: ${globals.typeScale.xs}
		`);
	});

	it('can render theme colored, shaded and transparent buttons', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<Button id="regular" />
					<Button id="primary" color="primary" />
					<Button id="important" color="important" />
					<Button id="transparent" color="transparent" />
					<Button id="shaded" color="shaded" />
				</div>
			</Wrapper>
		);

		const regular = container.querySelector('#regular');
		const primary = container.querySelector('#primary');
		const important = container.querySelector('#important');
		const transparent = container.querySelector('#transparent');
		const shaded = container.querySelector('#shaded');
		const {globals} = theme;

		expect(regular).toHaveStyle(
			`background-color: ${globals.buttons.default.background}`
		);
		expect(primary).toHaveStyle(
			`background-color: ${globals.buttons.primary.background}`
		);
		expect(important).toHaveStyle(
			`background-color: ${globals.buttons.important.background}`
		);
		expect(transparent).toHaveStyle(`background-color: transparent`);
		expect(shaded).toHaveStyle(
			`background-color: ${alpha(
				theme.sections.page.shade,
				theme.sections.page.shadeStrength
			)}`
		);
	});
});
