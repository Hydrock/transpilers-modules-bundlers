const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    // mode: 'development',
    mode: 'production',
    devtool: 'inline-source-map'
}
