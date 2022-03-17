import React, {forwardRef, useMemo} from 'react';

import {removeFalsyProps, Props} from '../utils/removeFalsyProps';

import getArrowPosition, {getPlacements} from './getArrowPosition';
import { CSSProperties } from 'styled-components';

const transformMap = {
	top: 'translateY(-50%) rotate(135deg)',
	right: 'translateX(50%) rotate(225deg)',
	bottom: 'translateY(50%) rotate(-45deg)',
	left: 'translateX(-50%) rotate(45deg)',
};


function useArrowStyles(primaryPlacement: string, arrowSize: number) {
	const arrowStyles = useMemo(
		() => {
			const properties: CSSProperties = {
				position: 'absolute',

				display: 'inline-block',
				width: arrowSize + 'px',
				height: arrowSize + 'px',

				backgroundColor: 'inherit',
				border: 'inherit',
				borderLeftColor: 'transparent',
				borderBottomColor: 'transparent',

				transform: transformMap[primaryPlacement],
				transformOrigin: '50%',
				clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
			}
			return properties;
	},
		[arrowSize, primaryPlacement]
	);

	return arrowStyles;
}

interface ArrowProps {
	placement?: string,
	size?: number,
	distanceFromEdge?: number,
	style: Props
}

const Arrow = forwardRef((props: ArrowProps, ref: React.RefObject<HTMLElement>) => {
	const {placement, size, distanceFromEdge, style} = props;

	const [primaryPlacement] = getPlacements(placement);
	const baseArrowStyles = useArrowStyles(primaryPlacement, size);
	const defaultArrowPosition = useMemo(
		() =>
			getArrowPosition(placement, {
				centerOffset: `-${size / 2}px`,
				defaultSecondaryValue: distanceFromEdge,
			}),
		[distanceFromEdge, placement, size]
	);

	// Popper.js likes to pass empty strings for unset properties,
	// (e.g. top: '') we need to filter those out to prevent them
	// from overriding our styles
	const styleWithoutEmptyValues = removeFalsyProps(style);

	const arrowStyle = {
		...baseArrowStyles,
		...defaultArrowPosition,
		...styleWithoutEmptyValues,
	};

	return <span ref={ref} style={arrowStyle} />;
});

Arrow.displayName = 'Arrow';

Arrow.defaultProps = {
	placement: 'top',
	size: 8,
	distanceFromEdge: 8,
};

export default Arrow;
