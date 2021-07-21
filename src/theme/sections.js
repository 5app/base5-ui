import colors from './colors';

const commonProps = {
	highlight: colors.pink,
	textDimStrength: 0.75,
	shadeStrength: 0.08,
	lineStrength: 0.2,
};

const sections = {
	page: {
		text: colors.darkGrey,
		background: colors.lightGrey,
		links: colors.blue,
		shade: colors.black,
		...commonProps,
	},
	card: {
		text: colors.darkGrey,
		background: colors.white,
		backgroundAlt: colors.lightGrey,
		links: colors.blue,
		shade: colors.black,
		...commonProps,
	},
	invertedCard: {
		text: colors.white,
		background: colors.darkGrey,
		links: colors.babyBlue,
		shade: colors.white,
		...commonProps,
		shadeStrength: 0.12,
	},
	colorBlock: {
		text: colors.white,
		background: colors.grey,
		links: colors.white,
		shade: colors.black,
		...commonProps,
	},
};

export default sections;
