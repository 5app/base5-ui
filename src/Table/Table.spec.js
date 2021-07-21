import React from 'react';
import 'regenerator-runtime/runtime';
import {render, cleanup, screen, waitFor} from '@testing-library/react';
import {within} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Wrapper from '../../test/helper/wrapper';

import {ThemeSectionError} from '../ThemeSection';
import Pill from '../Pill';

import Table, {SelectionTable, InteractiveTableContent, Column} from '.';
import dummyData from './demo/dummyData';
import DemoTableState from './demo/DemoTableState';

function getTableRow(element) {
	return element.closest('tr');
}

// The helpers below are necessary because the
// SelectionTable component doesn't rely on detecting
// modifier keys using the 'click' event.
// (Instead it tracks them using global 'keyup'/'keydown'
// listeners.) This isn't compatible with the way user-events
// triggers click events with modifier keys.

function shiftClick(element) {
	const keyboardState = userEvent.keyboard('{Shift>}');
	userEvent.click(element);
	userEvent.keyboard('{/Shift}', {keyboardState});
}

function ctrlClick(element) {
	const keyboardState = userEvent.keyboard('{Ctrl>}');
	userEvent.click(element);
	userEvent.keyboard('{/Ctrl}', {keyboardState});
}

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

	it('allows selecting table rows', async () => {
		render(
			<Wrapper>
				<DemoTableState initialSelectedItems={['Dai Shepherd']}>
					{({selectedItems, handleSelectionChange}) => (
						<SelectionTable
							shadedHeader
							mobileViewBreakpoint="xxs"
							data={dummyData.slice(8, 24)}
							itemKey="name"
							getItemLabel={item => item.name}
							rowHeader="Name"
							selectedItems={selectedItems}
							onChangeSelectedItems={handleSelectionChange}
						>
							<Column title="Name" />
							<Column
								title="Type"
								cellRenderer={item => (
									<InteractiveTableContent>
										<Pill onClick={() => {}}>
											Open {item.name}
										</Pill>
									</InteractiveTableContent>
								)}
							/>
							<Column title="Time" />
						</SelectionTable>
					)}
				</DemoTableState>
			</Wrapper>
		);

		const initialSelectedRow = getTableRow(
			screen.getByRole('rowheader', {
				name: /Dai Shepherd/,
			})
		);
		// Check initial selection status
		expect(initialSelectedRow).toHaveAttribute('aria-selected', 'true');

		// De-select the initial selection
		userEvent.click(screen.getByRole('checkbox', {name: /Dai Shepherd/}));
		expect(initialSelectedRow).toHaveAttribute('aria-selected', 'false');

		// Select a range of 4 rows
		shiftClick(
			screen.getByRole('checkbox', {
				name: /Vera Kirkland/,
			})
		);
		let selectedRows = await screen.findAllByRole('row', {
			selected: true,
		});
		expect(selectedRows).toHaveLength(4);
		within(selectedRows[0]).getByRole('rowheader', {name: /Dai Shepherd/});
		within(selectedRows[1]).getByRole('rowheader', {
			name: /Cassidy Y. Leach/,
		});
		within(selectedRows[2]).getByRole('rowheader', {
			name: /Tatum E. Cervantes/,
		});
		within(selectedRows[3]).getByRole('rowheader', {
			name: /Vera Kirkland/,
		});

		// De-select a single row using a modifier key (ctrl/cmd)
		const checkboxToDisable = screen.getByRole('checkbox', {
			name: /Cassidy Y. Leach/,
		});
		ctrlClick(checkboxToDisable);
		expect(checkboxToDisable).not.toHaveAttribute('checked');
		selectedRows = await screen.findAllByRole('row', {
			selected: true,
		});
		expect(selectedRows).toHaveLength(3);

		// Select another, independent range further down
		userEvent.click(
			screen.getByRole('checkbox', {
				name: /Noble Johns/,
			})
		);
		const newCheckbox = screen.getByRole('checkbox', {
			name: /Libby E. Bender/,
		});
		shiftClick(newCheckbox);

		await waitFor(() => {
			expect(newCheckbox).toBeChecked();
		});

		selectedRows = await screen.findAllByRole('row', {
			selected: true,
		});
		expect(selectedRows).toHaveLength(6);
		expect(
			within(selectedRows[4]).getByRole('checkbox')
		).toHaveAccessibleName(/Colin E. Williams/);

		// De-select all
		const selectAllCheckbox = screen.getByRole('checkbox', {
			name: 'Select all',
		});

		expect(selectAllCheckbox).toHaveProperty('indeterminate', true);
		userEvent.click(selectAllCheckbox);

		const allRows = (selectedRows = await screen.findAllByRole('row'));
		const deselectedRows = await screen.findAllByRole('row', {
			selected: false,
		});
		// Compare all unselected rows with the number of all rows
		// (except the table header)
		expect(deselectedRows).toHaveLength(allRows.length - 1);

		// Select all
		userEvent.click(selectAllCheckbox);
		selectedRows = await screen.findAllByRole('row', {
			selected: true,
		});
		// Compare all selected rows with the number of all rows
		// (except the table header)
		expect(selectedRows).toHaveLength(allRows.length - 1);

		// Select single row by clicking anywhere
		userEvent.click(screen.getByRole('rowheader', {name: /Dai Shepherd/}));
		selectedRows = await screen.findAllByRole('row', {
			selected: true,
		});
		expect(selectedRows).toHaveLength(1);

		// Clicking interactive elements wrapped with
		// <InteractiveTableContent> should NOT change row selection
		const firstRowOpenButton = screen.getByRole('button', {
			name: /Open Mariam D. Fletcher/,
		});
		userEvent.click(firstRowOpenButton);
		expect(firstRowOpenButton).toHaveFocus();
		expect(getTableRow(firstRowOpenButton)).not.toHaveAttribute(
			'aria-selected',
			'true'
		);

		expect(
			getTableRow(screen.getByRole('rowheader', {name: /Dai Shepherd/}))
		).toHaveAttribute('aria-selected', 'true');
	});
});
