const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackTranslationsPlugin = require('webpack-translations-plugin');

const filename = 'public-navigation';

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: `${filename}.js`,
    library: '@transferwise/public-navigation',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader'],
        }),
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
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types',
      umd: 'prop-types',
    },
    retranslate: 'retranslate',
  },
  plugins: [new ExtractTextPlugin(`${filename}.css`), new WebpackTranslationsPlugin()],
};
