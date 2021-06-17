import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import ThemedBox from '../ThemedBox';

const variantProps = {
	default: {
		boxShadow: 'soft',
		name: 'card',
	},
	raised: {
		border: 'thin',
		boxShadow: 'raised',
		name: 'card',
	},
	inverted: {
		boxShadow: 'soft',
		name: 'invertedCard',
	},
};

export const VALID_VARIANT_PROPS = Object.keys(variantProps);
export const VALID_SIZE_PROPS = ['small', 'large'];

const Card = forwardRef(({variant, size, ...otherProps}, ref) => {
	return (
		<ThemedBox
			ref={ref}
			width="100%"
			overflow="hidden"
			{...otherProps}
			borderRadius={size}
			{...variantProps[variant]}
		/>
	);
});

Card.displayName = 'Card';

Card.defaultProps = {
	variant: 'default',
	size: 'large',
};

Card.propTypes = {
	/**
	 * Controls the card's visual appearance
	 */
	variant: PropTypes.oneOf(VALID_VARIANT_PROPS),
	/**
	 * Controls the card's border radius, as defined in the global theme.
	 * In some themes (when border radiuses are disabled), this may not
	 * make a visible difference
	 */
	size: PropTypes.oneOf(VALID_SIZE_PROPS),
};

export default Card;
