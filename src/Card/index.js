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
	variant: PropTypes.oneOf(['default', 'raised', 'inverted']).isRequired,
	size: PropTypes.oneOf(['small', 'large']),
};

// @component
export default Card;
