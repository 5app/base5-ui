import React from 'react';
import PropTypes from 'prop-types';
import {PageTitleAnnouncer, usePageTitleAnnouncer} from './PageTitleAnnouncer';
import PageTitle from './PageTitle';
import {
	DocumentTitleProvider,
	useSetDocumentTitle,
} from './DocumentTitleProvider';

function PageTitleManager({
	pathname,
	baseTitle,
	syncDocumentTitle = false,
	children,
}) {
	return (
		<DocumentTitleProvider
			baseTitle={baseTitle}
			isDisabled={!syncDocumentTitle}
		>
			<PageTitleAnnouncer pathname={pathname}>
				{children}
			</PageTitleAnnouncer>
		</DocumentTitleProvider>
	);
}

PageTitleManager.propTypes = {
	/**
	 * Signal the page manager that a client-side navigation occured
	 * by passing in a string that changes on navigation
	 */
	pathname: PropTypes.string.isRequired,
	/**
	 * String that will be added to the end of the document title,
	 * usually the app's name
	 */
	baseTitle: PropTypes.string,
	/**
	 * Enable updating the page title displayed in the browser when
	 * it changes
	 */
	syncDocumentTitle: PropTypes.bool,
};

export {
	PageTitle,
	PageTitleAnnouncer,
	usePageTitleAnnouncer,
	DocumentTitleProvider,
	useSetDocumentTitle,
};

export default PageTitleManager;
