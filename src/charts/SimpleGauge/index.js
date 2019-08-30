import React, {useRef} from 'react';
import styled, {css} from 'styled-components';

import {pxToRem} from '../../utils/units';
import {getColorBlock} from '../../utils/colors';

import Box from '../../Box';

import useChartist from '../useChartist';
import StripesPattern from './StripesPattern';

const Wrapper = styled.div`
	position: relative;
	overflow: hidden;
	${p =>
		p.height &&
		css`
			height: ${pxToRem(p.height)};
		`}

	> svg {
		vertical-align: middle;
		color: ${p => getColorBlock(p.color, p.theme)};

		${p =>
			p.height &&
			css`
				height: ${pxToRem(p.height * 2)};
			`}
		${p =>
			p.patternId &&
			`
			opacity: 0.2;
		`}
	}
	.ct-slice-donut {
		stroke: none;
		fill: none;
	}
	.ct-series-a {
		fill: ${p =>
			p.patternId ? `url(#${p.patternId}) currentColor` : 'currentColor'};
	}
	.ct-series-b {
		fill: currentColor;
		opacity: 0.2;
	}
`;

const defaultOptions = {
	donut: true,
	donutWidth: '80%',
	donutSolid: true,
	startAngle: 270,
	total: 200,
	showLabel: false,
	chartPadding: 0,
};

function SimpleGauge({
	value,
	height,
	color = 'links',
	isEmpty,
	emptyContent = 'No data to display',
}) {
	const hostRef = useRef(null);

	const hasValue = typeof value !== 'undefined' && value !== null && !isEmpty;

	const fraction = (hasValue ? value : Math.random()) * 100;

	const options = {
		...defaultOptions,
		height: height * 2,
	};

	useChartist(hostRef, {
		type: 'Pie',
		data: {
			series: [fraction, 100 - fraction],
		},
		options,
	});

	const patternId = `gauge-chart-${Math.random()}`;

	return (
		<Wrapper
			ref={hostRef}
			height={height}
			color={color}
			patternId={hasValue ? null : patternId}
		>
			{!hasValue && (
				<Box dimmed bottom right position="absolute" mx="xs" my="xxs">
					{emptyContent}
					<StripesPattern color={color} id={patternId} />
				</Box>
			)}
		</Wrapper>
	);
}

export default SimpleGauge;
