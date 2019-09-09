module.exports = {
	extends: [
		'5app',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		allowImportExportEverywhere: true,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	env: {
		browser: true,
		jest: true,
	},
	plugins: ['react-hooks', 'prettier', 'jsx-a11y'],
	rules: {
		'no-unused-vars': [2, {ignoreRestSiblings: true}],
		'no-console': [2, {allow: ['error', 'warn']}],
		'prefer-template': 0,
		'prettier/prettier': 'error',
		'react/jsx-no-bind': [2, {allowArrowFunctions: true, ignoreRefs: true}],
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	settings: {
		react: {
			version: '16.4',
		},
	},
};
