import React, {forwardRef, useMemo} from 'react';

import removeFalsyProps, {Props} from '../utils/removeFalsyProps';

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
	/**
	 * The arrow will be placed on the opposing side of the defined direction:
	 * 'top', 'bottom', 'left', or 'right'.
	 * Add an optional suffix '-start' or '-end' to align the arrow to the
	 * start or end of the chosen direction.
	 */
	placement?: string,
	/**
	 * Control the arrow size (length of side)
	 */
	size?: number,
	/**
	 * Controls how far the arrow is placed from the container's edge when
	 * the placement contains a '-start' or '-end' suffix.
	 */
	distanceFromEdge?: number,
	style?: Props
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
