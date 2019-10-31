import styled from 'styled-components';
import {visuallyHidden as visuallyHiddenMixin} from '../mixins';

const VisuallyHidden = styled.span`
	${visuallyHiddenMixin}
`;

// @component
export default VisuallyHidden;
