import React, {forwardRef, useContext, useLayoutEffect, useState} from 'react';

import {ModalStackContext} from './ModalManager';

function useScrollLockStyles({isLocked}) {
	const [originalScrollPos, setOriginalScrollPos] = useState(null);

	useLayoutEffect(() => {
		if (isLocked && originalScrollPos === null) {
			// Store current scroll position
			setOriginalScrollPos(
				document.body.scrollTop || document.documentElement.scrollTop
			);
		} else if (originalScrollPos !== null) {
			// Restore original scroll position
			document.documentElement.scrollTop = document.body.scrollTop = originalScrollPos;
			setOriginalScrollPos(null);
		}
		// We only want the hook to run when `isLocked` changes,
		// adding `originalScrollPos` would cause an infinite loop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLocked]);

	if (isLocked && originalScrollPos !== null) {
		return {
			position: 'fixed',
			top: `-${originalScrollPos}px`,
			width: '100%',
		};
	}

	return undefined;
}

const BodyScrollLock = forwardRef((props, ref) => {
	const {as: Component = 'div', children, style, ...otherProps} = props;
	const modalStack = useContext(ModalStackContext);
	const hasModal = Boolean(modalStack?.length);
	const bodyLockStyles = useScrollLockStyles({isLocked: hasModal});

	return (
		<Component
			ref={ref}
			style={style ? {...style, ...bodyLockStyles} : bodyLockStyles}
			{...otherProps}
		>
			{children}
		</Component>
	);
});

BodyScrollLock.displayName = 'BodyScrollLock';

export {BodyScrollLock, useScrollLockStyles};
