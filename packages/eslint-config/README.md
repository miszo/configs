# @miszo/eslint-config

[![version](https://img.shields.io/npm/v/@miszo/eslint-config.svg)](https://www.npmjs.com/package/@miszo/eslint-config)
[![downloads](https://img.shields.io/npm/dw/@miszo/eslint-config.svg)](https://npm-stat.com/charts.html?package=@miszo/eslint-config&from=2019-02-24)
[![MIT License](https://img.shields.io/npm/l/@miszo/eslint-config.svg)](http://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![@miszo/eslint-config Sonar Cloud](https://github.com/miszo/configs/workflows/@miszo/eslint-config%20Sonar%20Cloud/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=@miszo/eslint-config&metric=alert_status)](https://sonarcloud.io/dashboard?id=@miszo/eslint-config)

ESLint rules for my projects. Feel free to use these conventions.

- [@miszo/eslint-config](#miszoeslint-config)
  - [Usage](#usage)
    - [Configs](#configs)
  - [Contributing](#contributing)
  - [Links](#links)
  - [License](#license)

## Usage

Install the conventions by running:

```bash
npm install --save-dev eslint @miszo/eslint-config
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
