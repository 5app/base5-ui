import React, {forwardRef, useCallback, useEffect, useRef} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {
	mergeRefs,
	pxToEm,
	pxToRem,
	alpha,
	contrast,
	getDimmedTextColor,
} from '../utils';
import {fillParent} from '../mixins';
import Icon from '../Icon';
import {useTabIndexContext} from '../TabIndexContext';

const noop = () => {};

const Wrapper = styled.span`
	position: relative;
	display: inline-flex;
`;

const EXTEND_TAP_AREA_SPACING = pxToRem(6);

const Input = styled.input`
	position: absolute;
	top: -${EXTEND_TAP_AREA_SPACING};
	left: -${EXTEND_TAP_AREA_SPACING};
	width: calc(100% + ${EXTEND_TAP_AREA_SPACING} * 2);
	height: calc(100% + ${EXTEND_TAP_AREA_SPACING} * 2);
	opacity: 0;
`;

const MockBox = styled.span.withConfig({
	shouldForwardProp: prop => !['isChecked', 'scale'].includes(prop),
})`
	position: relative;
	pointer-events: none;

	display: inline-flex;
	align-items: center;
	justify-content: center;

	width: ${pxToEm(16)};
	height: ${pxToEm(16)};

	font-size: ${p => (p.scale === 'auto' ? '1em' : pxToRem(18 * p.scale))};

	color: ${p => contrast(p.theme.links)};
	background: ${p => (p.isChecked ? p.theme.links : p.theme.background)};
	border: 1px solid ${p => alpha(p.theme.text, p.isChecked ? 0 : 0.5)};
	border-radius: ${pxToRem(3)};

	input[disabled] + & {
		opacity: 0.5;

		${p => {
			if (!p.isChecked) {
				const textColor = getDimmedTextColor(p.theme);
				return css`
					background-image: linear-gradient(
						45deg,
						white 25%,
						${textColor} 25%,
						${textColor} 50%,
						white 50%,
						white 75%,
						${textColor} 75%,
						${textColor} 100%
					);
					background-size: 4px 4px;
				`;
			}
		}};
	}

	/* Hover & focus highlights */
	&::before,
	&::after {
		content: '';
		${fillParent}

		opacity: 0;

		transition: opacity 0.25s linear;
		pointer-events: none;
	}

	/* Hover shade */
	&::before {
		background: ${p => p.theme.shade};
		border-radius: inherit;

		${Wrapper}:hover & {
			opacity: ${p => Math.min(p.theme.shadeStrength, 0.12)};
			transition-duration: 50ms;
		}
	}

	/* Focus ring */
	&::after {
		top: -3px;
		left: -3px;
		bottom: -3px;
		right: -3px;

		border-radius: inherit;
		box-shadow: 0 0 0 3px ${p => p.theme.links};

		input.focus-visible + & {
			opacity: 1;
			transition-duration: 50ms;
		}
	}

	& > svg {
		position: relative;
		transition: opacity 150ms ease-out;
		opacity: ${p => (p.isChecked ? 1 : 0)};
	}
`;

const Checkbox = forwardRef((props, ref) => {
	const {
		checked,
		indeterminate,
		onChange,
		onClick,
		scale,
		className,
		tabIndex,
		...otherProps
	} = props;

	const inputRef = useRef();
	const tabIndexContext = useTabIndexContext();

	useEffect(() => {
		inputRef.current.indeterminate = indeterminate || false;
	}, [indeterminate]);

	const handleClick = useCallback(
		e => {
			if (onClick) onClick(e);

			/**
			 * IE 11 and Edge don't fire onChange for indeterminate checkboxes,
			 * therefore we're (ab)using the click handler to do so instead.
			 *
			 * Surprisingly, this even works with keyboard navigation
			 * (i.e. when pressing Space when the input is focused).
			 */
			if (indeterminate && onChange) {
				onChange(e);
			}
		},
		[onClick, onChange, indeterminate]
	);

	const isChecked = Boolean(checked);

	return (
		<Wrapper className={className}>
			<Input
				type="checkbox"
				ref={mergeRefs([inputRef, ref])}
				checked={isChecked}
				indeterminate={indeterminate}
				onChange={indeterminate ? noop : onChange}
				onClick={handleClick}
				tabIndex={tabIndex || tabIndexContext}
				{...otherProps}
			/>
			<MockBox
				aria-hidden="true"
				isChecked={isChecked || indeterminate}
				scale={scale}
			>
				<Icon name={indeterminate ? 'minus' : 'ok'} scale={0.9} />
			</MockBox>
		</Wrapper>
	);
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
	scale: 1,
};

Checkbox.propTypes = {
	checked: PropTypes.bool,
	indeterminate: PropTypes.bool,
	/**
	 * Control the size of the checkbox by passing in a size multiplier, i.e. `1.5`.
	 * Set to `'auto'` to make the checkbox scale along with its surrounding text
	 */
	scale: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Checkbox;
