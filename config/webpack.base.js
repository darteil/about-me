const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexFilePath = path.resolve(__dirname, '../src/index.tsx');

module.exports = (env, argv) => {
  return {
    entry: indexFilePath,
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
      }),
    ],
  };
};
