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