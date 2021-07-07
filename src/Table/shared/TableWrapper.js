import styled from 'styled-components';

import {
	positionProps,
	positionPropsDef,
	marginProps,
	marginPropsDef,
} from '../../styleProps';
import {getPropFilter, getPropNamesFromPropDefinition} from '../../utils';

import {withTableContext} from './TableContext';

import {getBreakpoint} from '../utils';

const stylePropNames = getPropNamesFromPropDefinition([
	...positionPropsDef,
	...marginPropsDef,
]);

const tablePropNames = [...stylePropNames, 'mobileViewBreakpoint'];

const TableWrapper = styled('table').withConfig({
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

	/* Border-radius madness:
	 * Make the table inherit its direct parent's border radius */
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

	/* Mobile-view styles */
	@media (max-width: ${getBreakpoint('mobileViewBreakpoint')}) {
		thead {
			display: none;
		}

		/* Remove table layout. */
		&,
		tbody {
			display: block;
		}

		/* More border-radius madness */
		tr:first-child th {
			border-top-left-radius: inherit;
			border-top-right-radius: inherit;
		}
	}
`;
export default withTableContext(TableWrapper);
