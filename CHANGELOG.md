# v3.5.0
## Added support for submenu

# v3.4.4
## Revealing language selector on tablet view

# v3.4.3
## update money tracker menu item with fixed locale

# v3.4.2
## config change: SG is added as SUPPORTED_CARD_LOCALES

# v3.4.1
## Support for hiding menu items via `hidden` property and revealing them with `revealHiddenItemsList` prop

# v3.4.0
## Restrict dropdown img height for consistency, update Login button style for small screens

# v3.3.10
## Update footer for AU

# v3.3.9
## AU NZ will have card

# v3.3.8
## Fix "Hello world" translations

# v3.3.7
## Fix business payouts link locale

# v3.3.6
## Change the HAT link to lienzo HAT page

# v3.3.5
## Add zh-HK -> zh_HK crowdin locale mapping

# v3.3.4
## Add borderless and card to `ch` locale

# v3.3.3
## remove US from debitcard waitlist

# v3.3.2
## Pull translations

# v3.3.1
## Only import variables from bootstrap file

# v3.3.0
## For users previously logged in (not new users), emphasize more on login instead of register buttons in header.

# v3.2.4
## Change the HAT link amount to 100K

# v3.2.3
## Add rudimentary HAT link to send-money section

# v3.2.2
## Fix squished TransferWise logo on iOS Safari

# v3.2.1
## Fix language selector title disappearing when in focus

# v3.2.0
## Add language selector hover animations

# v3.1.10
## Update a link in the footer

# v3.1.9
## Fix business Borderless translation key

# v3.1.8
## Fix links and copy

# v3.1.7
## Add logged in / logged out user logic
Add support to show `Return to account` button when user is logged in and hide `Log in` and `Register` menu items

# v3.1.6
## Move dropdown carets to align with chevrons

# v3.1.5
## Fix bugs and make improvements as per design review

# v3.1.4
## Pull latest translations, some languages were missing in last version

# v3.1.3
## Improve margins between nav elements, refactor, add US waitlist

# v3.1.2
## Remove @transferwise/components from the final CSS bundle as it is not used

# v3.1.1
## Align logo with nav

# v3.1.0
## Pass className to first DOM element

# v3.0.0
## Public Navigation redesign

*Breaking changes*:
* Language selector has moved from `Footer` to `PublicNavigation`, therefore `availableLanguages` and `onLanguageChange` now need to be passed to `PublicNavigation`, not `Footer`.

# v2.9.0
## Use new legal link in the footer

# v2.8.0
## Add localized company registration

# v2.7.1
## Update translations

# v2.7.0
## Make it possible to localize copy

Also adds legal copy for US, HK, JP, SG and CA.

# v2.6.0
## Footer: Add language selector

<img src="https://user-images.githubusercontent.com/8721494/51605601-31ff4580-1f18-11e9-81c9-8e1bba8ca986.png">

# v2.5.2
## Navigation: Fix payouts link

# v2.5.1
## Localize Our story link

# v2.5.0
## Update items for `NZ` locale

# v2.4.1
## Update dependencies

# v2.4.0
## Update Business dropdown

<img src="https://user-images.githubusercontent.com/36676/48411985-3a2e4e00-e73b-11e8-8deb-d4bf0960949c.png">

# v2.3.0
## Add optional analyticsId property to navigation items for tracking

# v2.2.0
## Add turkish

# v2.1.0
## Add footer

<img src="https://user-images.githubusercontent.com/5443561/46612779-2e3ae500-cb1a-11e8-8a57-b9622b309931.png">

# v2.0.0
## Use retranslate for translations and simplify config

*Breaking changes*:
* `PublicNavigation` is now a named export, not a default one (in preparation for new components)
* `retranslate` is expected as a peer dependency from consumers

# v1.1.4
## Update nav rules and apply rules to subitems

# v1.1.3
## Update dependencies

# v1.1.2
## Fix Our story link

# v1.1.1
## Fix release step for CI

# v1.1.0
## Add debit card dropdown for `US` locale

# v1.0.1
## Remove debit card dropdown for `SG` locale

# v1.0.0
## Enable server-side rendering, build a separate CSS file

