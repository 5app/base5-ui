import React from 'react';

import Box from '../Box';

function Divider(props) {
	return <Box {...props} height="1px" width="100%" background="border" />;
}

Divider.displayName = 'Divider';

export default Divider;
