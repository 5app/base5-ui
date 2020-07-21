import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Time from '.';
import '@testing-library/jest-dom/extend-expect';

describe('Time', () => {
	afterEach(cleanup);

	it('passes through props like `id`', () => {
		const id = 'passthrough-prop';
		const dateTime = '2019-02-27T12:06:14Z';

		const {container} = render(<Time dateTime={dateTime} id={id} />);

		const time = container.querySelector('time');

		expect(time).toBeInTheDocument();
		expect(time).toHaveAttribute('title');
		expect(time).toHaveAttribute('dateTime', dateTime);
		expect(time).toHaveAttribute('id', id);
	});

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
			dateStr: '2019-02-27T12:06:14Z',
			systemTime: '2019-02-29T12:06:14Z',
			text: 'Wed, 12 PM',
		},
	].forEach(({offset, text, dateStr, systemTime}) => {
		let dateTime = dateStr;

		if (!dateTime) {
			const date = new Date();
			date.setTime(date.getTime() - offset * 1000);
			dateTime = date.toISOString();
		}

		it(`renders time as relative text ${
			offset ? `, offset:${offset}` : ''
		}${dateTime ? `, dateTime:${dateTime}` : ''}, expect ${text}`, () => {
			const {container} = render(
				<Time dateTime={dateTime} systemTime={systemTime} />
			);

			const time = container.querySelector('time');

			expect(time).toBeInTheDocument();
			expect(time).toHaveAttribute(
				'title',
				new Date(dateTime).toLocaleString()
			);
			expect(time).toHaveAttribute('dateTime', dateTime);
			expect(time).toHaveTextContent(text);
		});

		if (offset) {
			it(`lets us use custom readout functions`, () => {
				const count = offset > 30 ? parseInt(offset / 60) : offset;

				const elephants = count => `${count} elephants`;

				const readoutFunctions = {
					secondsAgoReadout: elephants,
					minutesAgoReadout: elephants,
				};

				const {container} = render(
					<Time
						dateTime={dateTime}
						systemTime={systemTime}
						readoutFunctions={readoutFunctions}
					/>
				);

				const time = container.querySelector('time');

				expect(time).toBeInTheDocument();
				expect(time).toHaveAttribute(
					'title',
					new Date(dateTime).toLocaleString()
				);
				expect(time).toHaveAttribute('dateTime', dateTime);
				expect(time).toHaveTextContent(elephants(count));
			});
		}
	});
});
