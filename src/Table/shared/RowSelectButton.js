import React, {forwardRef} from 'react';
import styled from 'styled-components';
import ButtonCore from '../../ButtonCore';
import {pxToRem} from '../../utils';
import VisuallyHidden from '../../VisuallyHidden';

const ButtonWrapper = styled(ButtonCore)`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: ${pxToRem(4)};
	background-color: ${p => p.theme.links};
	opacity: 0;

	&:focus {
		outline: none;
	}

	tr[aria-selected='true'] & {
		opacity: 1;
	}

	tr[data-highlighted] &.focus-visible {
		opacity: 1;
	}
`;

const RowSelectButton = forwardRef(({children, ...otherProps}, ref) => {
	return (
		<ButtonWrapper ref={ref} {...otherProps}>
			<VisuallyHidden>{children}</VisuallyHidden>
		</ButtonWrapper>
	);
});

RowSelectButton.displayName = 'RowSelectButton';

export default RowSelectButton;
