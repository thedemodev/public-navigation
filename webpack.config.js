const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'public-navigation.min.js',
    library: '@transferwise/public-navigation',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)/,
        loader: 'file-loader',
      },
    ],
  },
};
