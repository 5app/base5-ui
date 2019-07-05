import {ThemeSectionError} from '../ThemeSection';

function checkTheme(theme) {
	if (!theme || !theme.globals) {
		throw new ThemeSectionError();
	}
}

export {checkTheme};
