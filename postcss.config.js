module.exports = {
  plugins: {
    'postcss-aspect-ratio-mini': {}, // 等比例容器
    'postcss-write-svg': { utf8: false }, // 1px 方案
    'autoprefixer': {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // (Number) The width of the viewport.
      viewportHeight: 667, // (Number) The height of the viewport.
      unitPrecision: 5, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace
      mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    },
    'postcss-viewport-units': {
      filterRule: rule => rule.nodes.findIndex(i => i.prop === 'content') === -1
    },
  }
}
