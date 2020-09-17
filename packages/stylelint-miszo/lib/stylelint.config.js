module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended', 'stylelint-config-recommended-scss'],
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
    'stylelint-scss',
  ],
  rules: {
    'block-opening-brace-space-before': 'always',
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\\\[.+\\\\])?$',
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['at-root', 'content', 'extend', 'for', 'function', 'include', 'mixin', 'return'],
      },
    ],
    'block-closing-brace-empty-line-before': 'never',
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'declaration-empty-line-before': 'never',
    'function-url-quotes': 'always',
    indentation: 2,
    'max-nesting-depth': [
      3,
      {
        ignoreAtRules: ['at-root', 'content', 'extend', 'function', 'include', 'mixin', 'return'],
      },
    ],
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    'order/properties-alphabetical-order': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'single',
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'z-index', 'font-size', 'font-weight', 'fill', 'stroke'],
      { ignoreValues: ['transparent', 'none', 'inherit', 'initial', 'currentColor'] },
    ],
    'string-quotes': 'single',
    'value-keyword-case': [
      'lower',
      { ignoreProperties: ['/color$/', 'z-index', 'font-size', 'font-weight', 'fill', 'stroke'] },
    ],
  },
};
