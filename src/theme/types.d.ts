export type ThemeColor = string;

export type OpacityValue = number;

export interface ButtonColors {
	readonly text: ThemeColor;
	readonly background: ThemeColor;
}

export interface ThemeConfig {
	readonly globals: ThemeGlobals;
	readonly sections: {
		[name: string]: ConfigThemeSection;
	};
}

export interface ThemeGlobals {
	readonly fontSize: number;
	readonly lineHeight?: number;
	readonly maxPageWidth?: number;
	readonly breakpoints: {
		[breakpoint: string]: string | number;
	};
	readonly typeScale: {
		[fontSize: string]: string;
	};
	readonly spacing: {
		[value: string]: string | number;
	};
	readonly z: {
		[level: string]: number;
	};
	readonly buttons: {
		default: ButtonColors;
		primary: ButtonColors;
		important: ButtonColors;
	};
	readonly borderRadius: {
		small: number;
		large: number;
		buttons: number;
		search?: number;
	};
	readonly borderStyles: {
		[name: string]: string | ((themeSection: LocalThemeSection) => string);
	};
	readonly shadowStyles: {
		[name: string]: string | ((themeSection: LocalThemeSection) => string);
	};
	readonly modalWidths: {
		[value: string]: string | number;
	};
	readonly colorBlocks: {
		[name: string]: ThemeColor;
	};
}

export interface ConfigThemeSection {
	readonly text: ThemeColor;
	readonly background: ThemeColor;
	readonly links: ThemeColor;
	readonly shade: ThemeColor;
	readonly highlight: ThemeColor;
	readonly textDimStrength: OpacityValue;
	readonly shadeStrength: OpacityValue;
	readonly lineStrength: OpacityValue;
}

export interface LocalThemeSection extends ThemeConfig, ConfigThemeSection {
	readonly currentThemeSectionName?: string;
	readonly parentThemeSectionName?: string;
	readonly parent?: ConfigThemeSection;
}

export interface StyledComponentProps {
	readonly theme: LocalThemeSection;
	readonly [prop: string]: unknown;
}
