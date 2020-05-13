/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import url from 'url'
import merge from 'webpack-merge'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import type { Configuration } from 'webpack'

import baseWebpackConfig from './webpack.base.config'
import { resolvePath } from './utils'
import { config } from './config'

const publicPath = url.parse(config.publicUrl).pathname as string

const webpackConfig: Configuration = merge(baseWebpackConfig, {
  mode: 'production',
  bail: true,
  devtool: process.env.CI ? 'source-map' : false,
  output: {
    filename: '[name].[chunkhash:8].js',
    publicPath,
  },
  plugins: [
    new CleanWebpackPlugin() as any,
    new CopyWebpackPlugin([
      {
        from: resolvePath('public'), // static assets
        to: '[name].[ext]',
      },
    ]),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          // Note the usage of `[\\/]` as a path separator for cross-platform compatibility.
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
})

module.exports = webpackConfig
