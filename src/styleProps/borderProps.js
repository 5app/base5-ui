import {checkTheme} from '../utils/styleProps';

import {borderValue} from '../mixins';

const borderKeys = {
	top: 'borderTop',
	left: 'borderLeft',
	bottom: 'borderBottom',
	right: 'borderRight',
};

function borderProps(props) {
	const {border, theme} = props;

	checkTheme(theme);

	if (!borderKeys[border]) {
		return null;
	}

	return {
		[borderKeys[border]]: borderValue(theme),
	};
}

export default borderProps;
