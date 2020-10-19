gatsby-plugin-pace


pace.js binding for gatsby sites.  support all options pace.js support.

with additional options: 

- theme: (optional) css theme to use with pace.js, default to `minimal`. gatsby-plugin-pace bundled themes includes:
  - minimal
  - center-radar
  - center-simple
  - barber-shop
  - flash
  - loading-bar
  - corner-indicator
- color: main color pace.js will use
- cdn: (optional), if a cdn link to pace.js is specified, plugin will load pace.js from cdn instead of package.



in gatsby-config.js
```js
    {
      resolve: 'gatsby-plugin-pace',
      options: { theme: 'minimal', color: 'white', cdn: 'https://cdn.bootcdn.net/ajax/libs/pace/1.0.2/pace.min.js' }
    },

```