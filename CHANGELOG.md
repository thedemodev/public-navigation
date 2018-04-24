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
