const path = require('path');
/* eslint-disable */
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const values = require('postcss-modules-values');

const { UglifyJsPlugin } = webpack.optimize;

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/index.jsx'),
  ],
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'app'),
        loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  postcss: [
    values
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' },
      { from: './app/index.css', to: 'index.css' },
      { from: './app/images', to: 'images' }
    ]),
  ]
};
