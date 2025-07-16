// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx', // точка входа
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
        hot: true, // поддержка hot reload
        open: true, // автоматически открывать браузер
        historyApiFallback: true, // для SPA с React Router
    },
    mode: 'development', // режим разработки
    devtool: 'eval-source-map', // удобная отладка
};
