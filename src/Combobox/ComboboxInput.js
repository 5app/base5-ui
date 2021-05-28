import React, {useContext, forwardRef} from 'react';
import useMergedRefs from '../useMergedRefs';
import {ComboboxContext} from './Combobox';

const ComboboxInput = forwardRef((props, outerRef) => {
	const {
		as: Component = 'input',
		forwardedAs,
		refKey = 'ref',
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

	if (otherProps.onChange || otherProps.value) {
		console.warn(
			'ComboboxInput: `onChange` or `value` props were found on a ComboboxInput instance. This can lead to unexpected behaviour, please use the the `inputValue` and `onInputChange` props on the parent `Combobox` component instead.'
		);
	}

	return (
		<Component {...getInputProps(otherProps)} {...refs} as={forwardedAs} />
	);
});

ComboboxInput.displayName = 'ComboboxInput';

export default ComboboxInput;
