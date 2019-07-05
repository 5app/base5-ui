import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';
import PopOver from '.';
import 'jest-dom/extend-expect';

describe('PopOver', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<PopOver />).toThrow(ThemeSectionError);
		});
	});

	it.skip('renders its child inplace and appends its content prop to the document', () => {
		const {container} = render(
			<Wrapper>
				<PopOver
					id="popover"
					isOpen
					content="I'm a popover. I'll try to always open in a direction that keeps me visible."
					placement="top-start"
				>
					{popover => (
						<span id="element" ref={popover.ref}>
							I&apos;m a reference element
						</span>
					)}
				</PopOver>
			</Wrapper>
		);

		const element = container.querySelect('#element');
		const popover = container.querySelect('#popover');

		expect(popover).toBe(null);
		expect(element).toBeInTheDocument();
	});
});
