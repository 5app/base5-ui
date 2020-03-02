import {getBorderColor} from '../utils/colors';

function borderValue(theme) {
	return `1px solid ${getBorderColor(theme)}`;
}

export default borderValue;
