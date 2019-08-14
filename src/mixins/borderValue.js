import {alpha} from '../utils/colors';

function borderValue(theme) {
	return `1px solid ${alpha(theme.shade, theme.lineStrength)}`;
}

export default borderValue;
