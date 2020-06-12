function removeFalsyProps(object) {
	if (!object) return null;

	return Object.keys(object).reduce((acc, key) => {
		const newObject = acc;
		if (object[key]) {
			newObject[key] = object[key];
		}
		return newObject;
	}, {});
}

export default removeFalsyProps;
