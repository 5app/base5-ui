module.exports = {
	plugins: ['react-hooks', 'jsx-a11y', '@typescript-eslint'],
	extends: [
		'5app',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
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
	rules: {
		'no-console': [2, {allow: ['error', 'warn']}],
		'prefer-template': 0,
		'react/jsx-no-bind': [2, {allowArrowFunctions: true, ignoreRefs: true}],
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',

		// disabling base rule and enabling TS rule so there is not false error.
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [2, {ignoreRestSiblings: true}]
	},
	settings: {
		react: {
			version: 'detect',
		},
	}
};
