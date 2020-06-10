import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

const Status = forwardRef((props, ref) => {
	return (
		<Box
			ref={ref}
			role="status"
			aria-live="polite"
			aria-relevant="additions text"
			{...props}
			aria-atomic={props.atomic ? 'true' : props['aria-atomic']}
		/>
	);
});

Status.displayName = 'Status';

Status.propTypes = {
	atomic: PropTypes.bool,
	role: PropTypes.oneOf(['alert', 'status', 'log']),
	'aria-live': PropTypes.oneOf(['polite', 'assertive']),
	'aria-relevant': PropTypes.string,
};

// @component
export default Status;
