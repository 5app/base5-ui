import React from 'react';

const Link = ({to, children, ...otherProps}) => (
	<a {...otherProps} href={to}>
		{children}
	</a>
);

export default Link;
