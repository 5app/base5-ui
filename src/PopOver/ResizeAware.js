import React, {useEffect, useRef} from 'react';
import {useSize} from 'react-hook-size';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {fillParent} from '../mixins';

const Measurer = styled.div`
	${fillParent}

	opacity: 0;
	overflow: hidden;
	pointer-events: none;
	z-index: -1;
`;

function ResizeAware({onResize}) {
	const ref = useRef();
	const {width, height} = useSize(ref);

	useEffect(() => {
		onResize();
	}, [width, height, onResize]);

	return <Measurer ref={ref} />;
}

ResizeAware.propTypes = {
	onResize: PropTypes.func.isRequired,
};

export default ResizeAware;
