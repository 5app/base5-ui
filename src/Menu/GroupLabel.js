import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

function GroupLabel({subtitle}) {
	return (
		<Text dimmed bold size="xxs">
			{subtitle}
		</Text>
	);
}

GroupLabel.propTypes = {
	subtitle: PropTypes.string.isRequired,
};

export default GroupLabel;
