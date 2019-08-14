const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const common = require('./webpack.core.js');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// new BundleAnalyzerPlugin()

module.exports = merge(common, {
  entry: {
    main: path.resolve(__dirname, '../src', 'main.tsx'),
  },
  mode: 'production',
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'styled-components': {
      root: 'styled',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components',
    },
    'tinycolor2': {
      root: 'tinycolor',
      commonjs2: 'tinycolor2',
      commonjs: 'tinycolor2',
      amd: 'tinycolor2',
    },
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true,
        },
      }),
    ],
  },
});
