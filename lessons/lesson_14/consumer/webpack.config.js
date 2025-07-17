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
        filename: 'bundle.js',
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
        // new ModuleFederationPlugin({
        //     name: 'ONA_WIDGETS',
        //     filename: 'remoteEntry.js',
        //     // exposes: {
        //     //     ...Widgets,
        //     // },
        //     shared: {

        //     },
        // }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                remote: 'remote@http://localhost:3001/remoteEntry.js',
            },
        }),
        // new ModuleFederationPlugin(mfConfig),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
        hot: true, // поддержка hot reload
        open: true, // автоматически открывать браузер
        historyApiFallback: true, // для SPA с React Router
        // proxy: {
        //     '/mf-manifest.json': {
        //         target: 'http://localhost:3001',
        //         pathRewrite: { '^/mf-manifest.json': '/mf-manifest.json' },
        //         changeOrigin: true,
        //     },
        // },
    },
    mode: 'development', // режим разработки
    devtool: 'eval-source-map', // удобная отладка

};
