import {isValidColor, isDark, getColorBlock} from '../utils/colors';
import {ConfigThemeSection, LocalThemeSection} from '../theme/types';

/**
 * `getThemeSection` covers three main cases:
 *
 * 1. When the `name` it's called with is the name of a theme section
 * (as defined in theme.sections), it will simply return that section
 * object.
 *
 * 2. When `name` is the name of a colorBlock (as defined in
 * theme.globals.colorBlocks), a new section object is generated
 * based on the colorBlock's color value, which will be used as the
 * section's background colour. Contrasting foreground colours will be
 * generated.
 *
 * 3. When the `withBackgroundImage` option is enabled, a new section object
 * is generated that's specifically geared for ensuring readability of text
 * on background images. With this option enabled, only the `background`
 * will be based on the passed-in `name` property (i.e. the theme section
 * or color block), all other values will be hard-coded.
 */

interface SectionGetterOptions {
	theme: LocalThemeSection;
	name: string;
	withBackgroundImage?: boolean;
}

function getThemeSection({
	theme,
	name,
	withBackgroundImage,
}: SectionGetterOptions): ConfigThemeSection {
	// If the passed in name isn't the name of a section,
	// we treat it as a "color block"
	const isThemeSection = Boolean(theme.sections?.[name]);

	const localThemeSection = isThemeSection
		? theme.sections[name]
		: theme.sections[theme.currentThemeSectionName];

	if (withBackgroundImage) {
		let background = localThemeSection?.background || 'grey';
		if (!isThemeSection) {
			const colorBlockBackground = getColorBlock(name, theme);
			if (isValidColor(colorBlockBackground)) {
				background = colorBlockBackground;
			}
		}
		return {
			...localThemeSection,
			text: 'white',
			links: 'white',
			background,
			shade: 'black',
			textDimStrength: 0.8,
			shadeStrength: 0.6,
			lineStrength: 0.8,
		};
	}

	if (isThemeSection) {
		return localThemeSection;
	}

	// If we haven't returned yet, this must be a color block
	// and we need to dynamically construct a readable section
	const background = getColorBlock(name, theme);

	if (!isValidColor(background)) {
		return localThemeSection;
	}

	const [contrastingText, contrastingShade] = isDark(background)
		? ['white', 'black']
		: ['black', 'white'];

	return {
		...localThemeSection,
		text: contrastingText,
		links: contrastingText,
		shade: contrastingShade,
		background,
	};
}

export default getThemeSection;
