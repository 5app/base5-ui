import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useMergedRefs from '../useMergedRefs';
import {visuallyHidden} from '../mixins';

import {usePageTitleAnnouncer} from './PageTitleAnnouncer';

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
	const {
		deferAnnouncementWhile,
		visuallyHidden,
		children,
		...otherProps
	} = props;
	const pageTitleRef = usePageTitleAnnouncer({deferAnnouncementWhile});
	const mergedRefs = useMergedRefs([ref, pageTitleRef]);

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
	 * When this is passed a truthy value, DOM focus will not be
	 * moved to the PageTitle. Focus will be set as soon as it
	 * resolves to `false`.
	 * Use this to delay the screen reader announcement until e.g.
	 * the data needed to render the page title has been loaded.
	 */
	deferAnnouncementWhile: PropTypes.bool,
};

// @component
export default PageTitle;
