import {ThemeSectionError} from '../ThemeSection';

function checkTheme(theme) {
	if (!theme || !theme.globals) {
		throw new ThemeSectionError();
	}
}

/**
 * Retrieve a responsive style prop's value.
 * If prop is not an array, return raw value
 *
 * @param {string|number|Array} prop - Prop passed to the component
 * @param {number} index - index used to retrieve value if prop is an array
 */

function getValueByIndex(prop, index = 0) {
	if (Array.isArray(prop)) {
		return prop[index];
	}
	if (index > 0) {
		return undefined;
	}
	return prop;
}

/**
 * Builds a CSS ruleset based on the props passed to the component.
 *
 * @param {object[]} stylePropConfig - Style prop configuration objects
 * @param {string} stylePropConfig[].styleProp - Name of the style prop
 * @param {Array|Function} stylePropConfig[].properties - Array of the CSS properties
 * to set, or a function to create such an array
 * @param {Function} stylePropConfig[].getValue - Transforms the prop value into a
 * valid CSS property value
 * @param {object} passedProps
 * @param {number} breakpointIndex
 */

function getStylePropRules(stylePropConfig, passedProps, breakpointIndex) {
	const rules = {};
	stylePropConfig.forEach(
		({styleProp: stylePropKey, properties, getValue, getRules}) => {
			const styleProp = getValueByIndex(
				passedProps[stylePropKey],
				breakpointIndex
			);

			if (typeof getRules === 'function') {
				Object.assign(rules, getRules(styleProp, passedProps.theme));
			} else {
				const definedProps =
					typeof properties === 'function'
						? properties(styleProp)
						: properties;
				if (styleProp !== undefined || styleProp !== null) {
					definedProps.forEach(prop => {
						rules[prop] = getValue(styleProp, passedProps.theme);
					});
				}
			}
		}
	);
	return rules;
}

function getResponsiveRules(stylePropConfig, passedProps) {
	// Get baseline styles
	const rules = getStylePropRules(stylePropConfig, passedProps, 0);

	const {breakpoints} = passedProps;
	if (!breakpoints) {
		return rules;
	}

	// If any breakpoints exist, add them to the rule set
	const bps = Array.isArray(breakpoints) ? breakpoints : [breakpoints];
	bps.forEach((breakpoint, index) => {
		const breakpointWidth =
			passedProps.theme.globals.breakpoints[breakpoint] || breakpoint;
		const breakpointQuery = `@media screen and (min-width: ${breakpointWidth})`;
		rules[breakpointQuery] = getStylePropRules(
			stylePropConfig,
			passedProps,
			index + 1
		);
	});

	return rules;
}

/**
 * Generates a style prop function that can be used directly in a styled
 * component, e.g.
 * ```
 * const MyLink = styled.a`
 *   ${myStyleProp}
 * `
 * ```
 *
 * @param {object[]} stylePropConfig - Style prop configuration objects
 * @param {string} stylePropConfig[].styleProp - Name of the style prop
 * @param {Array|Function} stylePropConfig[].properties - Array of the CSS properties
 * to set, or a function to create such an array
 * @param {Function} stylePropConfig[].getValue - Transforms the prop value into a
 * valid CSS property value
 */

function createStyleFunction(stylePropConfig) {
	return function styleFunction(props) {
		checkTheme(props.theme);
		const rules = getResponsiveRules(stylePropConfig, props);
		return rules;
	};
}

export {checkTheme, createStyleFunction};
