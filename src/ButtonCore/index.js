import React, {forwardRef} from 'react';
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

ButtonCore.defaultProps = {
	as: 'button',
};

export default ButtonCore;
