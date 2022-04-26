import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {GroupLabel} from '../MenuList';

const Wrapper = styled.span`
	width: 100%;
`;

const MenuItemGroup = ({label, id = label, children}) => {
	return (
		<Wrapper aria-labelledby={id} role="group">
			<GroupLabel id={id} role="separator">
				{label}
			</GroupLabel>
			{children}
		</Wrapper>
	);
};

MenuItemGroup.propTypes = {
	/**
	 * Define the content of the menu item group
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Define a label for the menu item group
	 */
	label: PropTypes.string.isRequired,
	/**
	 *Define an id for the menu item group
	 */
	id: PropTypes.string.isRequired,
};

export default MenuItemGroup;
