import React, {forwardRef} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import {pxToEm, pxToRem, alpha, contrast, getDimmedTextColor} from '../utils';
import {fillParent} from '../mixins';
import Icon from '../Icon';
import {useTabIndexContext} from '../TabIndexContext';

const EXTEND_TAP_AREA_SPACING = pxToRem(6);

const Wrapper = styled.span`
	position: relative;
	display: inline-flex;
`;

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

	font-size: ${p => (p.scale === 'auto' ? '1em' : pxToRem(20 * p.scale))};

	color: ${p => (p.isChecked ? p.theme.links : p.theme.background)};
	background: ${p => contrast(p.theme.links)};
	border: 1px solid
		${p =>
			alpha(
				p.isChecked ? p.theme.links : p.theme.text,
				p.isChecked ? 1 : 0.5
			)};
	border-radius: ${pxToRem(16)};

	input[disabled] + & {
		opacity: 0.5;

		${p => {
			const textColor = getDimmedTextColor(p.theme);
			return css`
				color: ${p =>
					p.isChecked ? p.theme.background : p.theme.background};
				border: none;
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

const RadioButton = forwardRef((props, ref) => {
	const {
		checked,
		onChange,
		onClick,
		scale,
		className,
		tabIndex,
		...otherProps
	} = props;

	const tabIndexContext = useTabIndexContext();

	const isChecked = Boolean(checked);

	return (
		<Wrapper className={className}>
			<Input
				type="radio"
				ref={ref}
				checked={isChecked}
				onChange={onChange}
				onClick={onClick}
				tabIndex={tabIndex || tabIndexContext}
				{...otherProps}
			/>
			<MockBox aria-hidden="true" isChecked={isChecked} scale={scale}>
				<Icon name={'dot'} scale={0.9} />
			</MockBox>
		</Wrapper>
	);
});

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
	scale: 1,
};

RadioButton.propTypes = {
	checked: PropTypes.bool,
	/**
	 * Control the size of the radiobutton by passing in a size multiplier, i.e. `1.5`.
	 * Set to `'auto'` to make the radiobutton scale along with its surrounding text
	 */
	scale: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default RadioButton;
