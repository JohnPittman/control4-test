const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackSharedConfig = require('./webpack.shared.config');

module.exports = webpackMerge(webpackSharedConfig, {
    entry: {
        index: [
            'react-hot-loader/patch',
            `${__dirname}/src/client.dev.tsx`,
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
        ]
    },

    output: {
        chunkFilename: '[id].js',
        filename: '[name].js',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
        path: `${__dirname}/public`,
        publicPath: `/`
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader' // transforms future css features
                ]
            }
        ]
    },

    plugins: [
        // Causes the relative path of the module to be displayed
        // when HMR is enabled.
        new webpack.NamedModulesPlugin(),
        // Allows for hot reload.
        new webpack.HotModuleReplacementPlugin(),
        // Generate index.html witih injected dependencies.
        new HTMLWebpackPlugin({
            cache: true,
            filename: 'index.html',
            template: `${__dirname}/src/templates/index.html`
        })
    ]
});