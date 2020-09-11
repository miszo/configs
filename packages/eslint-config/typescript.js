module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        useJSXTextNode: true,
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      env: {
        browser: true,
        node: true,
      },
      rules: {
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'private-static-field',
              'private-static-method',
              'private-instance-field',
              'private-instance-method',
              'protected-static-field',
              'protected-static-method',
              'protected-instance-field',
              'protected-instance-method',
              'constructor',
              'public-static-field',
              'public-static-method',
              'public-instance-field',
              'public-instance-method',
            ],
          },
        ],
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
};
