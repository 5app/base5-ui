import {useRef, useEffect} from 'react';
import Chartist from 'chartist';

function useChartist(
	hostRef,
	{data, options, type = 'Line', preserveAspectRatio}
) {
	const chartRef = useRef(null);

	useEffect(() => {
		chartRef.current = new Chartist[type](hostRef.current, data, options);
		return function cleanUp() {
			chartRef.current.detach();
		};
	}, [data, hostRef, options, type]);

	const chartHeight = options && options.height;

	// This effect adds a viewBox attribute to the generated SVG element,
	// which allows it to grow/shwink along with the container when the size
	// of it changes - in case the change is not due to a window resize,
	// which Chartist already handles by redrawing the chart.
	useEffect(() => {
		function updateViewBox(data) {
			const node = data.svg && data.svg._node;
			if (node) {
				node.setAttribute(
					'viewBox',
					`0 0 ${node.clientWidth} ${chartHeight ||
						node.clientHeight}`
				);
				if (preserveAspectRatio) {
					node.setAttribute(
						'preserveAspectRatio',
						preserveAspectRatio
					);
				}
			}
		}
		chartRef.current.on('created', updateViewBox);
	}, [chartRef, preserveAspectRatio, chartHeight]);
}

export default useChartist;
