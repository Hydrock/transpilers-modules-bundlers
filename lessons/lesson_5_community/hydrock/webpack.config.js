const path = require('path');

// @ts-check
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    externals: {
        path: 'global path'
    }
}
