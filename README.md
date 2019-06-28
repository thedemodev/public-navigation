# :sailboat: Public navigation components

[![npm](https://img.shields.io/npm/v/@transferwise/public-navigation.svg)](https://www.npmjs.com/package/@transferwise/public-navigation)
[![GitHub release](https://img.shields.io/github/release/transferwise/public-navigation.svg)](https://github.com/transferwise/public-navigation/releases)
[![CircleCI](https://img.shields.io/circleci/project/github/transferwise/public-navigation/master.svg)](https://circleci.com/gh/transferwise/public-navigation)
[![npm](https://img.shields.io/npm/l/@transferwise/public-navigation.svg)](https://github.com/transferwise/public-navigation/blob/master/LICENSE) [![Greenkeeper badge](https://badges.greenkeeper.io/transferwise/public-navigation.svg)](https://greenkeeper.io/)

Public navigation components to be used on all [TransferWise](https://transferwise.com) public pages.

[See the components live here](https://transferwise.github.io/public-navigation/).

## Installation

`npm install @transferwise/public-navigation`

## Usage

`import { PublicNavigation, Footer } from '@transferwise/public-navigation';`

To get active state for nav links, pass the `activePath` prop to `PublicNavigation` so it knows which link to highlight. `activePath` should be a string which matches (`===`) an `href` inside the nav. For localised links (e.g. `/:locale/borderless`), you should include the locale inside the passed prop (so for the `de` locale you'd pass `activePath="/de/borderless"`).

To get push animation behavior for mobile menu, the consuming application needs to be inside a single container with the class `navbar-push-container`. If not, the mobile menu will slide on top of the content, rather than push. Push is the desired behavior and should be used when possible to get consistent(ly pretty) behavior.

```javascript
<PublicNavigation />
<div className="navbar-push-container">
  <Everything />
  <Else />
</div>

```

## Adding/changing items

The components are configured as JSON files in the [`items`](items/) directory.

## i18n

`public-navigation.js` contains all available languages.
If you want to minimize your bundle size, there's a `public-navigation.${language}.js` for every language as well.
F.e. `public-navigation.es.js` will only support `language="es"` as a prop.

Available languages are also exposed as a named export `LANGUAGES` to simplify the component's usage, as follows:

```javascript
...
import { PublicNavigation, LANGUAGES } from '@transferwise/public-navigation';

const language = LANGUAGES[0]; // 'es' in case of public-navigation.es.js

const FooComponent = () => (
  <div>
    <PublicNavigation language={language} />
  </div>
);

...
```

## Tracking

The tracking triggers are defined through the `[data-tracking-id="public-navigation"]` attribute
in [Google Tag Manager](https://tagmanager.google.com)
(all the relevant triggers and tags contain `Public navigation` in their name).

## Language selector

To use language selector you have to pass `language`, `availableLanguages` and `onLanguageChange` to the `PublicNavication` component.

```javascript
...
import { PublicNavication } from '@transferwise/public-navigation';

<PublicNavication
  language="en"
  availableLanguages={[ {value: 'en', label: 'English (UK)'}, {value: 'de', label: 'Deutsch'} ]}
  onLanguageChange={newLanguage => { updateLanguageHere(newLanguage) }}
  {...otherProps}
/>

...
```

If 1 or less available languages are passed to PublicNavication or there is no `onLanguageChange` passed then language selector is hidden.

## Contributing

1. Run tests with `npm run jest`. `npm test` will check for package and changelog version match, ESLint and Prettier format in addition.
1. Develop using `npm start` on port 9000.
1. **Bump version number in `package.json` according to [semver](http://semver.org/) and add an item that a release will be based on to `CHANGELOG.md`**.
1. Submit your pull request from a feature branch and get code reviewed. Docs for your branch will automatically be deployed to gh-pages.
1. If the pull request is approved and the [CircleCI build](https://circleci.com/gh/transferwise/public-navigation) passes, you will be able to squash and merge.
1. Code will automatically be released to [GitHub](https://github.com/transferwise/public-navigation/releases) and published to [npm](https://www.npmjs.com/package/@transferwise/public-navigation) according to the version specified in the changelog and `package.json`.

## Other

For features and bugs, feel free to [add issues](https://github.com/transferwise/public-navigation/issues) or contribute.
