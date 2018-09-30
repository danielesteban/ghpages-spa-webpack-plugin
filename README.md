ghpages-spa-webpack-plugin
===

> Github pages SPA webpack plugin

[![npm-version](https://img.shields.io/npm/v/ghpages-spa-webpack-plugin.svg?style=flat-square)](https://www.npmjs.com/package/ghpages-spa-webpack-plugin)
[![Build Status](https://travis-ci.org/danielesteban/ghpages-spa-webpack-plugin.svg?branch=master)](https://travis-ci.org/danielesteban/ghpages-spa-webpack-plugin)
[![devDependencies Status](https://david-dm.org/danielesteban/ghpages-spa-webpack-plugin/dev-status.svg)](https://david-dm.org/danielesteban/ghpages-spa-webpack-plugin?type=dev)

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
