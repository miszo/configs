module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['tsdoc'],
      rules: {
        'tsdoc/syntax': 1,
      },
    },
  ],
};
