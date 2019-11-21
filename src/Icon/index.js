import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'styled-components';

import {getSpacing} from '../utils/spacing';

import iconMap from './iconMap';

const sizeMap = {
	unscaled: 0,
	default: 1,
	medium: 1.5,
	big: 3,
	huge: 6,
};

const Icon = forwardRef((props, ref) => {
	const {
		name,
		scale,
		size,
		spacingLeft,
		spacingRight,
		theme,
		...otherProps
	} = props;

	const Glyph = iconMap[name] || iconMap.x;
	const hasScale = scale !== null && scale !== undefined;

	return (
		<Glyph
			ref={ref}
			scale={hasScale ? scale : sizeMap[size]}
			spacingLeft={getSpacing(spacingLeft, theme)}
			spacingRight={getSpacing(spacingRight, theme)}
			{...otherProps}
		/>
	);
});

Icon.displayName = 'Icon';

Icon.defaultProps = {
	scale: 1,
};

Icon.propTypes = {
	/**
	 * Display the icon in any valid CSS color. By default, icons
	 * use the colour of their containing element (`currentColor`).
	 */
	color: PropTypes.string,
	/**
	 * Name of the icon you want to use.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * By default, icons are sized at 1em, scaling along with their surrounding text.
	 * The scale prop lets you define a scaling factor to size the icon, i.e. a value
	 * of 2 will make the icon twice as large.
	 * Set this to `0` (number zero) to display the icon at its original size.
	 */
	scale: PropTypes.number,
	/**
	 * Legacy preset values for the `scale` prop.
	 */
	size: PropTypes.oneOf(['unscaled', 'default', 'medium', 'big', 'huge']),
	spacingLeft: PropTypes.string,
	spacingRight: PropTypes.string,
	/**
	 * Nudge the icon up by a bit to visually align it with its
	 * surrounding text.
	 */
	vAlign: PropTypes.bool,
};

// @component
export default withTheme(Icon);
