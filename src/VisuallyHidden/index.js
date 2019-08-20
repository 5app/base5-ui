import styled from 'styled-components';
import {visuallyHidden as visuallyHiddenMixin} from '../mixins';

const VisuallyHidden = styled.span`
	${visuallyHiddenMixin}
`;

export default VisuallyHidden;
