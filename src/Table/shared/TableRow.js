import styled from 'styled-components';

import {alpha} from '../../utils';
import {borderValue} from '../../mixins';

import {withTableContext, tableContextPropFilter} from './TableContext';

import {getBreakpoint} from '../utils';

const TableRow = styled('tr').withConfig({
	shouldForwardProp: tableContextPropFilter,
})`
	/* Non-mobile-view styles only */
	@media (min-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		position: relative;

		/* Highlight table row on hover and focus within */
		tbody &:hover {
			background-color: ${p =>
				alpha(p.theme.shade, Number(p.theme.shadeStrength) / 2)};
		}
		tbody &:focus-within {
			background-color: ${p =>
				alpha(p.theme.shade, Number(p.theme.shadeStrength) / 2)};
		}
		tbody &[data-selected='true'] {
			background-color: ${p =>
				alpha(p.theme.shade, p.theme.shadeStrength)};
		}
		tbody &[data-selected='true']::before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 4px;
			height: 100%;
			background-color: ${p => p.theme.links};
		}
	}

	/* Mobile-view styles only */
	@media (max-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		/* Using flex allows us to modify the order of children
		* so we can display the row's header at the top */
		display: flex;
		flex-direction: column;

		/* Add some padding for nicer spacing in the content area */
		padding-bottom: ${p => p.theme.globals.spacing.xs};
		border-bottom: ${p => borderValue(p.theme)};
	}
`;

export default withTableContext(TableRow);
