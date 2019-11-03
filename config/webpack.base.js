const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const indexFilePath = path.resolve(__dirname, '../src/index.tsx');

const stylesNotIncludedInModules = [/node_modules/, path.resolve(__dirname, '../src/globalStyles/')];

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

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
        {
          test: /\.css$/,
          exclude: stylesNotIncludedInModules,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                importLoaders: 1,
                localIdentName: '[path][name]__[local]__[hash:base64:5]',
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: stylesNotIncludedInModules,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                importLoaders: 1,
              },
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
