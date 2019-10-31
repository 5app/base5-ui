import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

import truncateText from '../utils/truncateText';
import TextLink from '../TextLink';

function ViewMoreText(props) {
	const {
		content,
		truncateBy = 110,
		viewMoreLabel = 'View more',
		viewLessLabel = 'View less',
	} = props;

	const [showMore, setShowmore] = useState(false);

	function toggleShowMore() {
		setShowmore(prevState => !prevState);
	}

	const shouldTextBeTruncated = content && content.length > truncateBy;

	return (
		<Fragment>
			{truncateText(content, showMore ? null : truncateBy)}{' '}
			{shouldTextBeTruncated && (
				<TextLink as="button" onClick={toggleShowMore}>
					{showMore ? viewLessLabel : viewMoreLabel}
				</TextLink>
			)}
		</Fragment>
	);
}

ViewMoreText.propTypes = {
	content: PropTypes.string.isRequired,
	truncateBy: PropTypes.number,
	viewMoreLabel: PropTypes.string,
	viewLessLabel: PropTypes.string,
};

// @component
export default ViewMoreText;
