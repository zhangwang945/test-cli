const fs = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const path = require('path')
const webpackBaseConfig = require('./config/base')
const webpackConfig = merge({}, webpackBaseConfig)
const compiler = webpack(webpackConfig);
module.exports = async function (cmd) {
    compiler.run()
}