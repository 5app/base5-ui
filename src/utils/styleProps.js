import {ThemeSectionError} from '../ThemeSection';

function checkTheme(theme) {
	if (!theme || !theme.globals) {
		throw new ThemeSectionError();
	}
}

/**
 * Retrieve a responsive style prop's value.
 * If prop is not an array, it means it's not responsive and only needs to be
 * set at the base breakpoint (i.e. index === 0), so we return undefined for
 * any index larger than 0.
 *
 * @param {string|number|Array} prop - Prop passed to the component
 * @param {number} index - index used to retrieve value if prop is an array
 *
 * @returns {string|number} - A CSS property value
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
 * @param {Array} stylePropConfig[].properties - The CSS properties that the value should be applied to
 * @param {Function} stylePropConfig[].getValue - Transforms the prop value into a valid CSS property value.
 * This function is only called when the prop's value is not null or undefined.
 * @param {Function} stylePropConfig[].getRules - Use this instead of stylePropConfig.properties and stylePropConfig.getValue to define more complex style props that need to generate multiple CSS rules. Will be called with any value, so you have to make sure to return a falsy value if you don't want to add a rule.
 * @param {object} componentProps - Props that the component was called with
 * @param {number} breakpointIndex - If the passed prop is an array of responsive values, this number tells us which value to pick from the array
 *
 * @returns {object} - A CSS rule set
 */

function getStylePropRules(stylePropConfig, componentProps, breakpointIndex) {
	const rules = {};
	stylePropConfig.forEach(
		({styleProp: stylePropKey, properties, getValue, getRules}) => {
			const styleProp = getValueByIndex(
				componentProps[stylePropKey],
				breakpointIndex
			);

			if (typeof getRules === 'function') {
				const rulesToAdd = getRules(styleProp, componentProps.theme);
				if (rulesToAdd) {
					Object.assign(rules, rulesToAdd);
				}
			} else {
				if (styleProp !== undefined && styleProp !== null) {
					const props = properties || [stylePropKey];
					props.forEach(prop => {
						rules[prop] = getValue(styleProp, componentProps.theme);
					});
				}
			}
		}
	);
	return rules;
}

function getResponsiveRules(stylePropConfig, componentProps) {
	// Get baseline styles
	const rules = getStylePropRules(stylePropConfig, componentProps, 0);

	const {breakpoints} = componentProps;
	if (!breakpoints) {
		return rules;
	}

	// If any breakpoints exist, add them to the rule set
	const bps = Array.isArray(breakpoints) ? breakpoints : [breakpoints];
	bps.forEach((breakpoint, index) => {
		const breakpointWidth =
			componentProps.theme.globals.breakpoints[breakpoint] || breakpoint;
		const breakpointQuery = `@media screen and (min-width: ${breakpointWidth})`;
		rules[breakpointQuery] = getStylePropRules(
			stylePropConfig,
			componentProps,
			index + 1
		);
	});

	return rules;
}

/**
 *
 * @param {object[]} stylePropConfig - Style prop configuration objects
 * @param {string} stylePropConfig[].styleProp - Name of the style prop
 * @param {Array} stylePropConfig[].properties - The CSS properties that the value should be applied to
 * @param {Function} stylePropConfig[].getValue - Transforms the prop value into a valid CSS property value.
 * This function is only called when the prop's value is not null or undefined.
 * @param {Function} stylePropConfig[].getRules - Use this instead of stylePropConfig.properties and stylePropConfig.getValue to define more complex style props that need to generate multiple CSS rules. Will be called with any value, so you have to make sure to return a falsy value if you don't want to add a rule.
 * @param {object} [baseRules] - Any static CSS rules to add before the dynamic styleProp rules
 *
 * @returns {Function} - A responsive style prop function that can be used directly in a styled component, e.g.
 * ```
 * const MyLink = styled.a`
 *   ${myStyleProp}
 * `
 * ```
 */

function createStyleFunction(stylePropConfig, baseRules) {
	return function styleFunction(props) {
		checkTheme(props.theme);
		const rules = getResponsiveRules(stylePropConfig, props);
		if (baseRules) {
			return {
				...baseRules,
				...rules,
			};
		}
		return rules;
	};
}

export {checkTheme, createStyleFunction};
