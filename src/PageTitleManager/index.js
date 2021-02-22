import React from 'react';
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

export {
	PageTitle,
	PageTitleAnnouncer,
	usePageTitleAnnouncer,
	DocumentTitleProvider,
	useSetDocumentTitle,
};

export default PageTitleManager;
