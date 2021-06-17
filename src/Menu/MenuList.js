import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import * as MenuListUI from '../MenuList';
import PopoverCard from '../PopoverCard';

import {MenuContext} from './Menu';

function MenuList({children}) {
	const {popover, menuListProps} = useContext(MenuContext);

	return (
		<PopoverCard
			renderWhenClosed
			renderInPlace={false}
			isOpen={popover.isOpen}
			{...popover.props}
			ref={popover.setRef}
			arrow={popover.arrow}
			onUpdatePopover={popover.update}
		>
			<MenuListUI.Wrapper {...menuListProps}>
				{children}
			</MenuListUI.Wrapper>
		</PopoverCard>
	);
}

MenuList.propTypes = {
	children: PropTypes.node,
};

export default MenuList;
