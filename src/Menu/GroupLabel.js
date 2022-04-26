import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text';

const Wrapper = styled.div`
	margin: ${p => p.theme.globals.spacing.xxs}
		${p => p.theme.globals.spacing.s};
`;
function GroupLabel({children}) {
	return (
		<Wrapper>
			<Text dimmed bold size="xxs">
				{children}
			</Text>
		</Wrapper>
	);
}

GroupLabel.propTypes = {
	children: PropTypes.string.isRequired,
};

export default GroupLabel;
