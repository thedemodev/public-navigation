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