import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import * as MenuListUI from '../MenuList';
import PopoverCard from '../PopoverCard';

import {NavMenuContext} from './NavMenu';

function NavMenuList({children}) {
	const {popover, itemList} = useContext(NavMenuContext);

	return (
		<PopoverCard
			renderInPlace
			renderWhenClosed
			isOpen={popover.isOpen}
			{...popover.props}
			ref={popover.setRef}
			id={itemList.listId}
			arrow={popover.arrow}
			onUpdatePopover={popover.update}
		>
			<MenuListUI.Wrapper>{children}</MenuListUI.Wrapper>
		</PopoverCard>
	);
}

NavMenuList.propTypes = {
	children: PropTypes.node,
};

export default NavMenuList;
