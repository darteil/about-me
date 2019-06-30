const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');

const distPath = path.resolve(__dirname, '../dist');
const publicPathFolder = path.resolve(__dirname, '../public');

module.exports = (env, argv) => {
  let publicPath = '/terminal';

  return merge(base(env, argv), {
    devtool: 'source-map',
    stats: 'errors-only',
    output: {
      path: distPath,
      filename: 'js/[name].[hash:8].js',
      publicPath: publicPath,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
      }),
      new ProgressBarPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: path.resolve(__dirname, '../dist'),
      }),
      new CopyWebpackPlugin([{ from: publicPathFolder }]),
    ],
  });
};
