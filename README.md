# :sailboat: Public navigation components

[![npm](https://img.shields.io/npm/v/@transferwise/public-navigation.svg)](https://www.npmjs.com/package/@transferwise/public-navigation)
[![GitHub release](https://img.shields.io/github/release/transferwise/public-navigation.svg)](https://github.com/transferwise/public-navigation/releases)
[![CircleCI](https://img.shields.io/circleci/project/github/transferwise/public-navigation/master.svg)](https://circleci.com/gh/transferwise/public-navigation)
[![npm](https://img.shields.io/npm/l/@transferwise/public-navigation.svg)](https://github.com/transferwise/public-navigation/blob/master/LICENSE)

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

The components are configured as JSON files in the [`items`](items/) directory. [See information about submenus below](#Submenu):

## Adding hidden items

It's possible to add menu items that are hidden by default. This can be useful if you want to release a new item under feature lock.

To do that, add a new entry, with an `id` property and a boolean `hidden` property:

```json
{
  "id": "something-cool",
  "hidden": true,
  "translationKey": "public-navigation.money-transfer.something-cool",
  "link": "/:locale/about/link"
}
```

When the Public Navigation is rendered `something-cool` won't show up unless you pass the `id` property to the component like this:

```javascript
const revealItems = ['something-cool'];
<PublicNavigation revealHiddenItemsList={revealItems} />
```

## i18n Internationalisation

`public-navigation.js` contains all available languages.
If you want to minimize your bundle size, there's a `public-navigation.${language}.js` for every language as well.
F.e. `public-navigation.es.js` will only support `language="es"` as a prop.

Available languages are also exposed as a named export `LANGUAGES` to simplify the component's usage, as follows:

```javascript
import { PublicNavigation, LANGUAGES } from '@transferwise/public-navigation';

const language = LANGUAGES[0]; // 'es' in case of public-navigation.es.js

const FooComponent = () => (
  <div>
    <PublicNavigation language={language} />
  </div>
);
```

### Add support for a new language/locale/market

To make `PublicNavigation` available in a new language, follow these steps:

1. Add the language to the [Crowdin project](https://crowdin.com/project/public-navigation/settings#translations)'s "Target languages"
1. Add a new locale mapping in `./crowdin.yml`, e.g. `"nl": "nl"` or `"zh-HK": "zh_HK"`
    - Note: This is required even if crowdin already simplifies the locale (`nl-NL` to `nl`).
    - If this is not done, the javascript bundle will use the full locale string, as crowdin will download the messages file with the raw locale (`messages.nl-NL.json`). The goal here is to, when possible, have a two-letter code per language. A bit more information about [supported languages](https://transferwise.atlassian.net/wiki/spaces/EKB/pages/1054213243/Supported+languages) and language codes is available on Confluence.

## l10n Localisation

`<PublicNavigation>` accepts a `locale` prop as a string. This ensures that users only see links to products which are available in their location.

### Add support for a new locale

Go to `./src/common/l10n/Locale.js` and add the new locale option to the list

### Change which menu items are displayed for a locale

To update the rules for a locale, look in `./src/PublicNavigation/items/l10n/rules.js`. Each of the following is a list of locales in which the noted items will be shown. For example (at time of writing), people in Canada can get a Borderless account but not a card.

- `SUPPORTED_BORDERLESS_NO_CARD_LOCALES`: Locations where users can get balances/bank details but no plastic card
- `SUPPORTED_CARD_LOCALES`: Locations where users can get balances/bank details and the plastic card
- `SUPPORTED_CARD_WAITLIST_LOCALES`: Locations where users can...
- `SUPPORTED_BUSINESS_LOCALES`: Locations where businesses can get some (at least 1) of our business products
- `SUPPORTED_BUSINESS_BORDERLESS_LOCALES`: Locations where businesses can get balances but no plastic card
- `SUPPORTED_BUSINESS_CARD_LOCALES`: Locations where businesses can get balances and cards

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

## Submenu

To add a second-level navigation, the component accepts a `submenuItems` prop. While the `items` in the main nav (and their translations) are included in the component, `submenuItems` are provided by the consuming application and must be translated already.

```javascript
import { PublicNavication } from '@transferwise/public-navigation';

const myAppsSubmenu = [
  {
    link: '/iban',
    translatedText: 'IBAN',
    isTitle: true,
  },
  {
    link: '/iban/checker',
    translatedText: 'Check an IBAN',
  }
]

<PublicNavication
  language="en"
  submenuItems={myAppsSubmenu}
  {...otherProps}
/>
```

For a more complex example with a dropdown, see `./docs/submenu-items`.

## Contributing

1. Run tests with `npm run jest`. `npm test` will check for package and changelog version match, ESLint and Prettier format in addition.
2. Develop using `npm start` on port 9000.
3. **Bump version number in `package.json` according to [semver](http://semver.org/) and add an item that a release will be based on to `CHANGELOG.md`**.
4. Submit your pull request from a feature branch and get code reviewed. Docs for your branch will automatically be deployed to gh-pages.
5. If the pull request is approved and the [CircleCI build](https://circleci.com/gh/transferwise/public-navigation) passes, you will be able to squash and merge.
6. Code will automatically be released to [GitHub](https://github.com/transferwise/public-navigation/releases) and published to [npm](https://www.npmjs.com/package/@transferwise/public-navigation) according to the version specified in the changelog and `package.json`.

## Other

For features and bugs, feel free to [add issues](https://github.com/transferwise/public-navigation/issues) or contribute.
