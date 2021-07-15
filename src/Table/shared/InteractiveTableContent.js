import React from 'react';
import Box from '../../Box';

function stopPropagation(event) {
	event.stopPropagation();
}

function InteractiveTableContent({children, ...otherProps}) {
	return (
		<Box {...otherProps} display="inline-flex" onClick={stopPropagation}>
			{children}
		</Box>
	);
}

export default InteractiveTableContent;
