const Path = require('path');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'js/index': Path.resolve(__dirname, '../src/js/index.js'),
    'js/dashboard/dashboard': Path.resolve(__dirname, '../src/js/dashboard/dashboard.js'),
    'js/login/login': Path.resolve(__dirname, '../src/js/login/login.js'),
    'js/signup/signup': Path.resolve(__dirname, '../src/js/signup/signup.js'),
    'js/shop/shop': Path.resolve(__dirname, '../src/js/shop/shop.js'),
    'js/logout/logout': Path.resolve(__dirname, '../src/js/logout/logout.js'),
    'css/index': Path.resolve(__dirname, '../src/scss/index.scss'),
  },
  output: {
    path: Path.join(__dirname, '../dist'),
    filename: '[name].min.js',
  },
  plugins: [
    new Webpack.ProvidePlugin({
      mdb: 'mdb',
    }),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../src/bantuan.html') },
      { from: Path.resolve(__dirname, '../src/dashboard.html') },
      { from: Path.resolve(__dirname, '../src/index.html') },
      { from: Path.resolve(__dirname, '../src/login.html') },
      { from: Path.resolve(__dirname, '../src/mitra.html') },
      { from: Path.resolve(__dirname, '../src/promo.html') },
      { from: Path.resolve(__dirname, '../src/signup.html') },
      { from: Path.resolve(__dirname, '../src/logout.html') },
      // ==========================================================
      { from: Path.resolve(__dirname, '../src/template/dashboard/'), to: Path.resolve(__dirname, '../dist/template/dashboard')},
      { from: Path.resolve(__dirname, '../src/img'), to: 'img' },
    ]),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
      mdb: Path.join(__dirname, '../node_modules/mdb-ui-kit'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};
