/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import merge from 'webpack-merge'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { Configuration } from 'webpack'

import baseWebpackConfig from './webpack.base.config'
import { resolvePath } from './utils'
import { config } from './config'

const webpackConfig: Configuration = merge(baseWebpackConfig, {
  mode: 'production',
  bail: true,
  devtool: process.env.CI ? 'source-map' : false,
  output: {
    filename: '[name].[chunkhash:8].js',
    path: resolvePath(config.outputDir),
    publicPath: config.publicPath,
  },
  plugins: [
    new CleanWebpackPlugin() as any,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolvePath('public'), // static assets
          to: '[name].[ext]',
          noErrorOnMissing: true,
        },
      ],
    }),
    process.env.CI
      ? new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      : false,
  ].filter((i) => i),
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
