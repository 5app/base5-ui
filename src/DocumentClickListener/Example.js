import React, {useState, useRef} from 'react';
import DocumentClickListener from './';
import Switch from '../Switch';
import Box from '../Box';

function DocumentClickExample() {
	const [count, setCount] = useState(0);
	const [isActive, setActive] = useState(true);
	const excludedElement = useRef(null);

	return (
		<>
			<h1>Document clicks: {count}</h1>
			<Box ref={excludedElement} p="m" border="dashed">
				Clicks inside this box will be ignored.
			</Box>
			{isActive && (
				<DocumentClickListener
					onClick={() => setCount(count + 1)}
					excludedElementRef={excludedElement}
				/>
			)}
			<Box mt="m">
				<Switch
					checked={isActive}
					onChange={() => setActive(prevActive => !prevActive)}
					id="switch"
				/>{' '}
				<label htmlFor="switch">Count clicks</label>
			</Box>
		</>
	);
}

export default DocumentClickExample;
