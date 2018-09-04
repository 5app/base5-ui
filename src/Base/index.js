import React from 'react';
import PropTypes from 'prop-types';

/*
 * Provides a flexible 'as' prop for passing
 * in the component or element to render.
 * Use 'refKey' to specify custom ref props (i.e. 'innerRef')
 */

const Base = React.forwardRef((props, ref) => {
	const {
		as: Component = 'div',
		refKey = 'ref',
		...otherProps
	} = props;

	return (
		<Component {...{[refKey]: ref}} {...otherProps} />
	);
});

Base.propTypes = {
	as: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.object,
	]),
	refKey: PropTypes.string,
};

export default Base;
