const supportedDisplayValues = ['block', 'inline', 'inline-block'];

function displayProps(props) {
	const {display} = props;

	if (!display) return null;

	if (supportedDisplayValues.includes(display)) {
		return {
			display,
		};
	} else {
		console.warn(
			`Only 'block', 'inline', and 'inline-block' are supported for
			the 'display' styling prop. Please use 'base5-ui/Flex' or custom CSS
			for more complex styling.`
		);
	}
}

export default displayProps;
