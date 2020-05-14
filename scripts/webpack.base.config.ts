/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackTemplate from 'html-webpack-template'
import type { Configuration } from 'webpack'

import { resolvePath } from './utils'
import { config } from './config'

const baseWebpackConfig: Configuration = {
  mode: process.env.NODE_ENV as any,
  entry: resolvePath('src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[chunkhash:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [
    // @see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      // inject: true,
      template: HtmlWebpackTemplate,
      ...config.templateConfig,
    } as any),
  ],
}

export default baseWebpackConfig
