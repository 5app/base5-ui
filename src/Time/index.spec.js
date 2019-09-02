import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Time from '.';
import 'jest-dom/extend-expect';

describe('Time', () => {
	afterEach(cleanup);

	[
		{
			offset: 1,
			text: 'seconds ago',
		},
		{
			offset: 33,
			text: '< 1 minute ago',
		},
		{
			offset: 90,
			text: '1 minute ago',
		},
	].forEach(({offset, text}) => {
		it(`renders time as relative text, offset ${offset}, expect ${text}`, () => {
			const date = new Date();
			date.setTime(date.getTime() - offset * 1000);

			const isoDate = date.toISOString();

			const {container} = render(<Time dateTime={isoDate} />);

			const time = container.querySelector('time');

			expect(time).toBeInTheDocument();
			expect(time).toHaveAttribute('title', date.toLocaleString());
			expect(time).toHaveAttribute('dateTime', isoDate);
			expect(time).toHaveTextContent(text);
		});
	});
});
