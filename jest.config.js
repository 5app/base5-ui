module.exports = {
	verbose: true,
	coverageReporters: ['html'],
	coverageDirectory: './test/coverage',
	testEnvironment: 'jsdom',
	collectCoverageFrom: [
		'**/*.{js}',
		'!**/docz/**',
		'!**/src-icons/**',
		'!**/node_modules/**',
		'!**/test/**',
	],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/.storybook/',
		'/.src-icons/',
		'/test/',
	],
	modulePathIgnorePatterns: ['/node_modules/', '/.storybook/'],
};
