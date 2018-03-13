const webpack = require( 'webpack' ),
  config = require( './webpack.base.config' );

config.plugins.push(
  new webpack.BannerPlugin("Copyright Hand China Co.,Ltd."),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'production'"
  }),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;