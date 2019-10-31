import React, {useRef} from 'react';
import styled, {css} from 'styled-components';

import {pxToRem} from '../../utils/units';
import {getColorBlock} from '../../utils/colors';

import Box from '../../Box';

import useChartist from '../useChartist';
import ChartTooltips from './ChartTooltips';

const ChartWrapper = styled.div`
	position: relative;

	> svg {
		${p =>
			p.height &&
			css`
				height: ${pxToRem(p.height)};
			`}
		vertical-align: middle;
		color: ${p => getColorBlock(p.color, p.theme)};
	}
	.ct-line {
		fill: none;
		stroke: currentColor;
		stroke-width: 4px;
	}
	.ct-area {
		fill: currentColor;
		opacity: 0.1;
	}
	.ct-grid {
		stroke: black;
		opacity: 0.1;
	}

	${p =>
		p.isEmpty &&
		`
		.ct-line {
			opacity: 0.2;
			stroke-dasharray: 10;
		}
		.ct-area {
			opacity: 0;
		}
	`}
`;

const defaultOptions = {
	showArea: true,
	showPoint: false,
	lineSmooth: false,
	fullWidth: true,
	chartPadding: {
		top: 4,
		bottom: 4,
		left: 0,
		right: 0,
	},
	axisX: {
		offset: 0,
		showLabel: false,
		showGrid: false,
	},
	axisY: {
		offset: 0,
		showLabel: false,
		showGrid: false,
		low: 0,
	},
};

function getRandomPoints(length = 7) {
	return Array(length)
		.fill(1)
		.map(() => Math.random());
}

function SimpleChart({
	labels,
	data,
	height,
	name,
	color = 'links',
	tooltipRenderer,
	getTooltipReadout,
	isEmpty,
	emptyContent = 'No data to display',
}) {
	const hostRef = useRef(null);

	const options = {
		...defaultOptions,
		height,
	};

	const hasData = !isEmpty && data && data.length !== 0;

	useChartist(hostRef, {
		type: 'Line',
		data: {
			labels,
			series: [hasData ? data : getRandomPoints()],
		},
		options,
		preserveAspectRatio: 'none',
	});

	return (
		<ChartWrapper
			ref={hostRef}
			color={color}
			height={height}
			isEmpty={!hasData}
		>
			{hasData ? (
				<ChartTooltips
					data={data}
					labels={labels}
					name={name}
					tooltipRenderer={tooltipRenderer}
					getReadout={getTooltipReadout}
				/>
			) : (
				<Box dimmed bottom right position="absolute" mx="xs" my="xxs">
					{emptyContent}
				</Box>
			)}
		</ChartWrapper>
	);
}

// @component
export default SimpleChart;
