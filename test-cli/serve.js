const express = require('express');
const fs = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')
const webpackDevServer = require('webpack-dev-server')
const webpackBaseConfig = require('./config/base')
const webpackConfig = merge({}, webpackBaseConfig)
const compiler = webpack(webpackConfig);
const app = express();

module.exports = async function (cmd) {
    // // Step 2: Attach the dev middleware to the compiler & the server
    // app.use(webpackDevMiddleware(compiler, {
    //     logLevel: 'warn', 
    //     publicPath: webpackConfig.output.publicPath
    // }));
    // // Step 3: Attach the hot middleware to the compiler & the server
    // app.use(webpackHotMiddleware(compiler, {
    //     log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    // }));
    // app.listen(3000, () => console.log('Example app listening on port 3000!'));
    const options = {
        contentBase: './dist',
        hot: true,
        host: '0.0.0.0',
        // open: true,
        // clientLogLevel: "none",
        compress: true,
        // noInfo: true
    };
    // webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
    const server = new webpackDevServer(compiler, options);

    server.listen(3000, '0.0.0.0', () => {
        console.log('dev server listening on port 5000');
    });
}