import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import {NavMenuContext} from './NavMenu';

function NavMenuButton({as: Component = Button, forwardedAs, ...otherProps}) {
	const {menuButtonProps} = useContext(NavMenuContext);

	return <Component {...otherProps} as={forwardedAs} {...menuButtonProps} />;
}

NavMenuButton.propTypes = {
	as: PropTypes.elementType,
	forwardedAs: PropTypes.elementType,
	children: PropTypes.node,
	icon: PropTypes.string,
};

export default NavMenuButton;
