import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import Icon from '.';
import iconMap from './iconMap';
import X from '../icons/X';

describe('Icon', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Icon />).toThrow(ThemeSectionError);
		});
	});

	it('loads the X icon for unknown icon names', () => {
		const {container} = render(
			<Wrapper>
				<div>
					<X id="x" />
					<Icon id="unknown" name="unknown" />
				</div>
			</Wrapper>
		);

		const x_path = container.querySelector('#x path').getAttribute('d');
		const unknown_path = container
			.querySelector('#unknown path')
			.getAttribute('d');

		expect(unknown_path).toBe(x_path);
	});

	it('can load any icon from the iconMap', () => {
		const {container} = render(
			<Wrapper>
				<X />
			</Wrapper>
		);

		const x_path = container.querySelector('svg path').getAttribute('d');

		Object.keys(iconMap).forEach(name => {
			const {container} = render(
				<Wrapper>
					<Icon id="icon" name={name} />
				</Wrapper>
			);

			const icon_path = container
				.querySelector('svg path')
				.getAttribute('d');

			if (name === 'x') {
				expect(icon_path).toBe(x_path);
			} else {
				expect(icon_path).not.toBe(x_path);
			}
		});
	});
});
