import React, {forwardRef, useContext, useLayoutEffect, useRef} from 'react';

import {useHasMounted} from '../useHasMounted';

import {ModalStackContext} from './ModalManager';

function useScrollLockStyles({isLocked}) {
	const originalScrollPosition = useRef(null);
	const hasMounted = useHasMounted();
	const scrollTop = hasMounted
		? document.body.scrollTop || document.documentElement.scrollTop
		: null;

	useLayoutEffect(() => {
		// Store last scroll position so it can be restored
		// when the scroll lock is released
		if (isLocked && originalScrollPosition.current === null) {
			originalScrollPosition.current = scrollTop;
			// Restore previous scroll position and re-apply it to
			// document.body
		} else if (originalScrollPosition.current !== null) {
			document.documentElement.scrollTop = document.body.scrollTop =
				originalScrollPosition.current;
			originalScrollPosition.current = null;
		}
	}, [isLocked, scrollTop]);

	if (!isLocked) return undefined;

	return {
		position: 'fixed',
		top: `-${scrollTop}px`,
		width: '100%',
	};
}

function InnerBodyScrollLock(props, ref) {
	const {as: Component = 'div', children, style} = props;
	const modalStack = useContext(ModalStackContext);
	const hasModal = modalStack?.length;
	const bodyLockStyles = useScrollLockStyles({isLocked: hasModal});

	return (
		<Component
			ref={ref}
			style={style ? {...style, ...bodyLockStyles} : bodyLockStyles}
		>
			{children}
		</Component>
	);
}

const BodyScrollLock = forwardRef(InnerBodyScrollLock);

export {BodyScrollLock, useScrollLockStyles};
