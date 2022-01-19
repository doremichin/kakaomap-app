module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error', {
        groups: ['external', 'internal'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    camelcase: 'off',
    'max-len': 'off',
    // 'no-shadow': 'off',
  },
};
