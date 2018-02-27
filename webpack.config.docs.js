const path = require('path');

const devConfig = require('./webpack.config.dev');

module.exports = {
  mode: 'production',
  entry: devConfig.entry,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'public-navigation.js',
  },
  module: devConfig.module,
  plugins: devConfig.plugins,
};
