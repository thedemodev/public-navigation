const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.config');

module.exports = {
  entry: './docs',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'public-navigation.js',
  },
  module: config.module,
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/index.html',
    }),
  ],
};
