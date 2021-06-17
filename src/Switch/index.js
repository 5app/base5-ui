import React, {forwardRef, useRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {alpha, contrast, getDimmedTextColor, pxToRem} from '../utils';

import useMergedRefs from '../useMergedRefs';
import OkIcon from '../icons/Ok';

const Input = styled.input`
	position: absolute;
	opacity: 0;
`;

const Wrapper = styled.span`
	position: relative;
	display: inline-block;
	width: 2.4rem;
	height: 1.4rem;
	padding: ${pxToRem(2)};

	border: 1px solid ${p => alpha(p.theme.shade, 0.3)};
	border-radius: 1.4rem;

	transition: all 250ms linear;
	box-sizing: border-box;

	${p =>
		!p.disabled &&
		css`
			&:focus-within,
			&:hover {
				background: ${p => alpha(p.theme.shade, p.theme.shadeStrength)};
			}
		`}

	&:focus-within {
		border-color: ${p => p.theme.links};
	}
`;

const Handle = styled.span`
	display: flex;
	height: 100%;
	width: 50%;
	border-radius: 100%;
	overflow: hidden;

	color: ${p => contrast(p.theme.links)};
	background-color: ${p => getDimmedTextColor(p.theme)};

	will-change: transform;
	transition: transform 150ms ease-out;

	input:checked + & {
		background-color: ${p => p.theme.links};
		transform: translateX(100%);
	}

	input:disabled + & {
		opacity: 0.5;
	}
`;

const SwitchIcon = styled(OkIcon)`
	position: relative;
	top: ${pxToRem(1)};
	left: ${pxToRem(1)};

	opacity: 0;
	transform: translateY(-100%) rotate(45deg);
	will-change: transform, opacity;
	transition: transform 0s linear 150ms, opacity 100ms linear;

	${p =>
		p.checked &&
		css`
			opacity: 1;
			transform: none;
			transition: all 100ms ease-out 150ms;
		`}
`;

const Switch = forwardRef(({checked, disabled, id, ...otherProps}, ref) => {
	const inputRef = useRef();
	const mergedRefs = useMergedRefs([ref, inputRef]);

	function forwardClick(e) {
		inputRef.current.click(e);
	}

	return (
		<Wrapper disabled={disabled} onClick={forwardClick}>
			<Input
				type="checkbox"
				ref={mergedRefs}
				id={id}
				checked={checked}
				disabled={disabled}
				{...otherProps}
			/>
			<Handle>
				<SwitchIcon scale={0.8} checked={checked} />
			</Handle>
		</Wrapper>
	);
});

Switch.displayName = 'Switch';

Switch.propTypes = {
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	id: PropTypes.string.isRequired,
};

export default Switch;
