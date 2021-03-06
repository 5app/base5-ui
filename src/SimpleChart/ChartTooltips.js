import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {alpha} from '../utils/colors';

import Popover from '../Popover';
import Text from '../Text';
import VisuallyHidden from '../VisuallyHidden';

const ReadoutList = styled.ul`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	display: flex;
	width: 100%;
	margin: 0;
	padding: 4px 0;
	list-style-type: none;
`;

const ReadoutListItem = styled.li`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex: 1;
	text-align: center;
	opacity: 0;

	&:first-child,
	&:last-child {
		flex: 0.5;
	}

	&:first-child {
		justify-content: flex-start;
	}

	&:last-child {
		justify-content: flex-end;
	}

	&:hover {
		opacity: 1;
	}
`;

const Cursor = styled.span`
	display: block;
	height: ${p => p.yValue * 100}%;
	width: 1px;
	background-color: ${p => alpha(p.theme.shade, p.theme.lineStrength)};
`;
Cursor.defaultProps = {
	yValue: 1,
};

// Return a label from the given array of labels
// and an index. If the index is higher than the
// number of labels (i.e. if there are more items
// than labels), the labels are treated like they're
// repeating.
function getLabel(labels, index) {
	if (!labels || !labels.length) return null;

	return labels[index] || labels[index % labels.length];
}

function getDefaultReadout(name, value, label) {
	return (
		<>
			{label && (
				<Text bold size="m" lineHeight={1}>
					{label}
					<br />
				</Text>
			)}
			{name ? `${name}: ${value}` : value}
		</>
	);
}

function ChartTooltips({
	data,
	labels,
	name,
	getReadout = getDefaultReadout,
	tooltipComponent: TooltipComponent = Popover,
	tooltipProps,
}) {
	const [hoveredPoint, setHoveredPoint] = useState(null);

	if (!data || !data.length) return null;

	const maxValue = Math.max.apply(null, data);

	return (
		<ReadoutList>
			{data.map((value, index) => {
				const label = getLabel(labels, index);
				const readOut = getReadout(name, value, label);
				return (
					<ReadoutListItem
						key={index}
						onMouseEnter={() => setHoveredPoint(index)}
						onMouseLeave={() => setHoveredPoint(null)}
					>
						<TooltipComponent
							{...tooltipProps}
							isOpen={hoveredPoint === index}
							placement="top"
							distance={8}
							content={readOut}
						>
							{popover => (
								<>
									<VisuallyHidden>{readOut}</VisuallyHidden>
									<Cursor
										ref={popover.ref}
										yValue={value / maxValue}
									/>
								</>
							)}
						</TooltipComponent>
					</ReadoutListItem>
				);
			})}
		</ReadoutList>
	);
}

ChartTooltips.propTypes = {
	data: PropTypes.array.isRequired,
	labels: PropTypes.array,
	name: PropTypes.string,
	getReadout: PropTypes.func,
	tooltipComponent: PropTypes.elementType,
	tooltipProps: PropTypes.object,
};

export default ChartTooltips;
