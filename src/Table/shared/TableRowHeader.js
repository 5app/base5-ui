import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {borderValue} from '../../mixins';
import {getPropFilter} from '../../utils';

import {getBreakpoint, headerBackgroundColor} from '../utils';

import {withTableContext} from './TableContext';
import {tableCellBaseStyles} from './TableCell';

const Th = withTableContext(styled('th').withConfig({
	shouldForwardProp: getPropFilter(['mobileViewBreakpoint']),
})`
	${tableCellBaseStyles}

	@media (max-width: ${getBreakpoint('mobileViewBreakpoint')}) {
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
`);

function TableRowHeader(props) {
	return <Th {...props} as="th" role="rowheader" scope="row" />;
}

TableRowHeader.propTypes = {
	hideBelowBreakpoint: PropTypes.string,
};

export default TableRowHeader;
