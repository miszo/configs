module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'lerna run --concurrency 4 --stream pre-commit',
  },
};
