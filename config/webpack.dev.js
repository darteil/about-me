const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

const publicFolderPath = path.resolve(__dirname, '../public');

module.exports = (env, argv) =>
  merge(base(env, argv), {
    devtool: 'source-map',
    output: {
      chunkFilename: '[name].chunk.js',
    },
    devServer: {
      static: publicFolderPath,
      client: {
        overlay: true,
      },
      port: 4000,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:3000',
          pathRewrite: { '^/api': '' },
        },
      ],
    },
  });
