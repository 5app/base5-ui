import React, {useMemo, useState} from 'react';
import {usePopper} from 'react-popper';

import useMergedRefs from '../useMergedRefs';

import {matchWidth, maxSize, applyMaxHeight} from './modifiers';
import Arrow from '../Arrow';

function usePopover({
	ref,
	referenceRef,
	arrowSize = 12,
	distance = 0,
	matchReferenceWidth = false,
	offset = 0,
	placement = 'top',
	positionFixed = true,
	adaptivePositioning = false,
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
				{
					name: 'computeStyles',
					options: {
						gpuAcceleration: false,
						adaptive: adaptivePositioning,
					},
				},
				matchReferenceWidth ? matchWidth : null,
				maxSize,
				applyMaxHeight,
			].filter(Boolean),
		[
			autoDistance,
			offset,
			arrowElement,
			adaptivePositioning,
			matchReferenceWidth,
		]
	);

	const {styles, state, attributes, update, forceUpdate} = usePopper(
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

	const setRef = useMergedRefs([setPopperElement, ref]);
	const setReferenceRef = useMergedRefs([setReferenceElement, referenceRef]);

	return {
		setRef,
		setReferenceRef,
		props: {
			style: styles.popper,
			...attributes.popper,
		},
		arrow,
		update,
		forceUpdate,
	};
}

export default usePopover;
