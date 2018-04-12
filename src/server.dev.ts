const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackDevConfig = require('../webpack.dev.config');

// Global application variables.
const PORT = process.env.PORT || 9000;

// Create express application.
const app = express();

// Webpack compiler.
const webpackCompiler = webpack(webpackDevConfig);
const webpackDevInstance = webpackDevMiddleware(webpackCompiler, {
    lazy: false,
    publicPath: webpackDevConfig.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
        aggregateTimeout: 0,
        poll: 250
    }
});

// Middleware.
app.use(webpackDevInstance);
app.use(
    webpackHotMiddleware(webpackCompiler, {
        heartbeat: 10 * 1000,
        log: console.log,
        path: '/__webpack_hmr'
    })
);

// Start server.
app.listen(PORT, () => {
    // tslint:disable-next-line
    console.log(`Server running on port: ${PORT}`);
});

// Graceful shutdown.
process.on(`SIGINT`, () => {
    process.exit(0);
});
