var express_1 = require('express');
var webpack_1 = require('webpack');
var webpack_dev_middleware_1 = require('webpack-dev-middleware');
var webpack_hot_middleware_1 = require('webpack-hot-middleware');
var webpack_dev_config_1 = require('../webpack.dev.config');
// Global application variables.
var PORT = process.env.PORT || 9000;
// Create express application.
var app = express_1["default"]();
// Webpack compiler.
var webpackCompiler = webpack_1["default"](webpack_dev_config_1["default"]);
var webpackDevInstance = webpack_dev_middleware_1["default"](webpackCompiler, {
    lazy: false,
    publicPath: webpack_dev_config_1["default"].output.publicPath,
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
app.use(webpack_hot_middleware_1["default"](webpackCompiler, {
    heartbeat: 10 * 1000,
    log: console.log,
    path: '/__webpack_hmr'
}));
// Start server.
app.listen(PORT, function () {
    // tslint:disable-next-line
    console.log("Server running on port: " + PORT);
});
// Graceful shutdown.
process.on("SIGINT", function () {
    process.exit(0);
});
