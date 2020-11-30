const path = require('path');
const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');

const publicFolderPath = path.resolve(__dirname, '../public');

module.exports = merge(base, {
  devtool: 'source-map',
  output: {
    chunkFilename: '[name].chunk.js',
  },
  devServer: {
    contentBase: publicFolderPath,
    stats: 'errors-only',
    overlay: true,
    port: 4000,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
        pathRewrite: {'^/api': ''},
      },
    ],
  },
});
