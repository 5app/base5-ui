import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {alpha, getBackgroundShade} from '../../../utils/colors';
import ArrowIcon from '../../../icons/Arrow';
import ButtonCore from '../../../ButtonCore';

import VisuallyHidden from '../../../VisuallyHidden';

const HeaderButton = styled(ButtonCore)`
	vertical-align: baseline;
	padding-right: ${p => p.theme.globals.spacing.xxs};
`;

const shouldForwardProp = prop => prop !== 'isActive';

const ClickabilityIndicator = styled.span.withConfig({shouldForwardProp})`
	position: relative;
	margin-left: ${p => p.theme.globals.spacing.xxs};

	&::after {
		content: '';
		position: absolute;
		width: 4px;
		height: 4px;
		top: calc(50% - 2px);
		left: calc(50% - 2px);
		background-color: currentcolor;
		border-radius: 50%;
		opacity: ${p => (p.isActive ? 0 : 0.5)};
		transition: opacity 0.15s ease-in-out 0.15s;
	}

	${HeaderButton}:hover &::after,
	${HeaderButton}.focus-visible &::after {
		opacity: 0;
		transition-delay: 0s;
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

	${HeaderButton}:hover &,
	${HeaderButton}.focus-visible & {
		fill: ${p => p.theme.links};
		opacity: 1;
		transition-delay: 0.15s;
		${p =>
			p.isActive &&
			`
				background-color: ${getBackgroundShade(p.theme)};
				box-shadow: 0 0 0 3px
					${alpha(p.theme.shade, p.isActive ? p.theme.shadeStrength : 0)};
			`}
	}
`;

function SortArrow({isActive, orderDir}) {
	return (
		<ClickabilityIndicator isActive={isActive}>
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

function ClickableHeader({
	isActive,
	column,
	order,
	orderLabels,
	onRequestSort,
	children,
}) {
	if (!column.sortable) {
		return children;
	}

	function getSortHandler({name, title, defaultOrder = 'asc'}) {
		if (typeof onRequestSort !== 'function') return null;

		return () => {
			// Only flip the order when the column to be ordered by
			// doesn't change.
			// Otherwise use the column's `defaultOrder` prop
			onRequestSort({
				column: name || title,
				order: isActive ? reverseOrder[order] : defaultOrder,
			});
		};
	}

	return (
		<HeaderButton onClick={getSortHandler(column)}>
			{children}
			{column.sortable && (
				<SortArrow
					isActive={isActive}
					orderDir={isActive ? order : column.defaultOrder}
				/>
			)}
			{isActive && <VisuallyHidden>{orderLabels[order]}</VisuallyHidden>}
		</HeaderButton>
	);
}

ClickableHeader.propTypes = {
	isActive: PropTypes.bool,
	children: PropTypes.node,
	column: PropTypes.object.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']),
	orderLabels: PropTypes.shape({
		asc: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
	}),
	onClick: PropTypes.func,
};

export default ClickableHeader;
