const rules = require('./rules/base');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      experimentalDecorators: true,
    },
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
  },
  settings: {
    polyfills: ['promises', 'urlsearchparams'],
  },
  extends: [
    'eslint:all',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:compat/recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: ['compat', 'optimize-regex', 'promise'],
  rules,
};
