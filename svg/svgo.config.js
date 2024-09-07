/**
 * @see https://github.com/svg/svgo#built-in-plugins
 * @see https://github.com/twbs/icons/blob/main/svgo.config.js
 * @see https://github.com/mui-org/material-ui/blob/next/packages/material-ui-icons/builder.js
 * @see https://github.com/primer/octicons/blob/main/.svgo.yml
 */

const { extendDefaultPlugins } = require('svgo');
const addViewBox = require('svgo-add-viewbox');

module.exports = {
  multipass: true,
  plugins: extendDefaultPlugins([
    'removeRasterImages',
    'removeScriptElement',
    'removeStyleElement',
    {
      name: 'removeViewBox',
      active: false,
    },
    'sortAttrs',
    {
      name: 'addViewBox',
      ...addViewBox,
      params: {
        overwrite: false
      },
    },
  ]),
};
