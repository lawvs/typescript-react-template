/* eslint-disable import/no-extraneous-dependencies */
import merge from 'webpack-merge'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { EnvironmentPlugin } from 'webpack'
import type { Configuration, WebpackPluginInstance } from 'webpack'

import baseWebpackConfig from './webpack.base.config'
import { resolvePath } from './utils'
import { config } from './config'

const plugins: WebpackPluginInstance[] = [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: resolvePath('public'), // static assets
        to: '[name][ext]',
        noErrorOnMissing: true,
      },
    ],
  }),
]

if (process.env.CI) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),

    new EnvironmentPlugin({
      // Generated by jest
      // Need to copy from the coverage folder
      // See .github/workflows/nodejs.yml#Copy coverage
      COVERAGE: 'coverage/lcov-report/index.html',
      // Generated by BundleAnalyzerPlugin
      REPORT: 'report.html',
    }),
  )
}

const webpackConfig: Configuration = merge(baseWebpackConfig, {
  mode: 'production',
  bail: true,
  devtool: process.env.CI ? 'source-map' : false,
  output: {
    filename: '[name].[chunkhash:8].js',
    path: resolvePath(config.outputDir),
    publicPath: config.publicPath,
  },

  plugins,

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

export default webpackConfig
