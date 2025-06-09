const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// @ts-check
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        // hot: true,
        // port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    // ],
    // watch: true,
    // optimization: {
    //     runtimeChunk: 'single',
    // },
};
