import React, {useRef} from 'react';
import styled from 'styled-components';

import {getColorBlock} from '../../utils/colors';

import useChartist from '../useChartist';

const ChartWrapper = styled.div`
	color: ${p => getColorBlock(p.color, p.theme)};

	> svg {
		vertical-align: middle;
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

function SimpleChart({labels, data, height, color = 'links'}) {
	const hostRef = useRef(null);

	const options = {
		...defaultOptions,
		height,
	};

	useChartist(hostRef, {
		type: 'Line',
		data: {
			labels,
			series: [data],
		},
		options,
		preserveAspectRatio: 'none',
	});

	return <ChartWrapper ref={hostRef} color={color} />;
}

export default SimpleChart;
