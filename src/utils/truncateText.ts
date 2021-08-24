function truncateText(str: string, length: number | null): string | null {
	if (!str) {
		return null;
	}
	if (length !== null && str.length > length) {
		return str.substring(0, length) + '…';
	} else {
		return str;
	}
}

export default truncateText;
