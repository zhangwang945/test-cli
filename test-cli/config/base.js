const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const cwd = process.cwd()
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&noInfo=true';

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: __dirname,//必须要有否则可能出问题
    target: 'web',
    // entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true', path.join(cwd, '/src/index.js')],
    // entry: {
    //     index: [path.join(cwd, 'src/index.js'), hotMiddlewareScript],
    //     // bundle: [path.join(cwd, 'src/bundle.js'), hotMiddlewareScript]
    // },
    entry: {
        app: path.join(cwd, 'src/index.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(cwd, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    plugins: ['@babel/plugin-syntax-dynamic-import']
                }
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin({
            title: 'test',
            template: path.join(cwd, '../project/src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new VueLoaderPlugin()
    ]
}