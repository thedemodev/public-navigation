const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.config');

module.exports = {
  mode: 'development',
  entry: './docs',
  module: config.module,
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/index.html',
    }),
  ],
};
