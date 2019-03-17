const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyPlugin = require('uglifyjs-webpack-plugin')
const optmizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')

const modeDev = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: modeDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: './app.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/css/bootstrap.min.css'
        }
    },
    optimization: {
        minimizer: [
            new uglifyPlugin({
                cache: true,
                parallel: true
            }),
            new optmizeCssAssetPlugin({})
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'style.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                loader: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node-modules/
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png|gif)(\?.*$|$)/,
                loader: 'file-loader'
            }
        ]
    }
}