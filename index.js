class GHPagesSPAWebpackPlugin {
  constructor(options = {}) {
    this.domain = options.domain;
  }

  apply(compiler) {
    const { name } = this.constructor;
    const { RedirectTemplate } = GHPagesSPAWebpackPlugin;
    if (!this.domain) {
      console.warn(
        `${name}: "domain" option is empty. Please enter the "domain" option.`
      );
    } else {
      compiler.hooks.emit.tapAsync(name, (compilation, done) => {
        compilation.assets['404.html'] = {
          source: () => RedirectTemplate,
          size: () => RedirectTemplate.length,
        };
        compilation.assets.CNAME = {
          source: () => this.domain,
          size: () => this.domain.length,
        };

        done();
      });
    }
  }
}

GHPagesSPAWebpackPlugin.RedirectTemplate = [
  '<!doctype html>',
  '<html>',
  '  <head>',
  '    <meta charset="utf-8">',
  '    <script type="text/javascript">',
  '      window.location.replace(',
  "        'https://' + window.location.hostname + '/#' + window.location.pathname",
  '      );',
  '    </script>',
  '  </head>',
  '</html>',
].join('\n');

module.exports = GHPagesSPAWebpackPlugin;
