import {InterpolationFunction, CSSObject} from 'styled-components';
import {ThemeSectionError} from '../ThemeSection';
import {LocalThemeSection, StyledComponentProps} from '../theme/types';

interface SimplePropDefinition {
	/** Name of the style prop */
	styleProp: string;
	/** Transforms the prop value into a valid CSS property value. */
	getValue: (
		val: unknown,
		theme: LocalThemeSection
	) => string | number | undefined;
	/** The CSS properties that the value should be applied to.
	 * Will default to [styleProp] if not specified */
	properties?: string[];
}

interface AdvancedPropDefinition {
	/** Name of the style prop */
	styleProp: string;
	/** Use this instead of getValue to define more complex style props that
	 * generate multiple CSS rules.
	 * Will be called with any value, so you have to make sure to return a falsy
	 * value if you don't want to add rules. */
	getRules: (prop: unknown, theme: LocalThemeSection) => CSSObject;
}

type StylePropDefinition = SimplePropDefinition | AdvancedPropDefinition;

/**
 * Throw an error if no theme is defined
 */

function checkTheme(theme: LocalThemeSection): void | never {
	if (!theme?.globals) {
		throw new ThemeSectionError();
	}
}

/**
 * Retrieve a responsive style prop's value.
 * If prop is not an array, it means it's not responsive and only needs to be
 * set at the base breakpoint (i.e. index === 0), so we return undefined for
 * any index larger than 0.
 */

function getValueByIndex<PropValue>(
	prop: PropValue | PropValue[],
	index = 0
): PropValue | undefined {
	if (Array.isArray(prop)) {
		return prop[index];
	}
	if (index > 0) {
		return undefined;
	}
	return prop;
}

function getStylePropRules(
	// Style prop configuration objects
	stylePropConfig: StylePropDefinition[],
	// Props that the component was called with
	componentProps: StyledComponentProps,
	// If the passed prop is an array of responsive values, this
	// number tells us which value to pick from the array
	breakpointIndex: number
) {
	const rules: CSSObject = {};
	stylePropConfig.forEach((entry: StylePropDefinition) => {
		let styleProp = componentProps[entry.styleProp];
		if (styleProp && typeof styleProp === 'function') {
			styleProp = styleProp(componentProps.theme);
		}
		const stylePropValue = getValueByIndex(styleProp, breakpointIndex);

		if (
			'getRules' in entry &&
			typeof entry.getRules === 'function' &&
			stylePropValue !== undefined
		) {
			const rulesToAdd = entry.getRules(
				stylePropValue,
				componentProps.theme
			);
			if (rulesToAdd) {
				Object.assign(rules, rulesToAdd);
			}
		} else {
			if (
				'getValue' in entry &&
				stylePropValue !== undefined &&
				stylePropValue !== null
			) {
				const props = entry.properties || [entry.styleProp];
				props.forEach(prop => {
					rules[prop] = entry.getValue(
						stylePropValue,
						componentProps.theme
					);
				});
			}
		}
	});
	return rules;
}

function getResponsiveRules(
	stylePropConfig: StylePropDefinition[],
	componentProps: StyledComponentProps
) {
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
 * Takes a style prop definition and creates a style prop function that
 * can be used directly in a styled component, e.g.
 * ```
 * const MyLink = styled.a`
 *   ${myStyleProp}
 * `
 * ```
 */

function createStyleFunction(
	stylePropConfig: StylePropDefinition[],
	baseRules?: CSSObject
): InterpolationFunction<StyledComponentProps> {
	return function styleFunction(props: StyledComponentProps) {
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

/**
 * Returns the names (keys) of all style props in a styleProp config array
 */

function getPropNamesFromPropDefinition(
	propDefinition: StylePropDefinition[]
): string[] {
	return ['breakpoints', ...propDefinition.map(propDef => propDef.styleProp)];
}

/**
 * Returns a `shouldForwardProp` function to be used in styled-components
 * to prevent any custom props from ending up in the DOM
 */

function getPropFilter(
	propNames: string[]
): (prop: string | number) => boolean {
	const propsToFilter = new Set(propNames);

	return function shouldForwardProp(prop: string | number): boolean {
		let key = prop;
		if (typeof key === 'number') {
			key = prop.toString();
		}
		return !propsToFilter.has(key);
	};
}

export {
	checkTheme,
	createStyleFunction,
	getPropFilter,
	getPropNamesFromPropDefinition,
};
