const path = require('path');

module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
        hot: true
    },
    devtool: 'inline-source-map',
};
