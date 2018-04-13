'use strict';

import { CSSPlugin, FuseBox, PostCSSPlugin, QuantumPlugin, WebIndexPlugin } from 'fuse-box';

import { context, task } from 'fuse-box/sparky';

import * as postcssNested from 'postcss-nested';

const isProduction = process.env.NODE_ENV === 'production';

/*
CONFIG
*/

let contextConfig = {};

context(() => {
    if (contextConfig !== null) {
        contextConfig = FuseBox.init({
            target: 'browser@es6',
            cache: !isProduction,
            hash: isProduction,
            log: true,
            useTypescriptCompiler: true,
            homeDir: 'src',
            output: `public/$name.js`,
            tsConfig: 'tsconfig.json',
            modulesFolder: 'node_modules',
            sourceMaps: {
                project: false,
                vendor: false
            },
            plugins: [
                [
                    PostCSSPlugin([postcssNested]),
                    CSSPlugin({
                        outFile: (file) => {
                            return `public/${file}`;
                        },
                        inject: (file) => {
                            return `${file}`;
                        },
                        minify: isProduction
                    })
                ],

                // JavaScript optimazations.
                isProduction &&
                    QuantumPlugin({
                        ensureES5: false, // Ensures that all code that is in es5
                        extendServerImport: false, // If you are using dynamic import statements to load remote javascript files. note: Install request library beforehand
                        manifest: true, // Generates manifest.json
                        processPolyfill: false, // Removes "use strict" from the code
                        removeExportsInterop: true, // Removes Object.defineProperty(exports, '__esModule', { value: true });
                        removeUseStrict: false,
                        replaceProcessEnv: true, // Replaces process.env.NODE_ENV with a string identifier "production"
                        replaceTypeOf: true, // Replaces typeof module, typeof exports, typeof window, typeof define, typeof require keywords to corresponding values at build time
                        target: 'browser@es6', // Default value: browser Possible values server, browser, universal, electron, npm
                        treeshake: true,
                        warnings: false,
                        uglify: {
                            es6: true
                        }, // Quantum supports both uglify-js and uglify-es. Which one to use is determined by es6 option.
                        css: {
                            clean: true
                        }
                    }),

                // Generate index.html.
                WebIndexPlugin({
                    template: `src/templates/index.html`,
                    appendBundles: true
                })
            ]
        });
    }

    return contextConfig;
});

/*
TASKS
*/

/* Build */

task('build', async (fuseConfig) => {
    fuseConfig.bundle('vendor').instructions('~ client.tsx');

    fuseConfig.bundle('app').instructions('!> client.tsx');

    return await fuseConfig.run();
});

task('build:dev', async (fuseConfig) => {
    fuseConfig.bundle('app').instructions('> client.tsx');

    return await fuseConfig.run();
});

/* Run */

task('init:dev', (fuseConfig) => {
    fuseConfig
        .bundle('app')
        .instructions('> client.tsx')
        .watch()
        .hmr();

    fuseConfig.dev({
        port: 4444,
        httpServer: true,
        root: 'public'
    });
});

task('start:dev', ['init:dev'], async (fuseConfig) => {
    return await fuseConfig.run();
});

task('start-docker:dev', ['init:dev'], async (fuseConfig) => {
    return await fuseConfig.run({
        // https://github.com/paulmillr/chokidar
        chokidar: {
            persistent: true,

            ignored: '*.txt',
            ignoreInitial: false,
            followSymlinks: true,
            cwd: '.',
            disableGlobbing: false,

            usePolling: true,
            interval: 75,
            binaryInterval: 300,
            alwaysStat: false,
            depth: 99,
            awaitWriteFinish: false,

            ignorePermissionErrors: false,
            atomic: true
        }
    });
});
