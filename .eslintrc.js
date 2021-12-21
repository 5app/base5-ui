module.exports = {
  plugins: ['react-hooks', 'jsx-a11y', '@typescript-eslint'],
  extends: ["5app", "plugin:react/recommended", "plugin:jsx-a11y/recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true
    }],
    'no-console': ['error', {
      allow: ['error', 'warn']
    }],
    'prefer-template': 'off',
    'react/jsx-no-bind': ['error', {
      allowArrowFunctions: true,
      ignoreRefs: true
    }],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // turning off now for JS to enable easier migration
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // you must disable the base rule as it can report incorrect errors.
    // https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
    'no-use-before-define': 'off'
  },
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // we want to warn or error on these rules as this is the direction we want
      // go for new TS files.
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      // you must disable the base rule as it can report incorrect errors
      // more info here:
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }],
  settings: {
    react: {
      version: 'detect'
    }
  }
};