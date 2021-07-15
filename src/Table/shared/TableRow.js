import React, {forwardRef} from 'react';
import styled from 'styled-components';

import {alpha} from '../../utils';
import {borderValue} from '../../mixins';
import TabIndexContext from '../../TabIndexContext';

import {withTableContext, tableContextPropFilter} from './TableContext';

import {getBreakpoint} from '../utils';

const Tr = withTableContext(styled.tr.withConfig({
	shouldForwardProp: tableContextPropFilter,
})`
	/* Highlight NON-SELECTABLE table rows */
	tbody &:not([data-selectable]):hover {
		background-color: ${p =>
			alpha(p.theme.shade, Math.max(0.05, +p.theme.shadeStrength / 2))};
	}
	/* We have to repeat this selector as browsers that don't support
	* :focus-within would otherwise ignore the whole rule */
	tbody &:not([data-selectable]):focus-within {
		background-color: ${p =>
			alpha(p.theme.shade, Math.max(0.05, +p.theme.shadeStrength / 2))};
	}

	&[data-selectable] {
		cursor: pointer;
	}

	/* Highlight SELECTABLE table rows */
	tbody:hover &[data-selectable][data-highlighted] {
		outline: 1px solid ${p => p.theme.links};
		outline-offset: -1px;
		background-color: ${p =>
			alpha(p.theme.links, Math.max(0.05, +p.theme.shadeStrength / 2))};
	}
	tbody &[data-selectable][data-highlighted]:focus-within {
		outline: 1px solid ${p => p.theme.links};
		outline-offset: -1px;
		background-color: ${p =>
			alpha(p.theme.links, Math.max(0.05, +p.theme.shadeStrength / 2))};
	}

	tbody &[data-selectable][aria-selected="true"],
	tbody &[data-selectable][aria-selected="true"][data-highlighted] {
		background-color: ${p =>
			alpha(p.theme.links, Math.max(0.15, +p.theme.shadeStrength))}};
	}

	/* Mobile-view styles */
	@media (max-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		position: relative;
		/* Using flex allows us to modify the order of children
		* so we can display the row's header at the top */
		display: flex;
		flex-direction: column;

		/* Add some padding for nicer spacing in the content area */
		padding-bottom: ${p => p.theme.globals.spacing.xs};
		border-bottom: ${p => borderValue(p.theme)};
	}
`);

const TableRow = forwardRef(
	({selectable, isSelected, isHighlighted, children, ...otherProps}, ref) => {
		return (
			<TabIndexContext disabled={Boolean(selectable && !isHighlighted)}>
				<Tr
					{...otherProps}
					ref={ref}
					data-selectable={selectable || null}
					data-highlighted={(selectable && isHighlighted) || null}
					aria-selected={(selectable && isSelected) || null}
				>
					{children}
				</Tr>
			</TabIndexContext>
		);
	}
);

TableRow.displayName = 'TableRow';

export default TableRow;
