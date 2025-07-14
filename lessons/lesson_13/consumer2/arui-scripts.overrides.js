const path = require('path');
module.exports = {
    webpack: (config, applicationConfig) => {
        console.log('config:', JSON.stringify(config, null, ' '));
        // config.resolve.alias = {
        //     components: path.resolve(__dirname, 'src/components')
        // };
        return config;
    }
};
