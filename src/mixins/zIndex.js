import {css} from 'styled-components';

const zIndex = css`
	z-index: ${p => p.theme.globals.z[p.z]};
`;

export default zIndex;
