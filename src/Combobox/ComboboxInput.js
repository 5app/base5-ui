import React, {useContext, forwardRef} from 'react';
import PropTypes from 'prop-types';
import useMergedRefs from '../useMergedRefs';
import {ComboboxContext} from './Combobox';

const ComboboxInput = forwardRef((props, outerRef) => {
	const {as: Component, forwardedAs, refKey = 'ref', ...otherProps} = props;

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

ComboboxInput.defaultProps = {
	as: 'input',
	refKey: 'ref',
};

ComboboxInput.propTypes = {
	/**
	 * Change the component that's rendered by this component.
	 * The specified component must pass all common `input` props
	 * (e.g. `value`, `id`, `onChange`) down to the rendered element.
	 */
	as: PropTypes.elementType,
	/**
	 * If the component passed to the `as` prop accepts an `as` prop
	 * itself, `forwardedAs` can be used to pass another component
	 * into it.
	 */
	forwardedAs: PropTypes.elementType,
	/**
	 * The name of the prop used to pass a ref to the component specified
	 * in the `as` prop (e.g. "innerRef", "inputRef").
	 */
	refKey: PropTypes.string,
};

export default ComboboxInput;