*Breaking changes*:
* consumers now need to add styles separately from `dist/public-navigation.css`
* `prop-types` is expected as a peer dependency from consumers

The removal of `style-loader` and a check for whether to polyfill `focus-within` allow the component to be server-side rendered.
A smoke test to ensure the component can be rendered to string from Node context is added.

# v0.11.8
## Fix React error for false target value

The fixed error:
```
Warning: Received `false` for a non-boolean attribute `target`.

If you want to write it to the DOM, pass a string instead: target="false" or target={value.toString()}.

If you used to conditionally omit it with target={condition && value}, pass target={condition ? value : undefined} instead.
```

# v0.11.7
## Fix menu paddings to avoid collapsing in Spanish
![Collapsing menu in Spanish](https://user-images.githubusercontent.com/1814752/39425382-1d4e455a-4c73-11e8-8efd-782f13b26045.png)

# v0.11.6
## Add badge to missing "Get a borderless account" item

# v0.11.5
## Menu styles issues

- Update styles to non flexbox items due to issues in IOS 7 and below.

- Target paddings by language. This fix is too custom to current navbar items, but works for the moment. The ideal situation would be to remove a couple of items so we don´t have to hack the menu for medium size screens. Remove this fix when we don´t have so many items in the first level.

# v0.11.4
## Fix navigation in safari, safari mobile and firefox

Added `tabindex="-1"` to `Item`.

# v0.11.3
## Fix same page hash redirects

Due to Angular routing, same page redirects don't work on some pages.
This can be fixed by adding `target="_self"` to elements targeting the same page, which we determine by a starting `#`.

# v0.11.2
## Fix styles for long items

Use french to see the most long cases.

![Menu with long items](https://user-images.githubusercontent.com/1814752/39213040-652307fe-4808-11e8-8adc-6f566d525948.gif)

# v0.11.1
## Fix hash redirects

Same page hash redirects to target element by ID did not work, this release fixes that.

# v0.11.0
## Add a locale prop

We need to differentiate between `locale` and `language` as we want to show items based on the locale, not the language.

For example (presuming Brazil does not have Borderless and Germany does):
On the German page (https://transferwise.com/de) in Portuguese, the Borderless items should be present.
On the Brazilian page (https://transferwise.com/br) in German, the Borderless items should not be present.

The locales can also be tried in the demo.

# v0.10.0
## Items update and mobile navigation fixes

Updated the links structure. Added a responsive logo. Improved dropdowns in mobile viewports: paddings, added ellipsis to items, updated icons. Migrated all the `.less` styles to [Bootstrap](https://github.com/transferwise/bootstrap). Added support for localized links.

Added badge option for `DropdownItem` via `badge=""` prop.

Borderless and Card links are managed via `SUPPORTED_BORDERLESS_LOCALES` and `SUPPORTED_CARD_LOCALES` arrays in `src/items/itemObjects.js`

![](https://user-images.githubusercontent.com/36676/39178958-f909c5d8-47aa-11e8-8bab-b21d636e5f68.gif)

# v0.9.6
## Updated toggle button name to unify with boostrap toggle element

# v0.9.5
## Adds readme entry about tracking

# v0.9.4
## Fixes dropdowns border and caret on mobile

When navigating with tabs on desktop fixes the behaviour of the border-bottom and the caret animation:

Before:
![Before](https://user-images.githubusercontent.com/1814752/38494640-9415606e-3bee-11e8-837a-f1da22ae1951.gif)

After:
![After](https://user-images.githubusercontent.com/1814752/38494645-98684e92-3bee-11e8-813a-b90df1b45a8c.gif)

Also prevents to lose the border-bottom when clicking (active, focus) on mobile.

# v0.9.3
## Adds tracking ID, makes `Navigation` use any passed prop

The tracking id is under `data-tracking-id` attribute and the value for public navigation is `'public-navigation'`.

# v0.9.2
## Adds readme

# v0.9.1
## Fixes focus-within polyfill behaviour

The `.focus-within` polyfill did not remove the class on click, so for simplicity,
we're now using [`focus-within on npm`](https://www.npmjs.com/package/focus-within).

# v0.9.0
## Add animation to dropdowns

Adds simple animation to the dropdowns.
We are going to improve this animations in a future release:

- Ensure that the animation also works when the focus on the list item is lost!
- Stop using the same animation exactly, as it doesn't look amazing (the tiny flicker on the top caused by the move down is disturbing due to this dropdown's different placement).

# v0.8.1
## Fix inverse style

# v0.8.0
## Adds nested navigation styles

Added styles to second level navigation on mobile and desktop. This styles will go to Boostrap in next steps.

![image desktop](![image](https://user-images.githubusercontent.com/1814752/38105967-7f3f6944-3385-11e8-9a06-adac7926d8ab.png))

![image mobile](![image](https://user-images.githubusercontent.com/1814752/38105995-94f2ef72-3385-11e8-9103-bfbbcae5c8b7.png))

# v0.7.1
## Adds carets if items have sub-items

# v0.7.0
## Adds icons to top level items

<img src="https://user-images.githubusercontent.com/5443561/38090043-478fb98a-3359-11e8-8bfd-3edf439a1759.png" width="320">

Only the used icons are included in the resulting bundle, as inline SVG-s.

# v0.6.2
## Makes items without a link buttons

This is better for accessibility and allows us to avoid eval hacks and appending a hash to the URL,
which may be problematic for analytics.

# v0.6.1
## Removes bottom margin from the `header` element

# v0.6.0
## Adds translations

Translation bundles built with [`webpack-translations-plugin`](https://www.npmjs.com/package/webpack-translations-plugin)
are now exposed in the package.

The development environment and the docs use the source messages.

# v0.5.1
## Adds .focus-within class for menu items when any of its children has focus

This allows us to have better keyboard support and when support for
the [:focus-within pseudo-class](https://caniuse.com/#search=focus-within) increases, we can remove this.

# v0.5.0
## Experimental dropdown items support

This changes only markup, the styles will be added later.
Therefore, the nested items are commented out for now, and the navigation looks and behaves the same as in v0.4.0.

With nested items, it would currently look like the screenshots below.

![image](https://user-images.githubusercontent.com/5443561/36888039-742dfe2e-1dfc-11e8-94d6-7227d959b6a7.png)

<img src="https://user-images.githubusercontent.com/5443561/36888005-52f08c68-1dfc-11e8-873a-88111a467370.png" width="320">

# v0.4.0
## Adds a button item visible on every screen width

![image](https://user-images.githubusercontent.com/5443561/36666623-e335e9be-1af3-11e8-9723-6ac2075b142f.png)

![image](https://user-images.githubusercontent.com/5443561/36666645-f79dd48e-1af3-11e8-96cb-bae25d91514d.png)

New items for Help, Login and Signup are added to reflect the final result better.

# v0.3.3
## Updates internals: Webpack 4 and React hot loader 4

# v0.3.2
## Refactors PublicNavigationWithoutContent to be stateful and renamed it to Navigation

This way, `Navigation` is now built in a reusable way as it stores the state
about whether the menu is open or not, and `PublicNavigation` is just `Navigation` with passed `items`.

# v0.3.1
## Fixes menu animation and other style issues

The menu now animates as intended. Also, the overlay does not have the button border anymore.

![animation](https://user-images.githubusercontent.com/5443561/36427340-e1d427ba-1644-11e8-8909-c076367e1445.gif)

# v0.3.0
## Adds items

Items, originating from `src/items.json`, will be rendered as menu items, for mobile and desktop.

![image](https://user-images.githubusercontent.com/5443561/36378305-3b2b21b6-1572-11e8-8937-ad438c29a2ce.png)

<img src="https://user-images.githubusercontent.com/5443561/36378339-56f72656-1572-11e8-9bf3-91105ba90eae.png" width="240">


# v0.2.2
## Renames internal `PublicNavigationWithoutContent` component

# v0.2.1
## Replaces `hidden` with `.sr-only`

This is better for accessibility, as screenreaders sometimes don't read `hidden` elements.

# v0.2.0
## Adds logo

![image](https://user-images.githubusercontent.com/5443561/35562098-41198892-05aa-11e8-8952-4806593298b3.png)

Passing the logo link (https://transferwise.com by default):
```js
<PublicNavigation logoLink="https://transferwise.com/borderful" />
```

# v0.1.0
## Initial release
