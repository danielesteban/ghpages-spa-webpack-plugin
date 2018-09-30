ghpages-spa-webpack-plugin
===

> Github pages SPA webpack plugin

This plugin was inspired by [lozinsky/cname-webpack-plugin](https://github.com/lozinsky/cname-webpack-plugin).

Besides the CNAME file, it will also generate a 404.html that will redirect all requests to your SPA router.

#### Installation

```sh
npm install --save-dev ghpages-spa-webpack-plugin
```

In your `webpack.config.js`

```javascript
const GHPagesSPAWebpackPlugin = require('ghpages-spa-webpack-plugin');

module.exports = {
  plugins: [
    new GHPagesSPAWebpackPlugin({
      domain: 'example.com',
    }),
  ],
};
```
