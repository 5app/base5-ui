import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {pxToRem, getBackgroundShade} from '../../../utils';
import {fillParent} from '../../../mixins';
import ArrowIcon from '../../../icons/Arrow';
import ButtonCore from '../../../ButtonCore';

import VisuallyHidden from '../../../VisuallyHidden';

import {getColumnName} from '../../utils';

const Wrapper = styled.span`
	vertical-align: baseline;
	padding-right: ${p => p.theme.globals.spacing.xxs};
`;

const shouldForwardProp = prop => prop !== 'isActive';

const ClickabilityIndicator = styled(ButtonCore).withConfig({
	shouldForwardProp,
})`
	margin-left: ${p => p.theme.globals.spacing.xxs};
	vertical-align: 0;

	&::before {
		content: '';
		position: absolute;
		width: ${pxToRem(4)};
		height: ${pxToRem(4)};
		margin-top: ${pxToRem(8)};
		margin-left: ${pxToRem(5)};
		background-color: currentcolor;
		border-radius: 50%;
		opacity: ${p => (p.isActive ? 0 : 0.5)};
		transition: opacity 0.15s ease-in-out 0.15s;
	}

	&:hover::before,
	&.focus-visible::before {
		opacity: 0;
		transition-delay: 0s;
	}

	&::after {
		content: '';
		${fillParent}
	}
`;

const StyledSortArrow = styled(ArrowIcon).withConfig({shouldForwardProp})`
	border-radius: 50%;
	transition-property: all;

	${p =>
		!p.isActive &&
		css`
			opacity: 0;
		`}

	${ClickabilityIndicator}:hover &,
	${ClickabilityIndicator}.focus-visible & {
		fill: ${p => p.theme.links};
		opacity: 1;
		transition-delay: 0.15s;
		background-color: ${p => getBackgroundShade(p.theme)};
		box-shadow: 0 0 0 3px ${p => getBackgroundShade(p.theme)};
	}
`;

function SortArrow({isActive, orderDir, ...otherProps}) {
	return (
		<ClickabilityIndicator {...otherProps} isActive={isActive}>
			<StyledSortArrow
				vAlign
				dimmed
				isActive={isActive}
				scale={0.8}
				rotate={orderDir === 'desc' ? -90 : 90}
			/>
		</ClickabilityIndicator>
	);
}

const reverseOrder = {
	asc: 'desc',
	desc: 'asc',
};

const orderLabels = {
	asc: 'sortedAsc',
	desc: 'sortedDesc',
};

function ClickableHeader({
	isActive,
	column,
	order,
	a11yLabels,
	onRequestSort,
	children,
}) {
	if (!column.sortable) {
		return children;
	}

	const columnName = getColumnName(column);
	// Only flip the order when the column to be ordered by doesn't change.
	// Otherwise use the column's `defaultOrder` prop
	const newOrder = isActive
		? reverseOrder[order]
		: column.defaultOrder || 'asc';

	function getSortHandler() {
		if (typeof onRequestSort !== 'function') return null;

		return () => {
			onRequestSort({
				column: column.name || column.title,
				order: newOrder,
			});
		};
	}

	return (
		<Wrapper>
			{children}
			{isActive && (
				<VisuallyHidden>
					{`(${a11yLabels[orderLabels[order]]})`}
				</VisuallyHidden>
			)}
			{column.sortable && (
				<SortArrow
					isActive={isActive}
					orderDir={isActive ? order : column.defaultOrder}
					onClick={getSortHandler()}
					aria-label={a11yLabels.sortByColumn(columnName, newOrder)}
				/>
			)}
		</Wrapper>
	);
}

ClickableHeader.propTypes = {
	isActive: PropTypes.bool,
	children: PropTypes.node,
	column: PropTypes.object.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']),
	a11yLabels: PropTypes.shape({
		sortedAsc: PropTypes.string.isRequired,
		sortedDesc: PropTypes.string.isRequired,
		sortByColumn: PropTypes.func.isRequired,
	}),
	onClick: PropTypes.func,
};

export default ClickableHeader;
