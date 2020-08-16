const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const TerserJSPlugin = require('terser-webpack-plugin');
const base = require('./webpack.base');

const distPath = path.resolve(__dirname, '../dist');
const publicPathFolder = path.resolve(__dirname, '../public');

module.exports = merge(base, {
  stats: 'errors-only',
  output: {
    path: distPath,
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].chunk.js',
    publicPath: '',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({ extractComments: false })],
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, '../dist'),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: publicPathFolder, to: distPath }],
    }),
  ],
});
