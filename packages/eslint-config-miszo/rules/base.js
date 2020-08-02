/* eslint-disable no-magic-numbers */
module.exports = {
  curly: ['error', 'all'],
  'id-length': ['error', { exceptions: ['_'] }],
  'array-callback-return': 2,
  'function-call-argument-newline': ['error', 'consistent'],
  'arrow-parens': ['error', 'as-needed'],
  'max-len': ['error', { code: 120, comments: 120, tabWidth: 2 }],
  'space-in-parens': ['error', 'never'],
  'keyword-spacing': ['error'],
  'max-params': ['error', 3],
  'max-statements': ['error', 10],
  'max-depth': ['error', 2],
  complexity: ['error', 6],
  'linebreak-style': [0, 'windows'],
  quotes: ['error', 'single'],
  'object-curly-spacing': ['error', 'always'],
  'comma-dangle': ['error', 'never'],
  'optimize-regex/optimize-regex': 'error',
  'newline-per-chained-call': [2],
  semi: ['error', 'always'],
  'sort-keys': 0,
  'sort-imports': 0,
  'func-style': 0,
  'no-invalid-this': 0,
  'no-ternary': 0,
  'multiline-ternary': 0,
  'no-magic-numbers': ['error', { ignore: [0, 1, 2] }],
  'no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_$',
      caughtErrorsIgnorePattern: '^_$',
      varsIgnorePattern: '^_$',
    },
  ],
  'import/named': 2,
  'import/extensions': [
    'error',
    'never',
    { json: 'always', scss: 'always', jpg: 'always', png: 'always', ts: 'never', tsx: 'never' },
  ],
  'import/no-unresolved': [2, { caseSensitive: true, ignore: ['src', 'server', 'assets', 'config'] }],
  'import/group-exports': 1,
  'import/no-unassigned-import': [1, { allow: ['**/*.scss', '**/*.css'] }],
  'import/max-dependencies': ['error', { max: 20 }],
  'import/newline-after-import': ['error', { count: 1 }],
  'import/no-duplicates': 1,
  'import/exports-last': 1,
  'unicorn/catch-error-name': ['error', { caughtErrorsIgnorePattern: '^_|undefined$' }],
  'unicorn/filename-case': [0],
  'import/no-extraneous-dependencies': 0,
  "unicorn/no-null": 0,
  "unicorn/prevent-abbreviations": [
    "error",
    {
      "whitelist": {
        "ref": true,
        "rel": true,
      }
    }
  ]
};
/* eslint-enable no-magic-numbers */
