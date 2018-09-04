import {css} from 'styled-components';

import {alpha} from '../utils/colors';

const border = (dir) => css`
	border-${dir}: 1px solid ${p => alpha(p.theme.shade, p.theme.lineStrength)};
`;

export default border;
