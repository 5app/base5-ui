import React from 'react';
import PropTypes from 'prop-types';
import useBackButton from './useBackButton';
import BackButtonProvider from './BackButtonProvider';

import ButtonCore from '../ButtonCore';

function BackButton({
	baseComponent: Component,
	as,
	onClick,
	onGoBack,
	...otherProps
}) {
	const hasHistory = useBackButton();

	function goBack(e) {
		e.preventDefault;
		onGoBack ? onGoBack() : history.back();
		if (onClick) onClick(e);
	}

	if (hasHistory) {
		return <Component as="button" onClick={goBack} {...otherProps} />;
	}
	return <Component as={as} onClick={onClick} {...otherProps} />;
}

BackButton.defaultProps = {
	baseComponent: ButtonCore,
};

BackButton.propTypes = {
	/**
	 * The base component to use, i.e. Button or TextLink.
	 * This component **must** support the `as` prop for
	 * changing the underlying rendered element
	 */
	baseComponent: PropTypes.elementType,
	/**
	 * By default, `window.history.back` is triggered when
	 * a history is available. Use this prop to provide
	 * another function, e.g. react-router's `history.goBack`
	 */
	onGoBack: PropTypes.func,
};

export {BackButtonProvider};

// @component
export default BackButton;
