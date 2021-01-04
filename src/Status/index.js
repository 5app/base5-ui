import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

const Status = forwardRef((props, ref) => {
	const {role, atomic, 'aria-live': ariaLive, ...otherProps} = props;
	const ariaLiveDefault = role === 'alert' ? 'assertive' : 'polite';

	return (
		<Box
			ref={ref}
			{...otherProps}
			role={role}
			aria-live={ariaLive || ariaLiveDefault}
			aria-atomic={atomic ? 'true' : props['aria-atomic']}
		/>
	);
});

Status.defaultProps = {
	role: 'status',
};

Status.displayName = 'Status';

Status.propTypes = {
	atomic: PropTypes.bool,
	role: PropTypes.oneOf(['alert', 'status', 'log']),
	'aria-live': PropTypes.oneOf(['polite', 'assertive']),
	'aria-relevant': PropTypes.string,
};

// @component
export default Status;
