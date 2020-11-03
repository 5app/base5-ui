import {useState} from 'react';

function useUniqueId(customId) {
	const [uniqueId] = useState(() => Math.random().toString(16).slice(2));
	return customId || uniqueId;
}

export default useUniqueId;
