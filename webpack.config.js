/* global require */
const webpack = require("webpack");
const path = require('path');
const process = require('process');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require("autoprefixer");
const precss = require("precss");

const publidDir = path.join(__dirname, 'public');

const env = process.env.NODE_ENV;

const config = {
  mode: env || 'development'
};

module.exports = [
  {
    mode: config.mode,
    entry: [
      './src/index.jsx'
    ],
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015'],
              plugins: ['transform-flow-strip-types']
            }
          }]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publidDir
    }
  },
  {
    mode: config.mode,
    entry: {
      style: './stylesheets/index.scss',
    },
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.css',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ["css-loader", "postcss-loader"]}),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ["css-loader", "postcss-loader", "sass-loader"]
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer({browsers: ['last 2 versions']}),
            precss
          ]
        }
      })
    ],
  },
];
