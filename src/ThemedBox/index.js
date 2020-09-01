import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import ThemeSection from '../ThemeSection';

const ThemedBox = forwardRef(
	({name, alternateBackground, children, ...otherProps}, ref) => {
		return (
			<ThemeSection name={name}>
				<Box
					ref={ref}
					{...otherProps}
					color="text"
					backgroundColor={theme =>
						alternateBackground && theme.backgroundAlt
							? theme.backgroundAlt
							: theme.background
					}
				>
					{children}
				</Box>
			</ThemeSection>
		);
	}
);

ThemedBox.displayName = 'ThemedBox';

ThemedBox.propTypes = {
	/** Name of the theme section to use for the themed box */
	name: PropTypes.string.isRequired,
	/** Choose an alternate background colour if one has been defined (key `backgroundAlt`) */
	alternateBackground: PropTypes.bool,
};

// @component
export default ThemedBox;
