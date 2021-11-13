/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 * @typedef { import("webpack-chain") ChainWebpack }
 */

/**
 * @type { Options }
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Tv7Twitch'
    : '/',
  outputDir: 'dist',
  css: {
    sourceMap: true
  }
}
