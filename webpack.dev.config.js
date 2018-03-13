const webpack = require( 'webpack' ),
  config = require( './webpack.base.config' );

config.devtool = '#source-map';
config.watch = true;
config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': "'development'"
}),
new webpack.HotModuleReplacementPlugin(),
new webpack.NoErrorsPlugin());

module.exports = config;