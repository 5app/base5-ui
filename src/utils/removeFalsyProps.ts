interface IObjectProps {
	[key: string]: any;
}

function removeFalsyProps(object: IObjectProps): null | IObjectProps {
	if (!object) return null;

	return Object.keys(object).reduce<IObjectProps>((acc, key) => {
		const newObject = acc;
		if (object[key]) {
			newObject[key] = object[key]
		}
		return newObject;
	}, {});
}

export default removeFalsyProps;
