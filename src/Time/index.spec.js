import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Time from '.';
import '@testing-library/jest-dom/extend-expect';

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
		{
			dateValue: "2019-02-04T12:06:13Z",
			systemTime: "2019-02-06T12:06:13Z",
			text: 'Mon, 12 PM',
		},
	].forEach(({offset, text, dateValue = Date.now(), systemTime}) => {
		it(`renders time as relative text ${offset ? `,offset:${offset}` : ''}  ${dateValue ? `,dateValue:${dateValue}` : ''}, expect ${text}`, () => {
			const date = new Date(dateValue);

			if (offset) {
				date.setTime(date.getTime() - offset * 1000);
			}

			const isoDate = date.toISOString();

			const {container} = render(<Time dateTime={isoDate} systemTime={systemTime}/>);

			const time = container.querySelector('time');

			expect(time).toBeInTheDocument();
			expect(time).toHaveAttribute('title', date.toLocaleString());
			expect(time).toHaveAttribute('dateTime', isoDate);
			expect(time).toHaveTextContent(text);
		});
	});
});
