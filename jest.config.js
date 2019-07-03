module.exports = {
	verbose: true,
	coverageReporters: ['html'],
	coverageDirectory: './test/coverage',
	testEnvironment: 'jsdom',
	collectCoverageFrom: [
		'**/*.{js}',
		'!**/docz/**',
		'!**/node_modules/**',
		'!**/test/**',
	],
	coveragePathIgnorePatterns: ['/node_modules/', '/docz/', '/test/'],
	modulePathIgnorePatterns: ['/node_modules/', '/docz/'],
};
