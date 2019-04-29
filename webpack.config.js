'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPulgin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const moduleConfig = require('./module.config');

const NODE_ENV = process.env.NODE_ENV !== 'production'
const plugins = [];
const entry = [];

// Add html-webpack-plugin
plugins.push(new HtmlWebpackPlugin({
    filename: NODE_ENV ? `${__dirname}/dist/index.html` : `${__dirname}/dist/index.[chunkhash].html`,
    template: `${__dirname}/src/index.html`
}));

plugins.push(new MiniCssExtractPlugin({
    filename: NODE_ENV ? '../css/[name].css' : '../css/[name].[hash].css',
    chunkFilename: NODE_ENV ? '../css/[id].css' : '../css/[id].[hash].css'
}));

plugins.push(new CleanWebpackPulgin());

module.exports = {
    entry: __dirname + '/src/App.js',
    output: {
      path: __dirname + '/dist/js',
      filename: NODE_ENV ? '[name].bundle.js' : '[name].bundle.[chunkhash].js'
    },
    plugins,
    module: moduleConfig
}