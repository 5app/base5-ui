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
		[name: string]: string | ((LocalThemeSection) => string);
	};
	readonly shadowStyles: {
		[name: string]: string | ((LocalThemeSection) => string);
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

export interface LocalThemeSection extends ConfigThemeSection {
	globals: ThemeGlobals;
	currentThemeSectionName?: string;
	parentThemeSectionName?: string;
	parent?: ConfigThemeSection;
}

export interface StyledComponentProps {
	theme: LocalThemeSection;
	[prop: string]: unknown;
}
