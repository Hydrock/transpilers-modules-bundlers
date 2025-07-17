// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {
//     ModuleFederationPlugin,
// } = require('@module-federation/enhanced/webpack');
// const mfConfig = require('./module-federation.config');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.ts', // точка входа
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
        clean: true, // очищать dist перед каждой сборкой
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // поддержка .ts, .tsx, .js и .jsx
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/, // обрабатываем .ts, .tsx, .js и .jsx
                exclude: /node_modules/,
                use: 'babel-loader', // транспиляция через Babel
            },
            {
                test: /\.css$/, // поддержка CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // поддержка изображений
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // ваш шаблон HTML
        }),
        new ModuleFederationPlugin({
            name: 'remote', // this name needs to match with the entry name
            filename: "remoteEntry.js",
            exposes: {
                './Button': './src/components/Button.tsx',
            },
            shared: {
                react: {
                    singleton: true,
                },
                'react-dom': {
                    singleton: true,
                },
            },
        }),
        // new ModuleFederationPlugin(mfConfig),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3001,
        hot: true, // поддержка hot reload
        open: true, // автоматически открывать браузер
        historyApiFallback: true, // для SPA с React Router,
        headers: {
            'Access-Control-Allow-Origin': '*', // Разрешить все источники
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    mode: 'development', // режим разработки
    devtool: 'eval-source-map', // удобная отладка
};
