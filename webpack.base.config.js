const path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  // node_modules_dir = path.join(__dirname, 'node_modules'),
  // src_dir = path.join(__dirname, './'),
  src_dir = path.join(__dirname, 'src'),
  config = {
    entry: {
      desktop: ['babel-polyfill',path.resolve(__dirname,'./src/index.js')],
      vendor: ['react','react-dom'] 
    },
    resolve: {
      alias: {}
    },
    output: {
      publicPath: "/build/",
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
    },
    plugins:[
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js'
      })
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: ['babel'],
        query: {
          presets: ['react',  'es2015' , 'stage-0'],
          "plugins": [
            ["import", { libraryName: "antd", style: true}],"transform-decorators-legacy"
          ]
        },
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      },{
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 108192,
          name: 'images/[name].[hash:8].[ext]'
        }
      }]
    }
  };

module.exports = config;
