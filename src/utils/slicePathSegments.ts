function slicePathSegments(
	pathname: string,
	start: number,
	end?: number
): string {
	const startsWithSlash = pathname[0] === '/';

	const slicedPathname = pathname
		.split('/')
		.filter(Boolean)
		.slice(start, end)
		.join('/');

	return startsWithSlash ? `/${slicedPathname}` : slicedPathname;
}

export function stripSlashFromEnd(pathname: string): string {
	const endsWithSlash = pathname[pathname.length - 1] === '/';
	return endsWithSlash ? pathname.slice(0, -1) : pathname;
}

export default slicePathSegments;
