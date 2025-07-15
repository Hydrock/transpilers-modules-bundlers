const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack');

const mfConfig = {
    name: 'host',
    remotes: {
        provider: 'provider@http://localhost:3001/mf-manifest.json',
    },
    // exposes: {
    //     './Button': './src/components/Button.tsx',
    // },
    // shared: {
    //     react: {
    //         singleton: true,
    //     },
    //     'react-dom': {
    //         singleton: true,
    //     },
    // },
};



module.exports = {
    webpack: (config, applicationConfig) => {
        // console.log('config:', JSON.stringify(config, null, ' '));


        config.plugins.push(new ModuleFederationPlugin(mfConfig));
        // config.resolve.alias = {
        //     components: path.resolve(__dirname, 'src/components')
        // };
        return config;
    }
};
