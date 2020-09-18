const baseRules = require('./rules/base');

module.exports = {
  extends: ['airbnb', 'react-app', 'plugin:react/all'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/boolean-prop-naming': [2, { rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+', validateNested: true }],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-fragments': [2, 'element'],
    'react/jsx-no-literals': [2, { ignoreProps: true }],
    'react/jsx-max-depth': [2, { max: 3 }],
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', '/^on.+$/', '/^handle.+$/', 'render'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    ...baseRules,
  },
};
