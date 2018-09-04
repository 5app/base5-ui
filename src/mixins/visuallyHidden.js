import {css} from 'styled-components';

const visuallyHidden = css`
	position: absolute;
	overflow: hidden;
	width: 1px;
	height: 1px;
	padding: 0;
	clip: rect(0 0 0 0);
	border: 0;
`;

export default visuallyHidden;
