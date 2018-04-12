const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },

    plugins: [
        // Don't emmit build when there was an error while compiling
        // No assets are emitted that include errors
        new webpack.NoEmitOnErrorsPlugin()
    ],

    resolve: {
        // All file types that can be imported within a JavaScript file.
        // Allows leaving the extension name off of the path.
        // Ex. import 'test.json';
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.css',
            '.scss',
            '.html'
        ],
        // Fields in priority order to look for as the main file in package.json.
        mainFields: ['browser', 'main']
    }
};
