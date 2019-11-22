const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');

const distPath = path.resolve(__dirname, '../dist');
const publicPathFolder = path.resolve(__dirname, '../public');

module.exports = (env, argv) => {
  let publicPath = '';

  return merge(base(env, argv), {
    stats: 'errors-only',
    output: {
      path: distPath,
      filename: 'js/[name].[hash:8].js',
      publicPath: publicPath,
    },
    plugins: [
      new WebpackBar(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: path.resolve(__dirname, '../dist'),
      }),
      new CopyWebpackPlugin([{ from: publicPathFolder }]),
    ],
  });
};
