const path = require('path');

// @ts-check
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    target: "node",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.mjs$/,
                type: 'javascript/esm',
            },
            {
                test: /\.cjs$/,
                type: 'javascript/dynamic',
            },
            {
                test: /\.json$/,
                type: 'json',
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
        ],
    },
    externals: {
        // path: 'window path',
    },
}

