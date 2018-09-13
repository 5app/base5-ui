import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import focusController from './focusController';

import Base from '../Base';

const Clickable = styled(Base)`
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

	&:focus {
		outline: none;
	}

	/* Normalise inner button spacing in Gecko browsers */
	&::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
`;

const ButtonCore = React.forwardRef((props, ref) => {
	const {
		as,
		type,
		isActive,
		isFocused,
		isDisabled,
		disabled,
		className,
		...otherProps
	} = props;

	const classes = classNames(className, {
		'is-active': isActive,
		'is-focused': isFocused,
		'is-disabled': isDisabled || disabled,
	});

	const defaultType = !type && as === 'button' ? as : type;

	// Delete button props that would end up in DOM due to
	// styled-components' overly permissive attribute whitelist
	delete otherProps.color;

	return (
		<Clickable
			{...otherProps}
			innerRef={ref}
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

export default focusController(ButtonCore);
