/* Given a popper.js placement string, this function
 * returns a CSS style object containing sensible default
 * styles for the placement string.
 *
 * The values can be customised, but default to:
 * - 100% for the primary direction
 * - 8 pixels for the secondary direction
 *
 * When no secondary direction is defined, styles for centering
 * are returned which can be customised with an offset:
 * `calc(50% + ${centerOffset})`
 *
 * Examples:
 * getArrowPosition('bottom-start') // returns {bottom: '100%', left: 8}
 * getArrowPosition('bottom-start', {defaultSecondaryValue: 4}) // returns {bottom: '100%', left: 4}
 * getArrowPosition('left-end') // returns {left: '100%', bottom: 8}
 * getArrowPosition('right') // returns {right: '100%', top: 50%}
 * getArrowPosition('right', {centerOffset: '-4px'}) // returns {right: '100%', top: calc(50% - 4px)}
 */

function getSecondaryDirection(primary, secondary) {
	if (primary === 'left' || primary === 'right') {
		return secondary === 'end' ? 'bottom' : 'top';
	} else {
		return secondary === 'end' ? 'right' : 'left';
	}
}

export function getPlacements(placement) {
	let primaryPlacement = placement;
	let secondaryPlacement;
	if (placement.indexOf('-') > -1) {
		[primaryPlacement, secondaryPlacement] = placement.split('-');
	}
	return [primaryPlacement, secondaryPlacement];
}

function getArrowPosition(
	placement,
	{defaultPrimaryValue = '100%', defaultSecondaryValue = 8, centerOffset}
) {
	const [primaryPlacement, secondaryPlacement] = getPlacements(placement);

	return {
		[primaryPlacement]: defaultPrimaryValue,
		[getSecondaryDirection(secondaryPlacement)]: secondaryPlacement
			? defaultSecondaryValue
			: centerOffset
			? `calc(50% + ${centerOffset})`
			: '50%',
	};
}

export default getArrowPosition;
