# eslint-config-miszo

[![version](https://img.shields.io/npm/v/eslint-config-miszo.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-miszo)
[![downloads](https://img.shields.io/npm/dw/eslint-config-miszo.svg?style=flat-square)](https://npm-stat.com/charts.html?package=eslint-config-miszo&from=2019-02-24)
[![MIT License](https://img.shields.io/npm/l/eslint-config-miszo.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

ESLint rules for my projects. Feel free to use these conventions.

- [eslint-config-miszo](#eslint-config-miszo)
  - [Usage](#usage)
    - [Configs](#configs)
  - [Contributing](#contributing)
  - [Links](#links)
  - [License](#license)

## Usage

Install the conventions by running:

```bash
npm install --save-dev eslint eslint-config-miszo
```

Then add the extends to your `.eslintrc`:

```javascript
{
  "extends": "miszo",
  "rules": {
    // your overrides
  }
}
```

### Configs

This config also exposes a few other configs that I use often and pull in as needed.

You can use them standalone:

```javascript
{
  "extends": "miszo/<config-name>"
}
```

Or in combination with the base config (recommended)

```javascript
{
  "extends": ["miszo", "miszo/<config-name>"]
}
```

## Contributing

[Husky](https://github.com/typicode/husky) is on the guard to put valid code to repository

Please read also [Contributor Code of Conduct](./CODE_OF_CONDUCT.md)

## Links

- [Contributor Code of Conduct](./CODE_OF_CONDUCT.md)

## License

[The MIT License](https://miszo.mit-license.org) @ 2020
