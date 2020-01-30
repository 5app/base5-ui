import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

import truncateText from '../utils/truncateText';
import TextLink from '../TextLink';

function ViewMoreText(props) {
	const {
		content,
		maxLength,
		tolerance,
		viewMoreLabel,
		viewLessLabel,
		...otherProps
	} = props;

	const [showFullText, setShowFullText] = useState(false);

	function toggleShowMore() {
		setShowFullText(prevState => !prevState);
	}

	const contentLength = (content && content.length) || 0;

	const shouldTextBeTruncated = contentLength > maxLength + tolerance;

	return (
		<Fragment>
			{truncateText(
				content,
				!showFullText && shouldTextBeTruncated ? maxLength : null
			)}{' '}
			{shouldTextBeTruncated && (
				<TextLink as="button" {...otherProps} onClick={toggleShowMore}>
					{showFullText ? viewLessLabel : viewMoreLabel}
				</TextLink>
			)}
		</Fragment>
	);
}

ViewMoreText.defaultProps = {
	tolerance: 30,
	viewMoreLabel: 'View more',
	viewLessLabel: 'View less',
};

ViewMoreText.propTypes = {
	/** The text content to be truncated. */
	content: PropTypes.string.isRequired,
	/**
	 * The character count at which the content will be
	 * truncated, and where the 'View more' button will
	 * be displayed.
	 * */
	maxLength: PropTypes.number.isRequired,
	/**
	 * Tolerance for the maxLength value. If truncating
	 * the content would only reduce its length by a number
	 * smaller than this, the full text will be shown instead.
	 * Set to 0 to disable this and make maxLength a hard limit.
	 */
	tolerance: PropTypes.number,
	viewMoreLabel: PropTypes.string,
	viewLessLabel: PropTypes.string,
};

// @component
export default ViewMoreText;
