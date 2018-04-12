const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackSharedConfig = require('./webpack.shared.config');

module.exports = webpackMerge(webpackSharedConfig, {
    entry: {
        index: [`${__dirname}/src/client.tsx`]
    },

    output: {
        chunkFilename: '[id].[chunkhash].js',
        filename: '[name].[hash].js',
        path: `${__dirname}/public`,
        publicPath: 'public' // TODO: Use CDN or remove if hosting from private static web server.
    },

    mode: 'production',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },

    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false // set to true if you want JS source maps
            })
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: false,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },

    plugins: [
        // Generate CSS files.
        new MiniCSSExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            chunkFilename: '[id].[chunkhash].css',
            filename: '[name].[hash].css'
        }),
        // Generate index.html witih injected dependencies.
        new HTMLWebpackPlugin({
            cache: true,
            filename: 'index.html',
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            },
            template: `${__dirname}/src/templates/index.html`
        }),
        // Remove React's development overhead.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
