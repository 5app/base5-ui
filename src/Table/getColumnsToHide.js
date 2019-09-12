import getColumnWidths from './getColumnWidths';

/**
 * Calculates which columns should be hidden at the width
 * available to the table. It tries to fit as many columns
 * as possible given the constraints defined by the column
 * configuration (width & minWidth)
 *
 * @param {Array} columns - Table column configuration
 * @param {number} totalWidth - Total table width
 *
 * @returns {Array} Names of columns that should be hidden at the given width
 */

function getColumnsToHide(columns, totalWidth) {
	if (!totalWidth) return [];

	// Calculate initial column widths if all columns are visible
	const columnWidths = getColumnWidths(columns, totalWidth);

	// Get the initial candidates for hiding (i.e. columns whose
	// calculated width is below their defined `minWidth`)
	const hidingCandidates = columnWidths.filter(column => column.shouldHide);

	// If there's just one candidate, happy days: return it
	if (hidingCandidates.length === 1) {
		return [hidingCandidates[0].name];
	}
	// If there are more, we must determine which ones _could_ fit
	// if only _some_ of the candidates were removed, in order to
	// fit the maximum number of columns
	else if (hidingCandidates.length > 1) {
		// We'll assign a score to each candidate based on how
		// many of the other candidates could be fit if it was hidden
		const candidateScores = hidingCandidates.map(({name}) => {
			// What are our widths if we hide this candidate?
			const widthsWithoutCandidate = getColumnWidths(
				columns.filter(c => c.name !== name),
				totalWidth
			);

			// Get all candidates excluding the current one to
			// check if it could be made visible now
			const otherCandidates = hidingCandidates
				.filter(candidate => candidate.name !== name)
				.map(candidate => candidate.name);

			let score = 0;
			otherCandidates.forEach(otherCandidateName => {
				const otherCandidate = widthsWithoutCandidate.find(
					item => item.name === otherCandidateName
				);
				// Increase the score of this 'other candidate' if hiding
				// the 'current candidate' has given it enough space
				// to be made visible again
				if (otherCandidate.shouldHide === false) {
					score += 1;
				}
			});
			return {
				name,
				score,
			};
		});

		// Once we know the scores, we can group the candidates into 'final
		// candidates' with a high score which should be hidden immediately
		// (because hiding them creates a lot of room for other candidates)
		// and those where hiding them doesn't change much, in which case
		// we'll give them another pass, this time with the final
		// candidates already out of the picture.
		const finalCandidates = [];
		const remainingCandidates = [];
		// Set the threshold at the lowest score found.
		// Anything higher we consider a final candidate
		const lowestScore = Math.min(
			...candidateScores.map(item => item.score)
		);

		candidateScores.forEach(item => {
			if (item.score > lowestScore) {
				finalCandidates.push(item.name);
			} else {
				remainingCandidates.push(item.name);
			}
		});

		// If there are no candidates with a higher score than others,
		// we simply sacrifice and hide the rightmost candidate.
		// Gotta do _something_ to make those columns fit, otherwise we'd
		// enter an infinite loop!
		if (!finalCandidates.length) {
			finalCandidates.push(remainingCandidates.pop());
		}

		// As long as there are remaining candidates, we recursively call
		// this function with high-scoring candidates removed, until we can
		// fit the highest number of remaining columns.
		if (remainingCandidates.length) {
			const columnsWithoutFinalCandidates = columns.filter(
				column => !finalCandidates.includes(column.name)
			);
			return [
				...finalCandidates,
				...getColumnsToHide(columnsWithoutFinalCandidates, totalWidth),
			];
		} else return finalCandidates;
	}

	// Return an empty array if there's nothing to hide
	return [];
}

export default getColumnsToHide;
