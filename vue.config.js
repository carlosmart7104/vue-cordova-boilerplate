module.exports = {
  publicPath: process.env.PROD_MODE === 'cordova' ? '' : '/',

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  }
}
