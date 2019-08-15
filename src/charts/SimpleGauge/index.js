import React, {useRef} from 'react';
import styled, {css} from 'styled-components';

import {pxToRem} from '../../utils/units';
import {getColorBlock} from '../../utils/colors';

import useChartist from '../useChartist';

const Wrapper = styled.div`
	overflow: hidden;
	${p =>
		p.height &&
		css`
			height: ${pxToRem(p.height)};
		`}

	color: ${p => getColorBlock(p.color, p.theme)};

	> svg {
		vertical-align: middle;
	}
	.ct-slice-donut {
		fill: none;
	}
	.ct-series-a {
		stroke: currentColor;
	}
	.ct-series-b {
		stroke: currentColor;
		opacity: 0.2;
	}
`;

const defaultOptions = {
	donut: true,
	donutWidth: '80%',
	startAngle: 270,
	total: 200,
	showLabel: false,
	chartPadding: 0,
};

function SimpleGauge({value, height, color = 'links'}) {
	const hostRef = useRef(null);

	const fraction = value * 100;

	const options = {
		...defaultOptions,
		height,
	};

	useChartist(hostRef, {
		type: 'Pie',
		data: {
			series: [fraction, 100 - fraction],
		},
		options,
	});

	return <Wrapper ref={hostRef} height={height / 2} color={color} />;
}

export default SimpleGauge;
