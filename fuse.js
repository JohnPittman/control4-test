'use strict';

import {
    FuseBox,
    WebIndexPlugin,
    CopyPlugin,
    CSSPlugin,
    QuantumPlugin,
    PostCSSPlugin
} from 'fuse-box';
import { task, context } from 'fuse-box/sparky';
import * as postcssNested from 'postcss-nested';
import * as postcssNestedAncestors from 'postcss-nested-ancestors';

import * as path from 'path';
import * as express from 'express';

const isProduction = process.env.NODE_ENV === 'production';

context(
    class {
        getConfig() {
            return FuseBox.init({
                cache: !isProduction,
                hash: isProduction,
                homeDir: 'src',
                log: true,
                output: 'public/$name.js',
                plugins: [
                    // Generate index.html.
                    WebIndexPlugin({
                        appendBundles: true,
                        template: `src/templates/index.html`
                    }),

                    // Process CSS.
                    [
                        PostCSSPlugin([postcssNested, postcssNestedAncestors]),
                        CSSPlugin({
                            inject: (file) => {
                                // Forward slash '/' to serve files relative to root directory.
                                // Otherwise, serves relative to current route.
                                return `/${file}`;
                            },
                            minify: isProduction,
                            outFile: (file) => {
                                return `public/${file}`;
                            }
                        })
                    ],

                    // Copy assets.
                    CopyPlugin({ files: ['.ico'], dest: 'images' }),

                    // Optimazation.
                    isProduction &&
                        QuantumPlugin({
                            css: {
                                clean: true
                            },
                            ensureES5: false, // Ensures that all code that is in es5
                            extendServerImport: false, // If you are using dynamic import statements to load remote javascript files. note: Install request library beforehand
                            manifest: false, // Generates manifest.json
                            processPolyfill: false, // Removes "use strict" from the code
                            removeExportsInterop: true, // Removes Object.defineProperty(exports, '__esModule', { value: true });
                            removeUseStrict: false,
                            replaceProcessEnv: true, // Replaces process.env.NODE_ENV with a string identifier "production"
                            replaceTypeOf: true, // Replaces typeof module, typeof exports, typeof window, typeof define, typeof require keywords to corresponding values at build time
                            treeshake: true,
                            uglify: {
                                es6: true
                            }, // Quantum supports both uglify-js and uglify-es. Which one to use is determined by es6 option.
                            warnings: false
                        })
                ],
                sourceMap: isProduction ? false : { inline: false },
                tsConfig: 'tsconfig.json'
            });
        }

        createBundle(fuseConfig) {
            const app = fuseConfig.bundle('app');

            if (isProduction) {
                fuseConfig.bundle('vendor').instructions('~ client.tsx');
                app.instructions('> [client.tsx]');
            } else {
                app.instructions('> client.tsx');
            }

            return app;
        }

        createDevServer(fuseConfig) {
            fuseConfig.dev({ root: false }, (server) => {
                const outPath = path.resolve('./public');
                const app = server.httpServer.app;

                app.use(express.static(outPath));

                app.get('*', (req, res) => {
                    res.sendFile(path.join(outPath, 'index.html'));
                });
            });
        }
    }
);

task('build', async (ctx) => {
    const fuseConfig = ctx.getConfig();

    ctx.createBundle(fuseConfig);

    await fuseConfig.run();
});

task('start-local:dev', async (ctx) => {
    const fuseConfig = ctx.getConfig();

    ctx
        .createBundle(fuseConfig)
        .watch()
        .hmr();

    ctx.createDevServer(fuseConfig);

    await fuseConfig.run({
        // https://github.com/paulmillr/chokidar
        chokidar: {
            usePolling: false
        }
    });
});

task('start-local-docker:dev', async (ctx) => {
    const fuseConfig = ctx.getConfig();

    ctx
        .createBundle(fuseConfig)
        .watch()
        .hmr();

    ctx.createDevServer(fuseConfig);

    await fuseConfig.run({
        // https://github.com/paulmillr/chokidar
        chokidar: {
            persistent: true,

            cwd: '.',
            disableGlobbing: false,
            followSymlinks: true,
            ignoreInitial: false,
            ignored: '*.txt',

            alwaysStat: false,
            awaitWriteFinish: false,
            binaryInterval: 300,
            depth: 99,
            interval: 75,
            usePolling: true,

            atomic: true,
            ignorePermissionErrors: false
        }
    });
});
