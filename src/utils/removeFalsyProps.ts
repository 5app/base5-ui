export interface Props {
	[key: string]: unknown;
}

export function removeFalsyProps(object: Props): null | Props {
	if (!object) return null;

	const result = {};
	Object.keys(object).forEach(key => {
		if (object[key]) {
			result[key] = object[key];
		}
	});
	return result;
}
