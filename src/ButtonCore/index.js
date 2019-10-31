import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

import 'focus-visible';

const Clickable = styled.button`
	display: inline-block;
	margin: 0;
	padding: 0;
	vertical-align: middle;

	font: inherit;
	text-decoration: none;
	text-align: inherit;

	color: inherit;
	background-color: transparent;
	border: none;
	border-radius: 0;
	cursor: pointer;

	appearance: none;

	&:focus:not(.focus-visible) {
		outline: none;
	}

	&.focus-visible {
		outline: 3px solid currentColor;
		outline-offset: 3px;
	}

	/* Normalise inner button spacing in Gecko browsers */
	&::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
`;

const ButtonCore = forwardRef((props, ref) => {
	const {
		as,
		type,
		isActive,
		isDisabled,
		disabled,
		className,
		...otherProps
	} = props;

	const classes = classNames(className, {
		'is-active': isActive,
		'is-disabled': isDisabled || disabled,
	});

	const defaultType = !type && as === 'button' ? as : type;

	// Delete button props that would end up in DOM due to
	// styled-components' overly permissive attribute whitelist
	delete otherProps.color;

	return (
		<Clickable
			{...otherProps}
			ref={ref}
			as={as}
			type={defaultType}
			disabled={isDisabled || disabled}
			className={classes}
		/>
	);
});

ButtonCore.displayName = 'ButtonCore';

ButtonCore.defaultProps = {
	as: 'button',
};

ButtonCore.propTypes = {
	/**
	 * Change the rendered underlying component.
	 */
	as: PropTypes.elementType,
	/**
	 * When as === "button", this defaults to "button" so you don't have to
	 * remember to set it yourself (as inconveniently, buttons default to
	 * type "submit")
	 */
	type: PropTypes.string,
	/**
	 * When present, this adds the className `is-active` to the rendered element.
	 * Useful so you can use this class as the only styling hook in combination with
	 * react-router's `NavLink` and its `activeClassName` prop.
	 * Note: This is different from react-router 5's isActive prop.
	 * This conflict should be resolved at some point but would be a breaking change.
	 */
	isActive: PropTypes.bool,
	/**
	 * When present, this adds the className `is-disabled` to the rendered element, and
	 * the attribute `aria-disabled` when the element is a button.
	 *
	 * This is useful so you can use this class as the only styling hook without having to rely
	 * on the `disabled` or `aria-disabled` attributes which are only available on button elements.
	 *
	 * Why are we using `aria-disabled="true"` instead of `disabled`?
	 * To screen reader users, disabled buttons are completely unperceivable, while those with the
	 * aria attribute will still be announced and labelled as disabled.
	 */
	isDisabled: PropTypes.bool,
	/**
	 * An alias for the `isDisabled` prop, for alignment with the native html attribute.
	 * Only use this if you for some reason really want to hide the element to screen reader users.
	 */
	disabled: PropTypes.bool,
};

// @component
export default ButtonCore;
