import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useMergedRefs from '../useMergedRefs';
import {visuallyHidden} from '../mixins';

import {usePageTitleAnnouncer} from './PageTitleAnnouncer';
import {useSetDocumentTitle} from './DocumentTitleProvider';

const Heading = styled.h1.withConfig({
	shouldForwardProp: prop => prop !== 'visuallyHidden',
})`
	${p => p.visuallyHidden && visuallyHidden}
	/*
	 * Normally the following is an a11y anti-pattern, but since headings
	 * aren't interactive and we're trying to mimick the navigation behaviour
	 * of non-SPAs that also don't have a visible outline on navigation,
	 * this should be acceptable.
	 */
	&:focus {
		outline: none;
	}
`;

const PageTitle = forwardRef((props, ref) => {
	const {text, visuallyHidden, children, ...otherProps} = props;
	const areChildrenText = typeof children === 'string';
	const pageTitle = (areChildrenText ? children : text) || '';

	const pageTitleRef = usePageTitleAnnouncer(pageTitle);
	const mergedRefs = useMergedRefs([ref, pageTitleRef]);

	useSetDocumentTitle(pageTitle);

	if (!areChildrenText && text === undefined) {
		console.warn(
			'PageTitle: Type of the "children" prop is not string. Please provide a string-only label to the PageTitle component via the "text" prop.',
			children
		);
	}

	return (
		<Heading
			{...otherProps}
			visuallyHidden={visuallyHidden}
			tabIndex={-1}
			ref={mergedRefs}
		>
			{children}
		</Heading>
	);
});

PageTitle.displayName = 'PageTitle';

PageTitle.defaultProps = {
	as: 'h1',
	visuallyHidden: false,
};

PageTitle.propTypes = {
	/**
	 * Change the underlying element/component that is rendered.
	 */
	as: PropTypes.elementType,
	/**
	 * Hide the component visually, so that it will only be
	 * announced to screen reader users.
	 */
	visuallyHidden: PropTypes.bool,
	/**
	 * If the children prop's type is more complex than a simple
	 * string, pass a string version of the title to this prop.
	 */
	text: PropTypes.string,
};

// @component
export default PageTitle;
