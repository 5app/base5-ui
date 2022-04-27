import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {getBackgroundShade, pxToRem} from '../utils';
import {overflowWrap} from '../mixins';

import ButtonCore from '../ButtonCore';
import Icon from '../Icon';
import {textLinkStyles, textLinkProps} from '../TextLink';
import Divider from '../Divider';
import Text from '../Text';

const Wrapper = styled.div`
	display: block;
	padding: ${p => p.theme.globals.spacing.xs} 0;
	list-style: none;

	font-weight: 400;
	line-height: ${p => p.theme.globals.lineHeight};

	&:empty {
		display: none;
	}

	&:focus {
		outline: none;
	}
`;

const Item = styled.div`
	position: relative;
	display: block;
`;

const Link = styled(ButtonCore)
	.attrs(({isHighlighted}) => ({
		className: isHighlighted ? 'is-highlighted' : '',
	}))
	.withConfig({
		shouldForwardProp: prop =>
			![...textLinkProps, 'isHighlighted'].includes(prop),
	})`
	position: relative;
	display: flex;
	align-items: center;

	width: 100%;
	padding: ${p => p.theme.globals.spacing.xxs}
		${p => p.theme.globals.spacing.s};

	${textLinkStyles}
	${overflowWrap}

	cursor: pointer;
	transition: none;

	&:hover:not(.is-disabled),
	&:focus:not(.is-disabled) {
		color: inherit;
		text-decoration: none;
		background-color: ${p => getBackgroundShade(p.theme)};
		outline: none;
	}

	${Wrapper}[data-focus-visible-added] &&.is-highlighted,
	&[data-focus-visible-added]:focus {
		outline: none;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: ${pxToRem(4)};
			background-color: ${p => p.theme.links};
		}
	}

	${p =>
		p.isHighlighted &&
		css`
			background-color: ${p => getBackgroundShade(p.theme)};
		`}

	&.is-active:not(.is-disabled) {
		font-weight: 600;
	}

	&.is-disabled {
		opacity: 0.5;
		color: inherit;
		text-decoration: none;
		cursor: default;
	}
`;

Link.defaultProps = {
	stealthy: true,
};

Link.propTypes = {
	isActive: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isHighlighted: PropTypes.bool,
};

const IconWrapper = styled.span`
	flex: none;
	vertical-align: middle;
	margin-right: ${p => p.theme.globals.spacing.xs};

	opacity: ${p => p.theme.textDimStrength};

	${Link}:hover:not(.is-disabled) > &&,
	${Link}[data-focus-visible-added]:not(.is-disabled) > &&,
	.is-active:not(.is-disabled) > && {
		opacity: 1;
	}
`;

const ItemIcon = forwardRef((props, ref) => {
	return (
		<IconWrapper>
			<Icon ref={ref} vAlign {...props} />
		</IconWrapper>
	);
});

ItemIcon.displayName = 'ItemIcon';

const ItemDivider = props => {
	return <Divider {...props} my="xs" role="separator" />;
};

ItemDivider.displayName = 'ItemDivider';

const GroupLabel = props => {
	const {children, ...otherProps} = props;

	return (
		<Text
			as="div"
			{...otherProps}
			dimmed
			bold
			size="xxs"
			mx="s"
			mb="xxs"
			lineHeight={1.2}
		>
			{children}
		</Text>
	);
};

GroupLabel.propTypes = {
	children: PropTypes.string.isRequired,
};

export {Wrapper, Item, ItemIcon, Link, ItemDivider, GroupLabel};
