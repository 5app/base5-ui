import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {pxToRem} from '../utils/units';
import {alpha, getSolidBackgroundShade} from '../utils/colors';
import {borderValue, overflowWrap, ie11Hack} from '../mixins';
import {
	positionProps,
	positionPropsDef,
	marginProps,
	marginPropsDef,
} from '../styleProps';
import {
	getSpacing,
	getPropFilter,
	getPropNamesFromPropDefinition,
} from '../utils';
import Box from '../Box';
import Hidden from '../Hidden';

function getBreakpoint(key) {
	return p => p.theme.globals.breakpoints[p[key]];
}

const headerBackgroundColor = css`
	background-color: ${p =>
		p.shadedHeader ? getSolidBackgroundShade(p.theme) : p.theme.background};
`;

const stylePropNames = getPropNamesFromPropDefinition([
	...positionPropsDef,
	...marginPropsDef,
]);

const tablePropNames = [
	...stylePropNames,
	'mobileViewBreakpoint',
	'stickyHeaderOffset',
	'rowMinHeight',
	'shadedHeader',
];

export const TableWrapper = styled('table').withConfig({
	shouldForwardProp: getPropFilter(tablePropNames),
})`
	position: relative;
	${positionProps}
	display: table;
	table-layout: fixed;
	border-spacing: 0;
	line-height: 1.3;

	${marginProps}

	width: 100%;

	td,
	th {
		font-weight: inherit;
		text-align: left;
		height: ${p => pxToRem(p.rowMinHeight)};
		padding: ${p => p.theme.globals.spacing.xxs}
			${p => p.theme.globals.spacing.s};
		padding-right: 0;

		${overflowWrap}
	}

	thead th {
		position: relative;
		position: sticky;
		top: ${p => pxToRem(p.stickyHeaderOffset) || 0};
		z-index: ${p => p.theme.globals.z.raised};

		/**
		* MS Edge shows glitchy rendering when using a normal
		* border on sticky table headers, so we're using a
		* pseudo-element instead
		*/
		&::after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: ${p => p.theme.globals.z.below};
			border-bottom: ${p => borderValue(p.theme)};
			${headerBackgroundColor}
		}

		/**
		 * IE 11 doesn't render the pseudo element correctly, so
		 * we hide it and apply background colour and border directly
		 * to the cell.
		 */
		@media ${ie11Hack} {
			border-bottom: ${p => borderValue(p.theme)};
			${headerBackgroundColor}

			&::after {
				display: none;
			}
		}
	}

	/* Border-radius madness */
	border-radius: inherit;

	thead,
	tbody,
	th::after {
		border-radius: inherit;
	}
	th:first-child {
		border-top-left-radius: inherit;
	}
	th:last-child {
		border-top-right-radius: inherit;
	}
	tr:first-child {
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}

	/* Non-mobile-view styles only */
	@media (min-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		/* Highlight table row on hover and focus within */
		tbody tr:hover {
			background-color: ${p =>
				alpha(p.theme.shade, Number(p.theme.shadeStrength) / 2)};
		}
		tbody tr:focus-within {
			background-color: ${p =>
				alpha(p.theme.shade, Number(p.theme.shadeStrength) / 2)};
		}

		${p =>
			p.pl &&
			css`
				th:first-child,
				td:first-child {
					padding-left: ${getSpacing(p.pl, p.theme)};
				}
			`}

		${p =>
			p.pr &&
			css`
				th:last-child,
				td:last-child {
					padding-right: ${getSpacing(p.pr, p.theme)};
				}
			`}
	}

	/* Mobile-view styles */
	@media (max-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		/* Hide column headers. We'll add them back
		 * inside of each cell (except the row header). */
		thead {
			display: none;
		}

		/* Remove table layout. */
		table,
		tbody,
		th,
		td {
			display: block;
		}

		tr {
			/* Using flex allows us to modify the order of children
			 * so we can display the row's header at the top */
			display: flex;
			flex-direction: column;

			/* Add some padding for nicer spacing in the content area */
			padding-bottom: ${p => p.theme.globals.spacing.xs};
			border-bottom: ${p => borderValue(p.theme)};
		}

		/* More border-radius madness */
		tr:first-child th {
			border-top-left-radius: inherit;
			border-top-right-radius: inherit;
		}

		th {
			/* Make sure to display the header at the top */
			order: -1;

			/* Flex to vertically align content in cell */
			display: flex;
			align-items: center;
			font-weight: bold;

			/* Visually, this margin is added to the top padding 
			 * of the content area */
			margin-bottom: ${p => p.theme.globals.spacing.xs};

			border-bottom: ${p => borderValue(p.theme)};
			${headerBackgroundColor}
		}

		td {
			/* Override the specified minimum row height */
			height: auto;
			display: flex;
			font-weight: bold;

			/* Add columns headers as inline labels
			 * The parent td's display: flex ensures clean
			 * content line breaks */
			&::before {
				content: attr(data-columnheader) ': ';
				margin-right: ${p => p.theme.globals.spacing.xs};
				font-weight: normal;
				white-space: nowrap;
			}
		}
	}
`;

TableWrapper.propTypes = {
	mobileViewBreakpoint: PropTypes.string,
	stickyHeaderOffset: PropTypes.number,
	rowMinHeight: PropTypes.number,
	shadedHeader: PropTypes.bool,
};

export function TableCell({children, as, hideBelowBreakpoint, ...otherProps}) {
	const Component = hideBelowBreakpoint ? Hidden : Box;
	return (
		<Component {...otherProps} as={as || 'td'} below={hideBelowBreakpoint}>
			{children}
		</Component>
	);
}

export function TableBodyCell({children, title, ...otherProps}) {
	return (
		<TableCell {...otherProps} data-columnheader={title}>
			{children}
		</TableCell>
	);
}

TableCell.propTypes = {
	title: PropTypes.string.isRequired,
};

export const TableHead = 'thead';

export const TableBody = 'tbody';

export const TableRow = 'tr';
