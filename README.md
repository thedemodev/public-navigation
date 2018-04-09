# :sailboat: Public navigation

[![npm](https://img.shields.io/npm/v/@transferwise/public-navigation.svg)](https://www.npmjs.com/package/@transferwise/public-navigation) 
[![GitHub release](https://img.shields.io/github/release/transferwise/public-navigation.svg)](https://github.com/transferwise/public-navigation/releases)
[![CircleCI](https://img.shields.io/circleci/project/github/transferwise/public-navigation/master.svg)](https://circleci.com/gh/transferwise/public-navigation)
[![npm](https://img.shields.io/npm/l/@transferwise/public-navigation.svg)](https://github.com/transferwise/public-navigation/blob/master/LICENSE)

A public navigation component to be used on all [TransferWise](https://transferwise.com) public pages.

[See the component live here](https://transferwise.github.io/public-navigation/).

## Installation

`npm install @transferwise/public-navigation`

## Usage

### Example

```javascript
...
import PublicNavigation from '@transferwise/public-navigation';

const FooComponent = () => (
  <div>
    <PublicNavigation inverse={false} language="es" />
    ...
  </div>
);

...
```

### Props

| Prop       | Description          | Default |
|------------|----------------------|---------|
| `inverse`  | for dark backgrounds | `true`  |
| `language` | language code        | `'en'`  |

### Languages

`public-navigation.js` contains all available languages.
If you want to minimize your bundle size, there's a `public-navigation.${language}.js` for every language as well.
F.e. `public-navigation.es.js` will only support `language="es"` as a prop.

Available languages are also exposed as a named export `LANGUAGES` to simplify the component's usage, as follows:

```javascript
...
import PublicNavigation, { LANGUAGES } from '@transferwise/public-navigation';

const language = LANGUAGES[0]; // 'es' in case of public-navigation.es.js

const FooComponent = () => (
  <div>
    <PublicNavigation language={language} />
  </div>
);

...
```

## Tracking

`TODO`

## Contributing

1. Run tests with `npm run jest`. `npm test` will check for package and changelog version match, ESLint and Prettier format in addition.
1. Develop using `npm start` on port 9000.
1. **Bump version number in `package.json` according to [semver](http://semver.org/) and add an item that a release will be based on to `CHANGELOG.md`**.
1. Submit your pull request from a feature branch and get code reviewed. Docs for your branch will automatically be deployed to gh-pages.
1. If the pull request is approved and the [CircleCI build](https://circleci.com/gh/transferwise/public-navigation) passes, you will be able to squash and merge.
1. Code will automatically be released to [GitHub](https://github.com/transferwise/public-navigation/releases) and published to [npm](https://www.npmjs.com/package/@transferwise/public-navigation) according to the version specified in the changelog and `package.json`.

## Other

For features and bugs, feel free to [add issues](https://github.com/transferwise/public-navigation/issues) or contribute.
