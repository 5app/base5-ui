import styled from 'styled-components';
import PropTypes from 'prop-types';
import {visuallyHidden as visuallyHiddenMixin} from '../mixins';

const VisuallyHidden = styled.span`
	${visuallyHiddenMixin}
`;

VisuallyHidden.propTypes = {
	/**
	 * Change the element rendered by the component. Defaults to `"span"`.
	 */
	as: PropTypes.node,
};

export default VisuallyHidden;
