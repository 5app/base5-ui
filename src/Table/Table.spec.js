import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import {within} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Wrapper from '../../test/helper/wrapper';
import {ThemeSectionError} from '../ThemeSection';

import Table, {Column} from '.';
import dummyData from './demo/dummyData';
import DemoTableState from './demo/DemoTableState';

function SimpleTableExample(props) {
	return (
		<Wrapper>
			<Table data={dummyData.slice(0, 4)} itemKey="name" {...props}>
				<Column title="Name" />
				<Column title="Country" name="region" />
				<Column
					title="Email domain"
					cellRenderer={item => (
						<a href="example.com">{item.email.split('@')[1]}</a>
					)}
				/>
				<Column title="Type" />
				<Column title="Time" />
			</Table>
		</Wrapper>
	);
}

describe('Table', () => {
	afterEach(cleanup);

	it('throws ThemeSectionError if rendered outside a <ThemeSection />', () => {
		expect(() => {
			render(<Table />).toThrow(ThemeSectionError);
		});
	});

	it('renders all defined table columns', () => {
		render(<SimpleTableExample />);

		screen.getByRole('columnheader', {name: /Name/});
		screen.getByRole('columnheader', {name: /Country/});
		screen.getByRole('columnheader', {name: /Email domain/});
		screen.getByRole('columnheader', {name: /Type/});
		screen.getByRole('columnheader', {name: /Time/});

		screen.getByRole('rowheader', {name: /Amber Beasley/});

		screen.getByRole('link', {name: /pretiumnequeMorbi.org/});
	});

	it("allows specifying a row's header cell", () => {
		render(<SimpleTableExample rowHeader="Country" />);

		screen.getByRole('rowheader', {name: /Maldives/});
	});

	it('shows an empty state if no data is passed', () => {
		render(<SimpleTableExample data={[]} />);

		screen.getByText('No data to display');
	});

	it('allows sorting its columns', () => {
		render(
			<Wrapper>
				<DemoTableState data={dummyData.slice(4, 8)}>
					{({data, sort: {column, order}, handleSort}) => (
						<Table
							data={data}
							itemKey="name"
							rowHeader="Name"
							sort={{
								column,
								order,
							}}
							onRequestSort={handleSort}
						>
							<Column title="Role" width={75} />
							<Column sortable title="Name" width="40%" />
							<Column
								sortable
								title="Type"
								subtitle="Random characters"
							/>
							<Column sortable title="Time" defaultOrder="desc" />
						</Table>
					)}
				</DemoTableState>
			</Wrapper>
		);

		const nameColumnHeader = screen.getByRole(
			'columnheader',
			{name: /Name/},
			{exact: false}
		);
		// The Name column should be ordered ascending by default
		expect(nameColumnHeader).toHaveAttribute('aria-sort', 'ascending');
		within(nameColumnHeader).getByText(/ascending/);

		// Toggle Name sort order
		screen
			.getByRole('button', {name: /Sort by Name in descending order/})
			.click();
		expect(nameColumnHeader).toHaveAttribute('aria-sort', 'descending');
		within(nameColumnHeader).getByText(/descending/);

		// The Type column should be orderable, too
		screen.getByRole('button', {name: /Sort by Type in ascending order/});

		// Sort by Time (note that the Time column has a different defaultOrder)
		userEvent.click(
			screen.getByRole('button', {
				name: /Sort by Time in descending order/,
			})
		);
		const timeColumnHeader = screen.getByRole(
			'columnheader',
			{name: /Time/},
			{exact: false}
		);
		expect(timeColumnHeader).toHaveAttribute('aria-sort', 'descending');
	});
});
