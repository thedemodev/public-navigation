const WebpackTranslationsPlugin = require('webpack-translations-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'public-navigation.js',
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
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
  },
  plugins: [new WebpackTranslationsPlugin()],
};
