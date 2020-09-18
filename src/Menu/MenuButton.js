import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import {MenuContext} from './Menu';

function MenuButton({as: Component = Button, forwardedAs, ...otherProps}) {
	const {menuButtonProps} = useContext(MenuContext);

	return <Component {...otherProps} as={forwardedAs} {...menuButtonProps} />;
}

MenuButton.propTypes = {
	as: PropTypes.elementType,
	forwardedAs: PropTypes.elementType,
	children: PropTypes.node,
	icon: PropTypes.string,
};

// @component
export default MenuButton;
