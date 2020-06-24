import React, {useMemo, useState} from 'react';
import {usePopper} from 'react-popper';

import {matchWidth, maxSize, applyMaxHeight} from './modifiers';
import Arrow from '../../Arrow';

function usePopOver({
	arrowSize = 12,
	distance = 0,
	matchReferenceWidth = false,
	offset = 0,
	placement = 'top',
	positionFixed = true,
}) {
	const [referenceElement, setReferenceElement] = useState(null);
	const [popperElement, setPopperElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);

	const autoDistance = Number(arrowSize) / 2 + Number(distance);

	const modifiers = useMemo(
		() =>
			[
				{name: 'arrow', options: {element: arrowElement}},
				{name: 'offset', options: {offset: [offset, autoDistance]}},
				{name: 'computeStyles', options: {gpuAcceleration: false}},
				matchReferenceWidth ? matchWidth : null,
				maxSize,
				applyMaxHeight,
			].filter(Boolean),
		[autoDistance, offset, arrowElement, matchReferenceWidth]
	);

	const {styles, state, attributes, update} = usePopper(
		referenceElement,
		popperElement,
		{
			strategy: positionFixed ? 'fixed' : 'absolute',
			placement,
			modifiers,
		}
	);

	const arrow = arrowSize > 0 && (
		<Arrow
			ref={setArrowElement}
			size={arrowSize}
			placement={state?.placement}
			style={styles.arrow}
		/>
	);

	return {
		setRef: setPopperElement,
		setReferenceRef: setReferenceElement,
		props: {
			style: styles.popper,
			...attributes.popper,
		},
		arrow,
		update,
	};
}

export default usePopOver;
