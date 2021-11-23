import React, {ReactNode} from 'react';

function hasReactChildren(children: ReactNode): boolean {
	if (!children) {
		return false;
	}

	const childrenCount =
		React.Children.toArray(children).filter(Boolean).length;

	return childrenCount > 0;
}

export default hasReactChildren;
