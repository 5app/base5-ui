module.exports = {
	plugins: ['react-hooks', 'jsx-a11y'],
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
	rules: {
		'no-unused-vars': [2, {ignoreRestSiblings: true}],
		'no-console': [2, {allow: ['error', 'warn']}],
		'prefer-template': 0,
		'react/jsx-no-bind': [2, {allowArrowFunctions: true, ignoreRefs: true}],
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
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

				// you must disable the base rule as it can report incorrect errors. more info here:
				// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': 'error',

				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [2, {ignoreRestSiblings: true}]
			},
			settings: { react: { version: 'detect' } }
		}
	],
	settings: { react: { version: 'detect'},
	}
};
