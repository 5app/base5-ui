import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import * as MenuListUI from '../MenuList';
import Box from '../Box';
import PopoverCard from '../PopoverCard';

import {ComboboxContext} from './Combobox';

function ComboboxMenu({children, 'aria-label': ariaLabel}) {
	const {popover, itemList, statusMessage, shouldShowStatusMessage} =
		useContext(ComboboxContext);

	return (
		<PopoverCard
			renderInPlace
			renderWhenClosed
			isOpen={popover.isOpen}
			{...popover.props}
			ref={popover.setRef}
			arrow={popover.arrow}
			onUpdatePopover={popover.update}
		>
			{shouldShowStatusMessage ? (
				<Box px="s" py="xs">
					{statusMessage}
				</Box>
			) : (
				<MenuListUI.Wrapper
					role="listbox"
					aria-label={ariaLabel}
					id={itemList.listId}
					tabIndex="-1"
				>
					{children}
				</MenuListUI.Wrapper>
			)}
		</PopoverCard>
	);
}

ComboboxMenu.propTypes = {
	/**
	 * A label describing the contents of the dropdown list
	 */
	'aria-label': PropTypes.string.isRequired,
};

export default ComboboxMenu;
