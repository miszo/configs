module.exports = {
  extends: ['miszo', 'miszo/prettier'],
  rules: {
    'no-magic-numbers': ['error', { ignore: [0, 1, 2, 3] }],
  },
};
