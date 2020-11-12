import React, {useContext, forwardRef} from 'react';
import useMergedRefs from '../useMergedRefs';
import {ComboboxContext} from './Combobox';

const ComboboxInput = forwardRef(function ComboboxInput(props, outerRef) {
	const {
		as: Component = 'input',
		forwardedAs,
		refKey = 'ref',
		onFocus,
		onKeyDown,
		...otherProps
	} = props;

	const {
		getInputProps,
		popover: {setReferenceRef},
	} = useContext(ComboboxContext);

	// If there's a custom refKey, use that as the popover target
	// and pass the regular ref on as usual
	// Otherwise merge the refs and attach them to the default one
	const mergedRefs = useMergedRefs([setReferenceRef, outerRef]);
	const mergedCustomRefs = useMergedRefs([
		setReferenceRef,
		otherProps[refKey],
	]);
	const refs = {
		ref: refKey !== 'ref' ? outerRef : mergedRefs,
	};
	if (refKey !== 'ref') {
		refs[refKey] = mergedCustomRefs;
	}

	return (
		<Component
			{...otherProps}
			as={forwardedAs}
			{...refs}
			{...getInputProps({onFocus, onKeyDown})}
		/>
	);
});

export default ComboboxInput;
